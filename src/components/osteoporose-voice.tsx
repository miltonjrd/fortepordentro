import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import clip from "@/assets/osteoporose-ossos-voz.mp4";
import poster from "@/assets/avos-shopping.webp";

const FALA = "Você sabe o que pode fazer hoje para cuidar melhor dos seus ossos?";

export function OsteoporoseVoice() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(false);

  const ouvir = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {});
    setTocando(true);
  };

  const parar = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setTocando(false);
  };

  // A fala toca uma vez; depois o clipe volta a rodar em silêncio.
  const aoTerminar = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setTocando(false);
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <figure className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-xl border bg-card shadow-sm">
      <video
        ref={videoRef}
        src={clip}
        poster={poster}
        autoPlay
        muted
        playsInline
        onEnded={aoTerminar}
        aria-label={`Cena de avós caminhando com os netos em um shopping, com a pergunta: ${FALA}`}
        className="aspect-video w-full object-cover"
      />
      <figcaption className="flex flex-col items-center gap-4 px-5 py-6 text-center">
        <p className="max-w-xl text-lg font-bold leading-snug text-primary md:text-xl">
          &ldquo;{FALA}&rdquo;
        </p>
        <Button
          type="button"
          onClick={tocando ? parar : ouvir}
          aria-pressed={tocando}
          className="h-auto min-h-11 whitespace-normal bg-accent px-6 py-3 text-base font-bold text-accent-foreground hover:bg-accent/90"
        >
          {tocando ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          {tocando ? "Parar o áudio" : "Ouvir a pergunta"}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Cena e narração geradas por inteligência artificial. Conteúdo educativo.
        </p>
      </figcaption>
    </figure>
  );
}
