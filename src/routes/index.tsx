import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, BookOpen, Dumbbell, Apple, Footprints, Repeat, Gift, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import alongamento from "@/assets/alongamento.png";
import avosShopping from "@/assets/avos-shopping.jpg";
import avosMercado from "@/assets/avos-mercado.jpg";
import ebook from "@/assets/capa-ebook.png";
import mauroFoto from "@/assets/mauro-foto.png";
import logo from "@/assets/emblema.png";
import heroAutonomia from "@/assets/hero-autonomia.jpg";
import { InstagramFollow } from "@/components/instagram-follow";
import { ebookOffer, formatBRL } from "@/lib/ebook-offer";


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
        content: "Continue fazendo as suas coisas sozinho, com força e confiança. E-book + 3 bônus por R$ 67,00.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CTA({ children, href = "#oferta" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className={`btn-cta text-base md:text-lg`}>
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
  eyebrow,
  title,
  children,
  alt,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={alt ? "bg-secondary py-20" : "py-20"}>
      <div className="mx-auto max-w-3xl px-6">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h2 className="mb-8 text-3xl font-bold leading-tight text-primary md:text-4xl">{title}</h2>
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

const credibility = [
  "Escrito por médico ortopedista, com CRM-DF 15789 e RQE 11028 à vista",
  "Linguagem simples, sem termos difíceis e sem promessas milagrosas",
  "Orientações pensadas para quem está começando, em casa ou na academia",
  "Conteúdo contínuo no Instagram, com exercícios explicados passo a passo e dicas de alimentação",
];

const modules = [
  { icon: Dumbbell, t: "Exercícios para fazer em casa", d: "Dicas de movimentos para manter o corpo sempre em atividade, do mais simples ao mais desafiador.", b: "Evoluir no seu ritmo, sem precisar de academia." },
  { icon: Apple, t: "Alimentação e proteínas", d: "Instruções sobre alimentação e consumo de proteínas essenciais para o dia a dia.", b: "Escolhas simples, sem dieta da moda." },
  { icon: Repeat, t: "Rotinas para manter a força", d: "Sugestões de rotinas para manter a força por mais tempo.", b: "Transformar pequenas mudanças em hábito." },
  { icon: Footprints, t: "Para começar no seu ritmo", d: "Recomendações gerais para começar em casa, no seu ritmo, sem precisar de academia.", b: "Saber por onde começar e por que cada passo conta." },
];

const bonuses = [
  { t: "Guia de Primeiros Passos", d: "Para você não travar e começar com segurança, respeitando o seu ritmo." },
  { t: "Checklist de Segurança em Casa", d: "Para treinar com mais tranquilidade e deixar a casa mais prática e segura no dia a dia." },
  { t: "Manual de Proteínas Simples", d: "Combinações fáceis para o seu dia a dia, sem dietas complexas." },
];

const faqs = [
  ["Preciso ser atleta?", "Não. O e-book é para quem quer cuidar da força, e os exercícios são adaptados para iniciantes."],
  ["O guia é só para quem tem mais idade?", "Não. O guia fala sobre força no dia a dia, um tema que vale para qualquer fase da vida adulta. Cada pessoa adapta as orientações ao próprio ritmo."],
  ["Preciso frequentar academia?", "Não necessariamente. Os exercícios podem ser feitos em casa ou na academia, respeitando o seu ritmo."],
  ["Em quanto tempo vou perceber diferença?", "Cada pessoa tem o seu ritmo e os resultados variam. A constância é o que mais conta."],
  ["Isso substitui a orientação de um profissional de saúde?", "Não. É um material educativo. Se você tem alguma limitação, converse com o seu médico antes de começar."],
  ["Preciso mudar toda a minha alimentação?", "Não necessariamente. O guia mostra como incluir proteína no dia a dia com escolhas simples. Se você segue alguma orientação alimentar específica, converse com o seu médico ou nutricionista antes de mudar."],
  ["Como recebo o material?", "O acesso é digital, liberado após a confirmação do pagamento. Confira seu e-mail para ver as instruções."],
  ["Posso ler no celular?", "Sim. O material pode ser lido no celular, no tablet ou no computador."],
  ["E se eu achar que não é para mim?", "A oferta prevê garantia de 7 dias. Dentro do prazo, basta seguir as instruções da plataforma de pagamento para pedir o reembolso."],
  ["Os bônus estão incluídos no preço?", "Sim: o e-book e os três materiais complementares custam R$ 67,00, sem cobrança adicional."],
];

function Index() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <img src={logo} alt="Eu Ainda Faço Sozinho" width={639} height={627} className="h-14 w-auto md:h-16" />
          <BuyButton className="btn-cta text-sm md:text-base">QUERO O MEU</BuyButton>
        </div>
      </header>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center md:gap-10">
            <div className="text-center">
              <h1 className="mx-auto max-w-4xl font-display text-xl font-bold leading-snug text-accent md:text-2xl">
                Continue fazendo as suas coisas sozinho, com força e confiança.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold leading-relaxed text-primary-foreground md:text-base">
                Conheça um guia prático para manter a sua força nas atividades do dia a dia: levantar da cadeira, caminhar, subir escadas ou carregar compras. Sem academia obrigatória e sem virar atleta.
              </p>
              <img src={heroAutonomia} alt="Casal caminhando lado a lado em um parque ensolarado, a mulher carregando sacolas de compras com verduras e frutas" width={1536} height={768} className="mx-auto mt-6 block w-full max-w-3xl rounded-2xl object-cover shadow-xl" />
            </div>


            <div className="mx-auto mt-10 grid w-full max-w-3xl items-center gap-10">
              <div>

            <div className="mb-8 rounded-2xl bg-card p-5 text-card-foreground shadow-xl md:p-6">
              <p className="font-display text-xl font-bold leading-snug text-primary md:text-2xl">
                Exercício de força: princípios para começar com segurança
              </p>
              <p className="mt-2 leading-relaxed text-foreground/85">
                Movimentos adaptados ao seu ritmo e à sua rotina, em casa ou na academia.
              </p>
            </div>


            <p className="mb-8 leading-relaxed opacity-80">
              Por Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista, CRM-DF 15789, RQE 11028.
            </p>
            <CTA>QUERO CUIDAR DA MINHA FORÇA AGORA</CTA>
            <p className="mt-6 text-sm opacity-75">
              Para quem quer cuidar da força e continuar fazendo o que gosta, com firmeza e independência.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Section eyebrow="Para quem é o guia" title="Imagine fazer tudo isso com firmeza e tranquilidade:">
        <ul className="grid gap-3 sm:grid-cols-2">
          {imagine.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl border bg-card p-4 font-semibold">
              <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
              {p}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-primary">Se essas situações fazem parte dos seus planos, este material foi feito para você.</p>
        <p>Não é sobre virar atleta. É sobre continuar fazendo o que você gosta, com a força que sustenta a sua autonomia no dia a dia.</p>
      </Section>


      <Section alt eyebrow="No dia a dia" title="Movimento, alimentação e hábitos para o dia a dia">
        <p>Atividades como levantar da cama, caminhar e passear em família envolvem força e equilíbrio.</p>
        <p>Força é o que deixa você aproveitar esses momentos com confiança.</p>
        <img src={alongamento} alt="Casal se alongando ao ar livre no parque" width={1536} height={1024} loading="lazy" className="rounded-3xl object-cover shadow-2xl" />
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={avosShopping}
            alt="Avós passeando de mãos dadas com os netinhos em um shopping"
            width={1536}
            height={1024}
            loading="lazy"
            className="rounded-3xl object-cover shadow-2xl"
          />
          <img
            src={avosMercado}
            alt="Avós fazendo compras no mercado com os netinhos"
            width={1536}
            height={1024}
            loading="lazy"
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>
        <p className="font-display text-2xl text-primary">Cuidar dos músculos é também cuidar da liberdade de continuar fazendo aquilo que dá sentido à sua vida.</p>
        <p className="text-base text-muted-foreground">Os resultados variam de pessoa para pessoa.</p>
      </Section>

      {/* PRODUTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={ebook} alt="Capa do e-book Eu Ainda Faço Sozinho, do Dr. Mauro Pedrin" width={1200} height={1800} loading="lazy" className="mx-auto w-full max-w-sm rounded-3xl shadow-2xl" />
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">O produto</p>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Um guia prático para manter a sua força</h2>
            <p>O <strong>Eu Ainda Faço Sozinho</strong> é um e-book educativo que traz o cuidado com a força para a sua realidade, com exercícios, alimentação e hábitos simples.</p>
            <p>Leia no seu ritmo e volte aos tópicos quando precisar. Formato digital para celular, tablet ou computador.</p>
            <CTA>QUERO CONHECER O GUIA</CTA>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Benefícios do guia</p>
          <h2 className="mb-10 text-3xl font-bold text-primary md:text-4xl">O que você ganha com este guia</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {modules.map(({ icon: I, t, d, b }) => (
              <div key={t} className="rounded-2xl bg-card p-6">
                <I className="mb-3 h-8 w-8 text-accent" />
                <h3 className="mb-2 text-xl font-bold text-primary">{t}</h3>
                <p className="mb-3">{d}</p>
                <p className="text-base text-muted-foreground"><strong>Benefício:</strong> {b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section alt eyebrow="Sobre o autor" title="Quem escreveu este material?">
        <p className="font-display text-2xl text-primary">Eu sou o Dr. Mauro Augusto Artolphi Pedrin.</p>
        <div className="flex items-start gap-5 rounded-2xl border bg-card p-6">
          <img
            src={mauroFoto}
            alt="Foto do Dr. Mauro Augusto Artolphi Pedrin"
            width={120}
            height={160}
            loading="lazy"
            className="h-32 w-24 shrink-0 rounded-2xl object-cover object-top"
          />
          <div className="text-base">
            <p className="font-bold">Dr. Mauro Augusto Artolphi Pedrin</p>
            <p>Médico ortopedista | CRM-DF 15789 | RQE 11028</p>
          </div>
        </div>
        <p>Médico ortopedista, vi de perto como a força faz falta até mesmo nas tarefas mais simples do cotidiano. Escrevi este guia após anos de observação, estudo e trabalho constante com os meus pacientes.</p>
        <p>Meu objetivo com este guia é levar esse conhecimento em linguagem simples, para que mais pessoas mantenham a autonomia por mais tempo.</p>
        <p className="font-display text-2xl text-primary">Porque cuidar da força também é cuidar da sua autonomia.</p>
      </Section>

      <Section eyebrow="Credibilidade" title="Conteúdo feito por um médico, não por um influenciador">
        <ul className="grid gap-3">
          {credibility.map((c) => (
            <li key={c} className="flex gap-3 rounded-xl border bg-card p-4">
              <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <InstagramFollow
        intro="O conteúdo não termina na última página. No Instagram, o Dr. Mauro publica dicas sobre força, alimentação e autonomia no dia a dia, em mensagens curtas e práticas."
        themes={[
          "Exercícios explicados passo a passo",
          "Alimentação e proteínas no dia a dia",
          "Dicas para se movimentar com mais firmeza",
          "Dúvidas respondidas de forma simples",
        ]}
      />

      <section className="bg-primary py-20 text-primary-foreground">

        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Bônus exclusivos</p>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">3 materiais para complementar sua experiência</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {bonuses.map((b, i) => (
              <div key={b.t} className="rounded-2xl border border-primary-foreground/20 p-6">
                <Gift className="mb-3 h-8 w-8 text-accent" />
                <p className="text-sm font-bold uppercase tracking-wider text-accent">Bônus {i + 1}</p>
                <h3 className="mb-2 text-xl font-bold">{b.t}</h3>
                <p className="text-base opacity-85">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-3xl border-2 border-accent bg-card p-8 text-center shadow-xl md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-primary">Comece hoje a cuidar da sua força</h2>
            <ul className="mx-auto mb-8 max-w-md space-y-3 text-left text-lg">
              {["E-book Eu Ainda Faço Sozinho: guia prático de força no dia a dia", "Bônus 1: Guia de Primeiros Passos", "Bônus 2: Checklist de Segurança em Casa", "Bônus 3: Manual de Proteínas Simples"].map((x) => (
                <li key={x} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" />{x}</li>
              ))}
            </ul>
            <p className="mb-2 font-display text-6xl font-bold text-primary">{formatBRL(ebookOffer.price)}</p>
            <p className="mb-8 text-base text-muted-foreground">Pagamento único.</p>
                        <BuyButton className="btn-cta w-full text-lg">QUERO GARANTIR MEU ACESSO POR R$ 67,00</BuyButton>
            <p className="mt-3 text-sm text-muted-foreground">Pagamento processado em ambiente seguro pela Hotmart.</p>
          </div>
        </div>
      </section>

      <Section alt title="Garantia de 7 dias">
        <div className="flex gap-4">
          <ShieldCheck className="h-14 w-14 shrink-0 text-accent" />
          <p>Você tem 7 dias para ler e colocar em prática. Se achar que o material não é para você, basta pedir o reembolso pelo procedimento da plataforma de pagamento.</p>
        </div>
      </Section>

      <Section title="Dúvidas frequentes">
        <Accordion type="single" collapsible>
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold md:text-4xl">Dê o próximo passo para uma vida mais forte</h2>
          <p className="opacity-90">Informação prática para cuidar da sua força, no seu ritmo.</p>
          <p className="font-display text-2xl">Cuide da sua força. Valorize sua autonomia. Invista em conhecimento.</p>
          <div className="pt-4"><CTA href={ebookOffer.checkoutUrl ?? "#oferta"}>QUERO MEU E-BOOK FORTE POR DENTRO AGORA</CTA></div>
          <p className="text-sm opacity-75">Pagamento único de R$ 67,00. Garantia de 7 dias.</p>
        </div>
      </section>

      <footer className="bg-secondary py-10">
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl bg-card px-8 py-4 shadow-sm">
            <img src={logo} alt="Eu Ainda Faço Sozinho" width={639} height={627} loading="lazy" className="h-20 w-auto" />
          </div>
        </div>
        <div className="mx-auto flex max-w-3xl gap-3 px-6 text-sm text-muted-foreground">
          <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
          <p>Material educativo e informativo. Não substitui a orientação de um profissional de saúde. Os resultados variam de pessoa para pessoa.</p>
        </div>
      </footer>
    </main>
  );
}
