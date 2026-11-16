import { Check, Instagram, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import perfil from "@/assets/ig-perfil.jpg.asset.json";

export const INSTAGRAM_URL = "https://www.instagram.com/drmauroaugustoopedrin?srtk=aDF1eWF5bThwaTll";
export const INSTAGRAM_HANDLE = "@drmauroaugustoopedrin";

type InstagramFollowProps = {
  intro: string;
  themes: string[];
  proof: { quote: string; author: string; source: string };
};

export function InstagramFollow({ intro, themes, proof }: InstagramFollowProps) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border-2 border-accent bg-card p-6 shadow-lg md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={perfil.url}
              alt="Foto de perfil do Dr. Mauro Augusto Artolphi Pedrin no Instagram"
              width={100}
              height={100}
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-full border object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Instagram do autor
              </p>
              <p className="font-display text-[16px] font-bold break-words text-primary sm:text-2xl">
                {INSTAGRAM_HANDLE}
              </p>
              <p className="text-base text-muted-foreground">
                Dr. Mauro Augusto Artolphi Pedrin, CRM-DF 15789, RQE 11028, Ortopedia e
                Traumatologia
              </p>
            </div>
          </div>

          <p className="mt-5 text-lg leading-relaxed">{intro}</p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {themes.map((t) => (
              <li key={t} className="flex gap-2 text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl bg-secondary px-4 py-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
              <p>
                <strong>1.144</strong> seguidores
              </p>
              <p>
                <strong>24</strong> publicações
              </p>
              <p className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-accent" />
                ))}
                <span className="ml-1 font-semibold">avaliação no Google</span>
              </p>
            </div>
            <blockquote className="mt-3 pt-3 text-base leading-relaxed">
              <p>“{proof.quote}”</p>
              <footer className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">{proof.author}</strong>, {proof.source}
              </footer>
            </blockquote>
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild className="btn-cta h-auto whitespace-normal text-base">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              SEGUIR NO INSTAGRAM
            </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Perfil profissional do autor. Números públicos do perfil em outubro de 2026.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-sm font-semibold text-primary">E-mail do autor:</p>
            <Button asChild variant="link" className="h-auto min-w-0 max-w-full justify-start whitespace-normal p-0 text-base">
              <a href="mailto:mauroaapedrin@hotmail.com">
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-all">mauroaapedrin@hotmail.com</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
