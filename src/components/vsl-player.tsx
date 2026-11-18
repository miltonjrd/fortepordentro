import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, VolumeX } from "lucide-react";

type VslPlayerProps = {
  src: string;
  title: string;
  className?: string;
};

// Player de VSL no estilo dos players de vendas: o vídeo começa mudo e em loop, com um
// aviso "clique para ouvir". No primeiro toque ele volta ao início com som e, depois
// disso, um toque pausa ou retoma. Sem controles nativos, com barra de progresso fina.
// Curva da barra: avança rápido no começo e desacelera, chegando a 100% junto com o vídeo.
const easeProgress = (p: number) => 1 - Math.pow(1 - p, 2);

export function VslPlayer({ src, title, className = "" }: VslPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [unlocked, setUnlocked] = useState(false);
  // O botão de play só aparece quando o visitante pausa, o vídeo termina ou o play falha.
  const [showPlay, setShowPlay] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // O React não escreve o atributo `muted` no HTML; sem isso o autoplay é bloqueado no celular.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    void v.play().catch(() => {});
  }, []);

  const unlock = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.loop = false;
    v.currentTime = 0;
    setProgress(0);
    setShowPlay(false);
    setUnlocked(true);
    v.play().catch(() => setShowPlay(true));
  };

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.ended) v.currentTime = 0;
    if (v.paused || v.ended) {
      setShowPlay(false);
      v.play().catch(() => setShowPlay(true));
    } else {
      v.pause();
      setShowPlay(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-black shadow-xl ${className}`}>
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={title}
        className="h-full w-full object-cover"
        onPlay={() => setEnded(false)}
        onEnded={() => {
          setEnded(true);
          setShowPlay(true);
        }}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
      />

      {!unlocked ? (
        <button
          type="button"
          onClick={unlock}
          aria-label={`Ouvir com som: ${title}`}
          className="group absolute inset-0 flex items-center justify-center p-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
        >
          <span className="flex w-full max-w-[10.5rem] flex-col items-center gap-2 rounded-md border border-white/80 bg-primary/85 backdrop-blur-[2px] font-['Supreme_Bold',sans-serif] px-3 py-4 text-center text-white shadow-2xl transition-transform group-hover:scale-105">
            <span className="text-sm font-bold leading-tight">Sua aula já começou...</span>
            <VolumeX className="h-12 w-12" strokeWidth={2.25} aria-hidden="true" />
            <span className="text-sm font-extrabold uppercase leading-tight">
              Clique para ouvir!
            </span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={toggle}
          aria-label={showPlay ? `Assistir: ${title}` : `Pausar: ${title}`}
          className="group absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
        >
          {showPlay && (
            <>
              <span className="absolute inset-0 bg-black/40" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl ring-8 ring-accent/30 transition-transform group-hover:scale-105">
                {ended ? (
                  <RotateCcw className="h-9 w-9" aria-hidden="true" />
                ) : (
                  <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
                )}
              </span>
            </>
          )}
        </button>
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-white/25"
        aria-hidden="true"
      >
        <div
          className="h-full bg-destructive"
          style={{ width: `${easeProgress(progress) * 100}%` }}
        />
      </div>
    </div>
  );
}
