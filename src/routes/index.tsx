import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ShieldCheck,
  Dumbbell,
  Apple,
  Footprints,
  Repeat,
  Gift,
  AlertTriangle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import alongamento from "@/assets/alongamento.webp";
import maurosemfundo from "@/assets/mauro-sem-fundo.webp";
import fundoEscritorio from "@/assets/fundo-escritorio.webp";
import { VslPlayer } from "@/components/vsl-player";
import vslCompleto from "@/assets/videos/VSL-COMPLETO.mp4";
import ebook from "@/assets/mockup-3d-ebook.webp";
import logo from "@/assets/emblema.webp";
import { ebookItems, ebookOffer, ebookSavings, formatBRL } from "@/lib/ebook-offer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORTE POR DENTRO | EU AINDA FAÇO SOZINHO | Guia prático de força no dia a dia" },
      {
        name: "description",
        content:
          "Guia prático para manter a força no dia a dia: levantar da cadeira, subir escadas, carregar as compras e caminhar com confiança.",
      },
      { property: "og:title", content: "FORTE POR DENTRO | EU AINDA FAÇO SOZINHO" },
      {
        property: "og:description",
        content:
          "Continue fazendo as suas coisas sozinho, com força e confiança. E-book + 3 bônus por R$ 67,00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CTA({ children, href = "#oferta" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className={`btn-cta w-full text-base sm:w-auto md:text-lg`}>
      {children}
    </a>
  );
}

function BuyButton({ className, children }: { className: string; children: React.ReactNode }) {
  if (!ebookOffer.checkoutUrl) {
    return (
      <button type="button" disabled className={`${className} cursor-not-allowed opacity-70`}>
        COMPRA DISPONÍVEL EM BREVE
      </button>
    );
  }
  return (
    <a href={ebookOffer.checkoutUrl} className={`${className}`}>
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  children,
  alt,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={alt ? "bg-secondary py-12 md:py-20" : "py-12 md:py-20"}>
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <h2 className="mb-8 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {title}
          </h2>
        )}
        <div className="space-y-5 text-lg leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

const imagine = [
  "Subir escadas com segurança",
  "Levantar da cadeira com firmeza",
  "Carregar as compras do mercado sem pedir ajuda",
  "Caminhar com equilíbrio e confiança",
];

const modules = [
  {
    icon: Dumbbell,
    t: "Exercícios para fazer em casa",
    d: "Dicas de movimentos para manter o corpo sempre em atividade, do mais simples ao mais desafiador.",
  },
  {
    icon: Apple,
    t: "Alimentação e proteínas",
    d: "Instruções sobre alimentação e consumo de proteínas essenciais para o dia a dia.",
  },
  {
    icon: Repeat,
    t: "Rotinas para manter a força",
    d: "Sugestões de rotinas para manter a força por mais tempo.",
  },
  {
    icon: Footprints,
    t: "Para começar no seu ritmo",
    d: "Recomendações gerais para começar em casa, no seu ritmo.",
  },
];

const bonuses = [
  {
    t: "Guia de Primeiros Passos",
    d: "Para você não travar e começar com segurança, respeitando o seu ritmo.",
  },
  {
    t: "Checklist de Segurança em Casa",
    d: "Para treinar com mais tranquilidade e deixar a casa mais prática e segura no dia a dia.",
  },
  {
    t: "Manual de Proteínas Simples",
    d: "Combinações fáceis para o seu dia a dia, sem dietas complexas.",
  },
];

const faqs = [
  [
    "Para quem é este guia?",
    "Para quem quer manter a força e a independência no dia a dia: levantar da cadeira, subir escadas, caminhar e carregar as compras. Não é preciso ter experiência com exercícios nem ser atleta.",
  ],
  [
    "O que eu recebo ao comprar?",
    `O e-book Forte por Dentro e três bônus: Guia de Primeiros Passos, Checklist de Segurança em Casa e Manual de Proteínas Simples. Tudo por ${formatBRL(ebookOffer.price)}, em pagamento único e sem cobrança adicional.`,
  ],
  [
    "Tenho alguma limitação ou dor. Posso usar o guia?",
    "O material é educativo e feito para ser adaptado ao seu ritmo. Se você tem alguma limitação, converse com o seu médico antes de começar. O guia não substitui a orientação de um profissional de saúde.",
  ],
  [
    "Em quanto tempo vou perceber diferença?",
    "Cada pessoa tem o seu ritmo, e os resultados variam. O que mais conta é a constância: pequenos hábitos repetidos ao longo das semanas.",
  ],
  [
    "Preciso mudar toda a minha alimentação?",
    "Não. O guia mostra como incluir proteína no dia a dia com escolhas simples. Se você segue alguma orientação alimentar específica, converse com o seu médico ou nutricionista antes de mudar.",
  ],
  [
    "Como recebo o material?",
    "O acesso é digital e liberado após a confirmação do pagamento, com as instruções no seu e-mail. Você lê no celular, no tablet ou no computador, quando quiser.",
  ],
  [
    "O pagamento é seguro?",
    "Sim. A compra é processada em ambiente seguro pela Hotmart, uma das maiores plataformas de produtos digitais do Brasil.",
  ],
  [
    "E se eu achar que não é para mim?",
    "A oferta tem garantia de 7 dias. Dentro do prazo, basta seguir as instruções da plataforma de pagamento para pedir o reembolso.",
  ],
];

function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-white md:block md:h-[800px] md:min-h-0">
        <img
          src={fundoEscritorio}
          alt=""
          aria-hidden="true"
          width={1376}
          height={768}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Desfoque que cobre a área dos textos e some em direção ao doutor */}
        <div
          aria-hidden="true"
          className="hero-veil absolute inset-0 bg-[oklch(0.22_0.06_235)]/80 backdrop-blur-[2px] md:bg-[oklch(0.22_0.06_235)]/90 md:backdrop-blur-md"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-4 sm:px-6 md:h-full md:py-0 md:pt-16">
          <div className="flex h-full flex-col items-center gap-6 text-center md:flex-row md:items-end md:gap-10">
            <div className="text-center md:self-center md:pb-16 md:text-left">
              <h1 className="max-w-2xl font-display text-2xl font-bold leading-snug text-accent [text-shadow:0_2px_14px_rgb(0_0_0/0.55)] sm:text-4xl md:[text-shadow:none]">
                Aprenda a recuperar sua força e autonomia, sem ter medo de envelhecer
              </h1>
              <p className="mt-3 max-w-xl text-sm font-semibold leading-relaxed text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.7)] sm:mt-6 sm:text-lg md:text-xl md:[text-shadow:none]">
                Conheça um guia prático para manter a sua força nas atividades do dia a dia:
                levantar da cadeira, caminhar, subir escadas ou carregar compras, sem sair de casa.
              </p>
              <VslPlayer
                src={vslCompleto}
                title="Vídeo de apresentação do guia Forte por Dentro"
                className="mx-auto mt-4 aspect-[9/16] h-[max(12rem,calc(100svh-23rem))] w-auto max-w-full md:hidden"
              />
              <div className="mt-4 md:mt-8">
                <CTA>QUERO CUIDAR DA MINHA FORÇA AGORA</CTA>
              </div>
            </div>

            <img
              src={maurosemfundo}
              alt="Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista"
              width={500}
              height={700}
              className="mx-auto hidden h-auto w-full object-contain md:block md:max-w-[550px]"
            />
          </div>
        </div>
      </section>

      <Section title="">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-primary md:text-4xl">
              Imagine fazer tudo isso com firmeza e tranquilidade:
            </h2>

            <ul className="space-y-4">
              {imagine.map((p) => (
                <li key={p} className="flex gap-3 font-semibold">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="font-semibold mt-8">
              Se esses são os seus objetivos, este material foi feito para você.
            </p>
          </div>
          <img
            src={alongamento}
            alt="Casal se alongando ao ar livre no parque"
            width={1536}
            height={1024}
            loading="lazy"
            className="h-auto w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </Section>

      {/* PRODUTO */}
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <img
            src={ebook}
            alt="Capa do e-book Eu Ainda Faço Sozinho, do Dr. Mauro Pedrin"
            width={1200}
            height={1800}
            loading="lazy"
            className="order-last mx-auto h-auto w-full max-w-xs md:order-first md:max-w-sm"
          />
          <div className="space-y-5 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Um guia prático para manter a sua força
            </h2>
            <p>
              O guia <strong>"Forte por Dentro"</strong> é um e-book educativo que traz o cuidado
              com a força para a sua realidade, com exercícios, alimentação e hábitos simples.
            </p>
            <p>
              Leia no seu ritmo e volte aos tópicos quando precisar. Formato digital para celular,
              tablet ou computador.
            </p>
            <CTA>QUERO CONHECER O GUIA</CTA>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-primary md:text-4xl">
            O que você ganha com este guia:
          </h2>
          <div className="grid gap-5 md:grid-cols-4">
            {modules.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6">
                <I className="mb-3 h-8 w-8 text-accent" />
                <h3 className="mb-2 text-xl font-bold text-primary">{t}</h3>
                <p className="mb-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-12 md:pt-20">
        <img
          src={fundoEscritorio}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1376}
          height={768}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.06]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed md:pb-20">
            <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl">
              Quem escreveu este material?
            </h2>
            <p>Eu sou o Dr. Mauro Augusto Artolphi Pedrin.</p>
            <p>
              Médico ortopedista, vi de perto como a força faz falta até mesmo nas tarefas mais
              simples do cotidiano. Escrevi este guia após anos de observação, estudo e trabalho
              constante com os meus pacientes.
            </p>
            <p>
              Meu objetivo com este guia é levar esse conhecimento em linguagem simples, para que
              mais pessoas mantenham a autonomia por mais tempo.
            </p>
            <p className="font-semibold text-primary">
              Porque cuidar da força também é cuidar da sua autonomia.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm self-end md:max-w-none">
            <img
              src={maurosemfundo}
              alt="Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista"
              width={923}
              height={1152}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
            <div className="absolute bottom-5 left-1/2 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/90 px-4 py-2.5 text-center shadow-lg ring-1 ring-black/5 backdrop-blur-md">
              <p className="font-display text-base font-bold leading-tight text-primary">
                Dr. Mauro Augusto Artolphi Pedrin
              </p>
              <p className="text-xs leading-snug text-foreground/80">Médico ortopedista</p>
              <p className="text-xs leading-snug text-foreground/80">CRM-DF 15789 | RQE 11028</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 md:py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            3 materiais para complementar sua experiência
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {bonuses.map((b, i) => (
              <div key={b.t} className="rounded-2xl border border-primary-foreground/20 p-6">
                <Gift className="mb-3 h-8 w-8 text-accent" />
                <p className="text-sm font-bold uppercase tracking-wider text-accent">
                  Bônus {i + 1}
                </p>
                <h3 className="mb-2 text-xl font-bold">{b.t}</h3>
                <p className="text-base opacity-85">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-card p-0 text-center md:p-12">
            <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
              Comece hoje a cuidar da sua força
            </h2>
            <ul className="mx-auto mb-8 max-w-xl divide-y text-left text-base sm:text-lg">
              {ebookItems.map((item) => (
                <li key={item.name} className="flex items-start gap-3 py-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="flex-1">{item.name}</span>
                  <span className="whitespace-nowrap font-sans font-semibold lining-nums tabular-nums text-foreground/70 preco-riscado">
                    {formatBRL(item.price)}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 py-3 font-semibold">
                <span>Tudo comprado separadamente</span>
                <span className="whitespace-nowrap font-sans font-semibold lining-nums tabular-nums text-foreground/70 preco-riscado">
                  {formatBRL(ebookOffer.originalPrice)}
                </span>
              </li>
            </ul>
            <p className="mb-1 text-base font-semibold text-muted-foreground">
              Hoje, tudo isso por apenas
            </p>
            <p className="mb-2 font-['Supreme_Bold',sans-serif] text-5xl font-bold sm:text-6xl lining-nums tabular-nums text-primary">
              {formatBRL(ebookOffer.price)}
            </p>
            <p className="mb-1 text-base font-semibold text-primary">
              Você economiza {formatBRL(ebookSavings)}
            </p>
            <p className="mb-8 text-base text-muted-foreground">Pagamento único.</p>
            <BuyButton className="btn-cta w-full md:w-auto text-base sm:text-lg">
              QUERO GARANTIR MEU ACESSO POR {formatBRL(ebookOffer.price).replace(/\u00a0/g, " ")}
            </BuyButton>
            <p className="mt-3 text-sm text-muted-foreground">
              Pagamento processado em ambiente seguro pela Hotmart.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl items-start gap-4 border-t pt-8 text-left">
              <ShieldCheck className="h-12 w-12 shrink-0 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-bold text-primary">Garantia de 7 dias</h3>
                <p className="text-sm leading-relaxed sm:text-base">
                  Você tem 7 dias para ler e colocar em prática. Se achar que o material não é para
                  você, basta pedir o reembolso pelo procedimento da plataforma de pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Perguntas frequentes">
        <Accordion type="single" collapsible>
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <section className="bg-primary py-12 md:py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-6xl space-y-5 px-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold md:text-4xl">
            Dê o próximo passo para uma vida mais forte
          </h2>
          <p className="opacity-90">Informação prática para cuidar da sua força, no seu ritmo.</p>
          <p className="font-display text-2xl">
            Cuide da sua força. Valorize sua autonomia. Invista em conhecimento.
          </p>
          <div className="pt-4">
            <CTA href={ebookOffer.checkoutUrl ?? "#oferta"}>
              QUERO MEU E-BOOK FORTE POR DENTRO AGORA
            </CTA>
          </div>
          <p className="text-sm opacity-75 font-bold">
            Pagamento único de R$ 67,00. Garantia de 7 dias.
          </p>
        </div>
      </section>

      <footer className="bg-secondary py-10">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl bg-card px-6 py-3 shadow-sm sm:px-8 sm:py-4">
            <img
              src={logo}
              alt="Eu Ainda Faço Sozinho"
              width={639}
              height={627}
              loading="lazy"
              className="h-20 w-auto"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl gap-3 px-6 text-sm text-muted-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
          <p>
            Material educativo e informativo. Não substitui a orientação de um profissional de
            saúde. Os resultados variam de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </main>
  );
}
