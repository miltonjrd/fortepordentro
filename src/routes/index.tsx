import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, BookOpen, Dumbbell, Apple, Footprints, Repeat, Gift, AlertTriangle, Star } from "lucide-react";
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
import mauroCirurgia from "@/assets/mauro-cirurgia.png.asset.json";
import depoimentoGoogle from "@/assets/depoimento-google.png.asset.json";
import heroAutonomia from "@/assets/hero-autonomia.jpg";
import { SarcFQuiz } from "@/components/sarc-f-quiz";
import { InstagramFollow } from "@/components/instagram-follow";
import { ebookOffer, formatBRL } from "@/lib/ebook-offer";
import { AnatomiaVideo } from "@/components/anatomia-video";
import anatomia from "@/assets/sarcopenia-anatomia.mp4.asset.json";
import anatomiaCapa from "@/assets/sarcopenia-anatomia-capa.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORTE POR DENTRO | EU AINDA FAÇO SOZINHO | Guia sobre sarcopenia e força muscular" },
      {
        name: "description",
        content:
          "E-book educativo de um médico ortopedista sobre sarcopenia e os cuidados com a força e a saúde muscular no dia a dia.",
      },
      { property: "og:title", content: "FORTE POR DENTRO | EU AINDA FAÇO SOZINHO" },
      {
        property: "og:description",
        content: "Cuide da sua força e preserve sua autonomia. E-book + 3 bônus por R$ 67,00.",
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
  { icon: BookOpen, t: "Entendendo a sarcopenia", d: "O que é a perda muscular, por que merece atenção e quais sinais justificam uma avaliação profissional.", b: "Entender melhor o problema e reconhecer a importância de cuidar da saúde muscular." },
  { icon: Dumbbell, t: "Exercícios adaptados", d: "Movimentos seguros para cada fase, que estimulam o fortalecimento muscular respeitando seu condicionamento e suas limitações.", b: "Compreender como o exercício ajuda a cuidar dos músculos." },
  { icon: Apple, t: "Nutrição na medida certa", d: "Como incluir a proteína de forma adequada para apoiar a manutenção do tecido muscular e a sua energia.", b: "Reconhecer os cuidados nutricionais importantes, sem dietas da moda." },
  { icon: Footprints, t: "Equilíbrio e confiança", d: "Técnicas para melhorar a estabilidade e cuidados que ajudam a reduzir o medo e o risco de cair.", b: "Identificar cuidados que favorecem uma rotina mais segura." },
  { icon: Repeat, t: "Hábitos simples", d: "Pequenas mudanças na rotina que favorecem a sua independência no dia a dia.", b: "Incorporar o cuidado muscular à rotina de forma progressiva e realista." },
];

const bonuses = [
  { t: "Guia de Primeiros Passos", d: "Para você não travar e começar com segurança, respeitando o seu ritmo." },
  { t: "Checklist de Segurança para o Idoso", d: "Para treinar com mais tranquilidade e ajudar a evitar lesões e quedas. Não substitui uma avaliação individual." },
  { t: "Manual de Proteínas Simples", d: "Combinações fáceis para o seu dia a dia, sem dietas complexas." },
];

const faqs = [
  ["Preciso ser atleta?", "Não! O e-book é para adultos e idosos que desejam cuidar da força muscular. Os exercícios são adaptados para iniciantes."],
  ["O guia Eu Ainda Faço Sozinho é indicado apenas para pessoas idosas?", "Não. O guia aborda a saúde muscular e a sarcopenia, temas relevantes para o envelhecimento e para o cuidado com a musculatura ao longo da vida adulta. A adequação das orientações depende das necessidades e condições individuais."],
  ["Preciso frequentar uma academia?", "Não necessariamente. O cuidado com a força pode envolver diferentes formas de exercício, desde que adequadas à sua capacidade e condições de saúde. Quem tem fraqueza importante, histórico de quedas, dor ou dificuldade de mobilidade deve buscar orientação profissional antes de iniciar exercícios."],
  ["O e-book garante que vou recuperar minha massa muscular?", "Não. Os resultados variam conforme idade, estado de saúde, alimentação, nível de atividade física e causa da perda muscular. O material é educativo, não uma garantia de recuperação."],
  ["O material substitui uma consulta médica?", "Não. O guia não realiza diagnósticos, não prescreve tratamento individual e não substitui consultas médicas ou acompanhamento de outros profissionais de saúde."],
  ["Preciso mudar toda a minha alimentação?", "Não necessariamente. Quem tem doença renal ou outras condições que exigem cuidados nutricionais específicos deve consultar um profissional antes de aumentar o consumo de proteínas ou usar suplementos."],
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
                Descubra como cuidar da sua força muscular e o que pode ajudar você a manter sua autonomia, segurança e confiança nos movimentos.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold leading-relaxed text-primary-foreground md:text-base">
                Descubra hábitos, exercícios e estratégias de alimentação que podem ajudar a preservar a mobilidade e manter sua autonomia para as atividades diárias e os passeios.
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
                Fortalecimento muscular adaptado ao condicionamento, às limitações e às condições de saúde de cada pessoa.
              </p>
            </div>


            <p className="mb-2 font-semibold">Perda de massa muscular e sarcopenia: um desafio que atinge adultos jovens e idosos.</p>
            <p className="mb-8 leading-relaxed opacity-80">
              Por Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista, CRM-DF 15789, RQE 11028.
            </p>
            <CTA>QUERO CUIDAR DA MINHA FORÇA AGORA</CTA>
            <p className="mt-6 text-sm opacity-75">
              Para adultos que desejam cuidar da força muscular e pessoas idosas que buscam mais segurança e independência.
            </p>
              </div>
              <div>
                <AnatomiaVideo src={anatomia.url} poster={anatomiaCapa.url} title="Anatomia e fisiopatologia da sarcopenia, com narração masculina" />
                <SarcFQuiz />
              </div>
            </div>
          </div>
        </div>
      </section>



      <Section eyebrow="Saúde muscular" title="A força muscular sustenta a autonomia no dia a dia">
        <ul className="grid gap-3 sm:grid-cols-2">
          {pains.map((p) => (
            <li key={p} className="rounded-xl border bg-card p-4 font-semibold">{p}</li>
          ))}
        </ul>
        <p>Com o passar dos anos, é comum a força muscular diminuir.</p>
        <p>A <strong>sarcopenia</strong> é a perda de massa muscular que afeta a força, o equilíbrio e a independência. Ela não é uma preocupação só de pessoas muito idosas e também pode atingir adultos jovens.</p>
        <p>Informação de qualidade ajuda a conversar melhor com seu médico sobre esse tema.</p>
        <p className="font-semibold text-primary">Cuidar dos músculos faz parte de um envelhecimento ativo.</p>
      </Section>


      <Section alt eyebrow="No dia a dia" title="Movimento, alimentação e hábitos para o dia a dia">
        <p>Atividades como levantar da cama, caminhar e passear em família envolvem força e equilíbrio.</p>
        <p>Não é sobre virar atleta. É sobre cuidar da sua autonomia e da sua confiança no dia a dia.</p>
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

      <Section eyebrow="A oportunidade" title="Existem caminhos para cuidar da sua força">
        <p>Treinamento de força adaptado, alimentação adequada, consumo suficiente de proteínas, atividade física regular e avaliação profissional quando necessária. O desafio é entender como esses cuidados se relacionam e por onde começar.</p>
        <p>Você não precisa descobrir tudo sozinho, nem seguir orientações aleatórias da internet. Precisa de <strong>informação organizada, linguagem acessível</strong> e orientação sobre o que merece sua atenção.</p>
        <p>Essa é a proposta do <strong>Eu Ainda Faço Sozinho</strong>: reunir o essencial sobre sarcopenia e saúde muscular para ajudar você a compreender o problema e conversar com profissionais de saúde sobre os próximos passos.</p>
      </Section>

      <Section alt eyebrow="A prova" title="A ciência por trás do cuidado com a sua força">
        <p>A perda de massa magra pode começar por volta dos 30 anos, e estudos associam mais força muscular a mais saúde e longevidade. O guia não é achismo: reúne orientações baseadas em evidências médicas, unindo exercícios seguros e alimentação adequada, em casa ou na academia.</p>
        <p>A sarcopenia é uma condição reconhecida pela medicina, e sua abordagem pode envolver avaliação clínica, exercícios de resistência, nutrição adequada e acompanhamento individualizado.</p>
        <p>O que sustenta a proposta do guia?</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            ["Conhecimento médico", "O conteúdo é apresentado sob a perspectiva de um médico ortopedista."],
            ["Foco na vida real", "A abordagem prioriza força, mobilidade, segurança e atividades cotidianas."],
            ["Orientação prática", "O objetivo é facilitar a compreensão de medidas que podem ser discutidas e adaptadas à realidade de cada pessoa."],
            ["Responsabilidade com a saúde", "O material educativo não substitui diagnóstico, prescrição individual ou acompanhamento profissional."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-xl border bg-card p-4">
              <p className="font-bold text-primary">{t}</p>
              <p className="mt-1 text-base text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
        <p>O guia não promete resultados iguais para todos, cura da sarcopenia ou recuperação muscular garantida. Seu propósito é ajudar você a entender melhor sua saúde muscular e a importância de agir de forma informada.</p>
      </Section>

      {/* PRODUTO */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={ebook.url} alt="Capa do e-book do Dr. Mauro Pedrin sobre sarcopenia e saúde muscular" width={1200} height={1800} loading="lazy" className="mx-auto w-full max-w-sm rounded-3xl shadow-2xl" />
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">O produto</p>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Um guia para entender seus músculos e cuidar melhor deles</h2>
            <p>O <strong>Eu Ainda Faço Sozinho: Perda de Massa Muscular e Sarcopenia</strong> é um e-book educativo que aproxima o conhecimento sobre saúde muscular da sua realidade.</p>
            <p>Consulte no seu ritmo, volte aos tópicos quando precisar e use as informações como apoio para conversar com seu médico. Formato digital para celular, tablet ou computador.</p>
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
        <p className="font-semibold text-primary">Você não está diante de um influenciador fitness. Você está sendo orientado por um médico especialista.</p>
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
            <p className="font-bold">Médico ortopedista e traumatologista</p>
            <p>CRM-DF 15789, RQE 11028, Ortopedia e Traumatologia</p>
            <p>Pós-graduação em Medicina Pública e da Família</p>
          </div>
        </div>
        <p>Com décadas de experiência na linha de frente da saúde pública em Brasília/DF, o Dr. Mauro atua no trauma do idoso e conhece de perto as necessidades do corpo que envelhece. Essa experiência garante que cada orientação do guia seja apresentada com segurança, ética e responsabilidade.</p>
        <p className="font-display text-2xl text-primary">Porque cuidar da força também é cuidar da sua autonomia.</p>
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-card p-5">
            <img
              src={mauroCirurgia.url}
              alt="Dr. Mauro Augusto Artolphi Pedrin vestindo roupa de cirurgia em ambiente hospitalar"
              width={824}
              height={850}
              loading="lazy"
              className="w-full rounded-xl object-cover"
            />
            <p className="mt-4 font-bold text-primary">Dr. Mauro Augusto Artolphi Pedrin</p>
            <p className="text-base text-muted-foreground">CRM-DF 15789, RQE 11028, Ortopedia e Traumatologia, Pós-graduação em Medicina Pública e da Família</p>
          </div>
          <blockquote className="rounded-2xl border bg-card p-6 text-lg leading-relaxed">
            <p>“Como médico ortopedista, atendo diariamente no consultório pacientes que começam a falhar em tarefas simples, como levantar da cadeira ou subir escadas. Eu vejo a sarcopenia acontecer na prática. Este e-book não é um compilado de dicas da internet; é um material estruturado com base na minha experiência clínica e científica para ajudar você a cuidar da sua autonomia física.”</p>
            <footer className="mt-4 font-semibold text-primary">Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista</footer>
          </blockquote>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-2xl border bg-card p-6 text-lg leading-relaxed">
            <div className="mb-3 flex gap-1 text-accent" aria-label="Avaliação de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p>“Esse hospital é muito bom, pelo menos na ortopedia, eu sofri um acidente em Julho de 2017, precisei fazer cirurgia, e fui muito bem acolhida pelo hospital, o médico que fez a cirurgia me acompanhou durante o todo o processo de recuperação, Dr. Mauro Pedrim, excelente profissional, a equipe do hospital também muito boa... Não tenho o que reclamar.”</p>
            <footer className="mt-4 text-base"><strong>Amanda Aguiar</strong><span className="text-muted-foreground">, avaliação pública no Google</span></footer>
          </blockquote>
          <img
            src={depoimentoGoogle.url}
            alt="Avaliação pública de paciente no Google sobre o Dr. Mauro Pedrin"
            width={758}
            height={986}
            loading="lazy"
            className="mx-auto w-full max-w-sm self-center rounded-2xl border bg-card p-2 shadow-lg"
          />
        </div>
        <p>O guia não promete resultados iguais para todos, cura da sarcopenia ou recuperação garantida. Seu propósito é ajudar você a agir de forma informada.</p>
      </Section>

      <InstagramFollow
        intro="O cuidado não termina na última página. No Instagram, o Dr. Mauro publica conteúdo educativo sobre força muscular, sarcopenia, alimentação e autonomia. É o mesmo cuidado deste e-book, em mensagens curtas para o seu dia."
        themes={[
          "Exercícios explicados com segurança",
          "Alimentação e proteínas no dia a dia",
          "Cuidados que ajudam a prevenir quedas",
          "Dúvidas respondidas com responsabilidade médica",
        ]}
        proof={{
          quote:
            "fui muito bem acolhida pelo hospital, o médico que fez a cirurgia me acompanhou durante o todo o processo de recuperação, Dr. Mauro Pedrim, excelente profissional",
          author: "Amanda Aguiar",
          source: "avaliação pública de paciente no Google, 5 estrelas",
        }}
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
            <h2 className="mb-6 text-3xl font-bold text-primary">Comece a cuidar melhor da sua saúde muscular</h2>
            <ul className="mx-auto mb-8 max-w-md space-y-3 text-left text-lg">
              {["E-book educativo sobre sarcopenia e saúde muscular", "Bônus 1: Guia de Primeiros Passos", "Bônus 2: Checklist de Segurança para o Idoso", "Bônus 3: Manual de Proteínas Simples"].map((x) => (
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
          <p className="opacity-90">Informação educativa para cuidar da força muscular com orientação e respeito aos limites de cada pessoa.</p>
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
          <p><strong>Aviso importante:</strong> este e-book é um material educativo. Não substitui consulta médica, diagnóstico, tratamento, prescrição de exercícios ou orientação nutricional individualizada. Se você apresenta fraqueza muscular, perda de mobilidade ou quedas recorrentes, procure avaliação profissional. Em caso de fraqueza súbita, especialmente com alterações na fala, no rosto ou na sensibilidade, procure atendimento de emergência.</p>
        </div>
      </footer>
    </main>
  );
}
