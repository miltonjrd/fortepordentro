import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, BookOpen, Dumbbell, Apple, Footprints, Repeat, Gift, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import alongamento from "@/assets/alongamento.png.asset.json";
import avosShopping from "@/assets/avos-shopping.jpg.asset.json";
import avosMercado from "@/assets/avos-mercado.jpg.asset.json";
import ebook from "@/assets/capa-ebook.png.asset.json";
import mauroFoto from "@/assets/mauro-foto.png.asset.json";
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

const pains = [
  "Subir escadas com segurança",
  "Levantar da cadeira com firmeza",
  "Caminhar por mais tempo com disposição",
  "Manter a força nas pernas e nos braços",
  "Cuidar do equilíbrio no dia a dia",
  "Realizar as tarefas do dia a dia com independência",
];

const modules = [
  { icon: BookOpen, t: "Entendendo a sua força", d: "O que muda com o tempo e por que vale a pena agir agora.", b: "Saber por onde começar e por que cada passo conta." },
  { icon: Dumbbell, t: "Exercícios adaptados", d: "Passo a passo, do mais simples ao mais desafiador.", b: "Evoluir no seu ritmo, em casa ou na academia." },
  { icon: Apple, t: "Proteína sem complicação", d: "Como montar refeições que ajudam a manter a força.", b: "Escolhas simples para o dia a dia, sem dieta da moda." },
  { icon: Footprints, t: "Equilíbrio e confiança", d: "Movimentos para ter mais firmeza no dia a dia.", b: "Caminhar e se movimentar com mais segurança." },
  { icon: Repeat, t: "Rotina que funciona", d: "Hábitos simples para manter tudo isso por anos.", b: "Transformar pequenas mudanças em rotina." },
];

const bonuses = [
  { t: "Guia de Primeiros Passos", d: "Para você não travar e começar com segurança, respeitando o seu ritmo." },
  { t: "Checklist de Segurança em Casa", d: "Para treinar com mais tranquilidade e deixar a casa mais prática e segura no dia a dia." },
  { t: "Manual de Proteínas Simples", d: "Combinações fáceis para o seu dia a dia, sem dietas complexas." },
];

const faqs = [
  ["Preciso ser atleta?", "Não! O e-book é para adultos e idosos que desejam cuidar da força. Os exercícios são adaptados para iniciantes."],
  ["O guia Eu Ainda Faço Sozinho é indicado apenas para pessoas idosas?", "Não. O guia fala sobre força no dia a dia, um tema que vale para qualquer fase da vida adulta. Cada pessoa adapta as orientações ao próprio ritmo."],
  ["Preciso frequentar uma academia?", "Não necessariamente. Os exercícios podem ser feitos em casa ou na academia, respeitando o seu ritmo e o seu condicionamento."],
  ["Em quanto tempo vou sentir diferença?", "Cada pessoa tem o seu ritmo. Com constância, muita gente percebe mais disposição e firmeza nas primeiras semanas, mas os resultados variam."],
  ["Isso substitui consulta médica?", "Não. É um material educativo. Se você tem alguma limitação, converse com o seu médico antes de começar."],
  ["Preciso mudar toda a minha alimentação?", "Não necessariamente. O guia mostra como incluir proteína no dia a dia com escolhas simples. Se você segue alguma orientação alimentar específica, converse com o seu médico ou nutricionista antes de mudar."],
  ["Como receberei o produto?", "O acesso é disponibilizado digitalmente após a confirmação do pagamento. Confira seu e-mail e as instruções de acesso enviadas após a compra."],
  ["Posso ler no celular?", "Sim. O material pode ser consultado no celular, tablet ou computador."],
  ["E se eu perceber que o material não é adequado para mim?", "A oferta prevê garantia de 7 dias. Dentro do prazo, basta seguir as instruções da plataforma de pagamento para solicitar o reembolso."],
  ["Os bônus estão incluídos no preço?", "Sim: e-book principal e três materiais complementares, sem cobrança adicional além dos R$ 67,00."],
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
                Um guia prático para manter a força no dia a dia: levantar da cadeira, subir escadas, carregar as compras e caminhar com segurança. Sem academia obrigatória e sem virar atleta.
              </p>
              <img src={heroAutonomia} alt="Casal de idosos caminhando lado a lado em um parque ensolarado, a mulher carregando sacolas de compras com verduras e frutas" width={1536} height={768} className="mx-auto mt-6 block w-full max-w-3xl rounded-2xl object-cover shadow-xl" />
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
            <CTA>QUERO CUIDAR DA MINHA FORÇA</CTA>
            <p className="mt-6 text-sm opacity-75">
              Para adultos que desejam cuidar da força muscular e pessoas idosas que buscam mais segurança e independência.
            </p>
              </div>
              <div>
                <div className="mt-6 rounded-lg border bg-card p-5 text-left text-card-foreground sm:p-6">
                  <h2 className="mb-2 text-xl font-bold leading-snug text-primary">Como está a sua força hoje?</h2>
                  <p className="mb-4 text-base text-muted-foreground">Responda de cabeça, só pra você:</p>
                  <ul className="grid gap-2.5">
                    {[
                      "Você levanta da cadeira sem apoiar as mãos?",
                      "Sobe um lance de escada sem precisar parar?",
                      "Carrega uma sacola de mercado com tranquilidade?",
                      "Sente firmeza ao caminhar em calçada irregular?",
                    ].map((q) => (
                      <li key={q} className="flex gap-3 rounded-md border px-4 py-3 text-base leading-snug">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {q}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-semibold text-primary">Se alguma resposta te fez pensar, este guia foi feito pra você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Section eyebrow="Por que a força importa" title="A força sustenta a sua autonomia no dia a dia">
        <ul className="grid gap-3 sm:grid-cols-2">
          {pains.map((p) => (
            <li key={p} className="rounded-xl border bg-card p-4 font-semibold">{p}</li>
          ))}
        </ul>
        <p>A força é o que deixa você independente nas pequenas coisas: levantar, abaixar, pegar o neto no colo, ir ao mercado sozinho. Com o passar dos anos, ela diminui naturalmente quando não é estimulada. A boa notícia é que dá para trabalhar isso em qualquer idade, com movimentos simples e constância.</p>
        <p className="font-semibold text-primary">Não é sobre virar atleta. É sobre continuar fazendo o que você gosta.</p>
      </Section>


      <Section alt eyebrow="No dia a dia" title="Movimento, alimentação e hábitos para o dia a dia">
        <p>Atividades como levantar da cama, caminhar e passear em família envolvem força e equilíbrio.</p>
        <p>Força é o que deixa você aproveitar esses momentos com confiança.</p>
        <img src={alongamento.url} alt="Casal se alongando ao ar livre no parque" width={1536} height={1024} loading="lazy" className="rounded-3xl object-cover shadow-2xl" />
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src={avosShopping.url}
            alt="Avós passeando de mãos dadas com os netinhos em um shopping"
            width={1536}
            height={1024}
            loading="lazy"
            className="rounded-3xl object-cover shadow-2xl"
          />
          <img
            src={avosMercado.url}
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

      <Section eyebrow="O método" title="Existem caminhos para cuidar da sua força">
        <p>Você não precisa descobrir tudo sozinho, nem seguir orientações aleatórias da internet. Precisa de <strong>informação organizada, linguagem acessível</strong> e um passo a passo que caiba na sua rotina.</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            ["Movimento adaptado", "Exercícios que cabem na sua rotina, em casa ou na academia."],
            ["Alimentação que sustenta", "Como incluir proteína no dia a dia, sem dieta da moda."],
            ["Equilíbrio e firmeza", "Treinos para caminhar e se movimentar com mais segurança."],
            ["Hábitos que ficam", "Pequenas mudanças que viram rotina."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-xl border bg-card p-4">
              <p className="font-bold text-primary">{t}</p>
              <p className="mt-1 text-base text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
        <p>Essa é a proposta do <strong>Eu Ainda Faço Sozinho</strong>: reunir o essencial sobre força no dia a dia em um guia prático, escrito por um médico ortopedista em linguagem simples.</p>
      </Section>

      {/* PRODUTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={ebook.url} alt="Capa do e-book Eu Ainda Faço Sozinho, do Dr. Mauro Pedrin" width={1200} height={1800} loading="lazy" className="mx-auto w-full max-w-sm rounded-3xl shadow-2xl" />
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">O produto</p>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Um guia para continuar forte e independente</h2>
            <p>O <strong>Eu Ainda Faço Sozinho</strong> é um e-book educativo que traz o cuidado com a força para a sua realidade, com exercícios, alimentação e hábitos simples.</p>
            <p>Leia no seu ritmo e volte aos tópicos quando precisar. Formato digital para celular, tablet ou computador.</p>
            <CTA>QUERO CONHECER O GUIA</CTA>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">O que você recebe</p>
          <h2 className="mb-10 text-3xl font-bold text-primary md:text-4xl">Conhecimento que pode fazer diferença na rotina</h2>
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

      <Section alt eyebrow="Sobre o autor" title="Baseado em conhecimento, experiência, confiança e cuidado">
        <p className="font-semibold text-primary">Você não está diante de um influenciador fitness. Este guia foi escrito por um médico ortopedista.</p>
        <div className="flex items-start gap-5 rounded-2xl border bg-card p-6">
          <img
            src={mauroFoto.url}
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
        <p>Ao longo da carreira, o Dr. Mauro viu de perto como a força faz falta nas tarefas mais simples. Ele escreveu este guia para levar esse conhecimento de forma prática e acessível, para que mais pessoas mantenham a autonomia por mais tempo.</p>
        <p className="font-display text-2xl text-primary">Porque cuidar da força também é cuidar da sua autonomia.</p>
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
            <p className="mb-4 font-semibold text-primary">Toque agora no botão abaixo e garanta seu acesso:</p>
            <BuyButton className="btn-cta w-full text-lg">QUERO GARANTIR MEU ACESSO POR R$ 67,00</BuyButton>
            <p className="mt-3 text-sm text-muted-foreground">Pagamento processado em ambiente seguro pela Hotmart. Garantia de 7 dias.</p>
          </div>
        </div>
      </section>

      <Section alt title="Garantia incondicional de 7 dias">
        <div className="flex gap-4">
          <ShieldCheck className="h-14 w-14 shrink-0 text-accent" />
          <p>Você tem 7 dias para ler e aplicar. Se achar que não é para você, devolvemos 100% do seu dinheiro, sem burocracia e sem perguntas, pelo procedimento da plataforma de pagamento.</p>
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
          <p>Material educativo, sem caráter de diagnóstico ou tratamento. Os resultados variam de pessoa para pessoa. Em caso de dúvida, procure orientação profissional.</p>
        </div>
      </footer>
    </main>
  );
}
