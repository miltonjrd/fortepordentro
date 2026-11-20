import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { isUpsellHost, mainOrigin } from "@/lib/host-routing";
import {
  Apple,
  Bone,
  Check,
  ClipboardCheck,
  Dumbbell,
  Footprints,
  BookOpen,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatBRL, osteoporoseOffer, osteoporoseSavings } from "@/lib/osteoporose-offer";
import { VslPlayer } from "@/components/vsl-player";
import vsl from "@/assets/videos/VSL-OSTEOPOROSE.mp4";

import family from "@/assets/avos-shopping.webp";
import avosMercado from "@/assets/avos-mercado.jpg";
import author from "@/assets/mauro-cirurgia.webp";
import logo from "@/assets/emblema.webp";
import exercisePhoto from "@/assets/osteoporose-exercicios.webp";
import dairyPhoto from "@/assets/osteoporose-lacteos.webp";
import sunlightPhoto from "@/assets/osteoporose-sol.webp";
import fallRiskPhoto from "@/assets/osteoporose-quedas.webp";

export const Route = createFileRoute("/osteoporose")({
  head: () => ({
    meta: [
      { title: "Mais Forte Ainda por Dentro | Manual de Osteoporose | Dr. Mauro Pedrin" },
      {
        name: "description",
        content:
          "Conheça o manual educativo de saúde óssea: alimentação, exercícios adaptados e prevenção de quedas e fraturas. Por R$ 97,00.",
      },
      { property: "og:title", content: "Mais Forte Ainda por Dentro: Saúde óssea e osteoporose" },
      {
        property: "og:description",
        content:
          "O complemento do e-book Forte por Dentro para cuidar de ossos e músculos. Manual educativo do Dr. Mauro Pedrin por R$ 97,00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Osteoporose,
});

const topics = [
  {
    icon: Bone,
    title: "Entenda a saúde dos ossos",
    text: "Osteoporose, osteopenia, envelhecimento, menopausa e fatores de risco em mulheres e homens.",
  },
  {
    icon: Apple,
    title: "Alimentação para a saúde óssea",
    text: "Fontes de cálcio e proteínas, o papel da vitamina D e os cuidados com a suplementação.",
  },
  {
    icon: Dumbbell,
    title: "Movimento com segurança",
    text: "Princípios de fortalecimento, equilíbrio e postura, respeitando limitações e histórico de fraturas.",
  },
  {
    icon: Footprints,
    title: "Prevenção de quedas e fraturas",
    text: "Cuidados dentro e fora de casa, sinais de alerta e quando procurar atendimento.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação e acompanhamento",
    text: "Densitometria, preparação para a consulta e informações educativas sobre tratamentos.",
  },
  {
    icon: BookOpen,
    title: "Um plano para o dia a dia",
    text: "Plano educativo de 30 dias, checklist de saúde óssea, mitos e respostas às dúvidas frequentes.",
  },
];

const illustratedCare = [
  {
    image: exercisePhoto,
    alt: "Mulher idosa elevando os calcanhares com apoio em cadeira e acompanhamento profissional",
    title: "Exercícios adaptados",
    text: "Fortalecimento e equilíbrio, sempre respeitando seu condicionamento e seu histórico de fraturas.",
  },
  {
    image: dairyPhoto,
    alt: "Leite, iogurte natural e queijo branco como fontes alimentares de cálcio",
    title: "Alimentação láctea e cálcio",
    text: "Leite, iogurte e queijos ajudam com cálcio e proteínas. Se não consome lácteos, peça outras opções a um profissional.",
  },
  {
    image: sunlightPhoto,
    alt: "Casal idoso ao ar livre com chapéus e roupas de proteção solar",
    title: "Exposição solar com cuidado",
    text: "O sol ajuda a produzir vitamina D, mas não há um tempo ideal para todos. Evite queimaduras e peça orientação individual.",
  },
  {
    image: fallRiskPhoto,
    alt: "Mulher idosa e familiar identificando tapete dobrado e fio elétrico no caminho como riscos de queda",
    title: "Fatores de risco de quedas",
    text: "Tapetes soltos, fios, pouca luz e piso escorregadio aumentam o risco. Tontura, visão e alguns medicamentos também merecem avaliação.",
  },
];

function OfferLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#oferta-ossos" className="btn-cta w-full gap-2 text-base sm:w-auto md:text-lg">
      {children}
    </a>
  );
}

// No subdomínio, o link para a página principal precisa ser absoluto (outro host).
function useMainHref() {
  const [href, setHref] = useState("/");
  useEffect(() => {
    const { hostname, protocol } = window.location;
    if (isUpsellHost(hostname)) setHref(`${mainOrigin(hostname, protocol)}/`);
  }, []);
  return href;
}

function Osteoporose() {
  const mainHref = useMainHref();
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <img
          src={family}
          alt="Avós passeando com os netos em um shopping"
          width={1376}
          height={768}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[oklch(0.22_0.06_235)]/85 backdrop-blur-[2px]"
        />
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:px-0 md:py-20">
          <div className="text-center">
            <h1 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-snug tracking-tight text-accent [text-shadow:0_2px_14px_rgb(0_0_0/0.55)] sm:text-4xl md:[text-shadow:none]">
              Tenha autonomia e faça o que ama
              <br className="hidden sm:block" /> no seu próprio ritmo
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold leading-relaxed text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.7)] sm:mt-6 sm:text-lg md:text-xl md:[text-shadow:none]">
              O cuidado com os músculos continua nos ossos. A osteoporose não dói, não avisa e os
              primeiros sinais aparecem quando os ossos já podem estar fragilizados.
            </p>
            <VslPlayer
              src={vsl}
              title="Dr. Mauro explica a osteoporose e o manual"
              className="mx-auto mt-6 aspect-[9/16] w-full max-w-xs rounded-lg"
            />
            <div className="mt-7 flex justify-center">
              <OfferLink>QUERO CONHECER A OFERTA</OfferLink>
            </div>
          </div>
        </div>
      </section>

      <section id="o-que-e" className="bg-secondary py-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:px-0">
          <div className="md:flex-1">
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
              O que é osteoporose?
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              A osteoporose é uma doença crônica e silenciosa caracterizada pela diminuição da
              densidade e da qualidade dos ossos.{" "}
            </p>
            <p className="mt-5 text-lg leading-relaxed">
              Isso faz com que o tecido ósseo fique poroso e frágil, aumentando significativamente o
              risco de fraturas com impactos mínimos ou até mesmo espontâneos.
            </p>
            <p className="mt-5 text-lg leading-relaxed">
              Uma vez que ela pode evoluir sem sintomas, conhecer os fatores de risco ajuda a
              conversar com seu médico com antecedência.
            </p>
          </div>
          <img
            src={avosMercado}
            alt="Avós sorrindo no mercado com os netos, escolhendo frutas e verduras"
            width={1536}
            height={1024}
            loading="lazy"
            className="aspect-[3/2] w-full max-w-md rounded-2xl object-cover shadow-md md:w-2/5 md:max-w-none"
          />
        </div>
      </section>

      <section id="para-quem-e" className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Para quem é esse manual</h2>
          <ul className="mt-6 space-y-3 text-lg">
            {[
              "Adultos e idosos interessados em saúde óssea",
              "Familiares e cuidadores que querem ajudar com informação",
              "Quem já cuida dos músculos e quer cuidar também dos ossos",
              "Quem quer chegar à consulta com mais clareza para conversar com o médico",
            ].map((text) => (
              <li key={text} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-muted-foreground">
            A prevenção é abordada desde a infância, mas as orientações precisam ser adaptadas a
            cada fase da vida.
          </p>
        </div>
      </section>

      <section id="conteudo" className="bg-secondary py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            O que você encontrará no manual
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl bg-card p-6 shadow-sm">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-o-autor" className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 md:px-0 md:grid-cols-[1fr_1.5fr]">
          <img
            src={author}
            alt="Dr. Mauro Augusto Artolphi Pedrin em roupa de cirurgia"
            width={800}
            height={800}
            loading="lazy"
            className="aspect-square w-full max-w-sm rounded-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary">Conhecimento, experiência e cuidado</h2>
            <p className="mt-5 text-xl font-semibold">Dr. Mauro Augusto Artolphi Pedrin</p>
            <p className="mt-2">
              CRM-DF 15789, RQE 11028
              <br />
              Ortopedia e Traumatologia
            </p>
            <p className="mt-5 text-lg leading-relaxed">
              Com 22 anos de experiência, o autor propõe um cuidado integrado com ossos, músculos e
              capacidade funcional, em linguagem acessível e com responsabilidade médica.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              As orientações educativas devem ser adaptadas à idade, às condições de saúde e ao
              risco individual de fraturas.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cuidados-ilustrados" id="cuidados" className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h2 id="cuidados-ilustrados" className="text-3xl font-bold text-primary md:text-4xl">
            Cuidados que devem fazer parte da sua rotina
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {illustratedCare.map(({ image, alt, title, text }) => (
              <figure key={title}>
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <figcaption className="mt-4">
                  <h3 className="text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta-ossos" className="scroll-mt-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="bg-card p-0 text-center md:p-12">
            <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
              MAIS FORTE AINDA POR DENTRO
            </h2>
            <ul className="mx-auto mb-8 max-w-xl divide-y text-left text-base sm:text-lg">
              {[
                "Saúde óssea, alimentação e exercícios adaptados",
                "Cuidados para prevenção de quedas e fraturas",
                "Plano educativo de 30 dias e checklist pessoal",
                "Orientações para conversar com seu médico",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 py-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {text}
                </li>
              ))}
            </ul>
            <p className="mb-1 text-base font-semibold text-muted-foreground">
              De{" "}
              <span className="preco-riscado font-sans font-semibold lining-nums tabular-nums text-foreground/70">
                {formatBRL(osteoporoseOffer.originalPrice)}
              </span>
              , hoje por apenas
            </p>
            <p className="mb-2 font-['Supreme_Bold',sans-serif] text-5xl font-bold lining-nums tabular-nums text-primary sm:text-6xl">
              {formatBRL(osteoporoseOffer.price)}
            </p>
            <p className="mb-1 text-base font-semibold text-primary">
              Você economiza {formatBRL(osteoporoseSavings)}
            </p>
            <p className="mb-8 text-base text-muted-foreground">Pagamento único.</p>
            {osteoporoseOffer.checkoutUrl ? (
              <>
                <a
                  href={osteoporoseOffer.checkoutUrl}
                  className="btn-cta w-full text-base sm:text-lg md:w-auto"
                >
                  QUERO GARANTIR MEU ACESSO POR{" "}
                  {formatBRL(osteoporoseOffer.price).replace(/\u00a0/g, " ")}
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  Pagamento processado em ambiente seguro pela Hotmart.
                </p>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  className="btn-cta w-full cursor-not-allowed text-base opacity-70 sm:text-lg md:w-auto"
                >
                  COMPRA DISPONÍVEL EM BREVE
                </button>
                <p className="mt-3 text-sm text-muted-foreground">
                  As vendas deste manual ainda não estão abertas.
                </p>
              </>
            )}
            <div className="mx-auto mt-8 flex max-w-xl items-start gap-4 border-t pt-8 text-left">
              <ShieldCheck className="h-12 w-12 shrink-0 text-accent" />
              <div>
                <h3 className="mb-1 text-lg font-bold text-primary">Garantia de 7 dias</h3>
                <p className="text-sm leading-relaxed sm:text-base">
                  Você tem 7 dias para ler o manual. Se achar que não é para você, basta pedir o
                  reembolso pelo procedimento da plataforma de pagamento.
                </p>
              </div>
            </div>
            <Button asChild variant="link" className="mt-5 h-auto whitespace-normal">
              <a href={mainHref}>Conheça também o guia Forte por Dentro</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="duvidas" className="bg-secondary py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <h2 className="mb-6 text-3xl font-bold text-primary">Dúvidas sobre o manual</h2>
          <Accordion type="single" collapsible>
            {[
              [
                "É o mesmo e-book Forte por Dentro?",
                "Não. É um manual complementar com foco em osteoporose e saúde óssea. O Forte por Dentro aborda a força e a saúde muscular. São produtos distintos.",
              ],
              [
                "Quem pode se beneficiar da leitura?",
                "Pessoas interessadas em saúde óssea, adultos e idosos, familiares e cuidadores. A prevenção é abordada desde a infância, mas as orientações precisam ser adaptadas a cada fase da vida.",
              ],
              [
                "O manual substitui uma consulta ou prescreve suplementos?",
                "Não. Não estabelece diagnóstico nem prescreve medicamentos, suplementos ou exercícios individualizados. Não interrompa tratamentos e não use megadoses de vitamina D por conta própria.",
              ],
              [
                "O plano de 30 dias garante que não terei fraturas?",
                "Não. O plano organiza hábitos educativos e cuidados preventivos; não garante recuperação da densidade óssea nem elimina o risco de fraturas.",
              ],
              [
                "Como será o acesso?",
                "O acesso é digital e liberado após a confirmação do pagamento, com as instruções no seu e-mail. Você lê no celular, no tablet ou no computador, quando quiser.",
              ],
              [
                "E se eu achar que não é para mim?",
                "A oferta tem garantia de 7 dias. Dentro do prazo, basta seguir as instruções da plataforma de pagamento para pedir o reembolso.",
              ],
            ].map(([question, answer], i) => (
              <AccordionItem key={question} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-lg">{question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <AlertTriangle className="h-5 w-5 shrink-0 text-primary" />
            <p>
              Material educativo. Não substitui consulta médica, exame físico, diagnóstico ou
              tratamento individualizado. Exercícios e alimentação devem respeitar suas condições
              clínicas. Após uma queda com dor intensa ou incapacidade de caminhar, procure
              atendimento imediato.
            </p>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Dr. Mauro Augusto Artolphi Pedrin, CRM-DF 15789, RQE 11028
          </p>
        </div>
      </footer>
    </main>
  );
}
