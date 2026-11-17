import { createFileRoute, Link } from '@tanstack/react-router';
import { Apple, ArrowDown, ArrowLeft, Bone, Check, ClipboardCheck, Dumbbell, Footprints, BookOpen, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { formatBRL, osteoporoseOffer } from '@/lib/osteoporose-offer';
import { OsteoporoseQuiz } from '@/components/osteoporose-quiz';
import { OsteoporoseVoice } from '@/components/osteoporose-voice';
import { InstagramFollow } from '@/components/instagram-follow';
import { AnatomiaVideo } from '@/components/anatomia-video';
import anatomia from '@/assets/osteoporose-anatomia.mp4';
import vsl from '@/assets/vsl-osteoporose.mp4';
import vslCapa from '@/assets/vsl-osteoporose-capa.jpg';
import anatomiaCapa from '@/assets/osteoporose-anatomia-capa.jpg';

import family from '@/assets/avos-shopping.jpg';
import author from '@/assets/mauro-cirurgia.png';
import logo from '@/assets/emblema.png';
import exercisePhoto from '@/assets/osteoporose-exercicios.jpg';
import dairyPhoto from '@/assets/osteoporose-lacteos.jpg';
import sunlightPhoto from '@/assets/osteoporose-sol.jpg';
import fallRiskPhoto from '@/assets/osteoporose-quedas.jpg';

export const Route = createFileRoute('/osteoporose')({
  head: () => ({ meta: [
    { title: 'Mais Forte Ainda por Dentro | Manual de Osteoporose | Dr. Mauro Pedrin' },
    { name: 'description', content: 'Conheça o manual educativo de saúde óssea: alimentação, exercícios adaptados e prevenção de quedas e fraturas. Por R$ 97,00.' },
    { property: 'og:title', content: 'Mais Forte Ainda por Dentro: Saúde óssea e osteoporose' },
    { property: 'og:description', content: 'O complemento do e-book Eu Ainda Faço Sozinho para cuidar de ossos e músculos. Manual educativo do Dr. Mauro Pedrin por R$ 97,00.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Osteoporose,
});

const topics = [
  { icon: Bone, title: 'Entenda a saúde dos ossos', text: 'Osteoporose, osteopenia, envelhecimento, menopausa e fatores de risco em mulheres e homens.' },
  { icon: Apple, title: 'Alimentação para a saúde óssea', text: 'Fontes de cálcio e proteínas, o papel da vitamina D e os cuidados com a suplementação.' },
  { icon: Dumbbell, title: 'Movimento com segurança', text: 'Princípios de fortalecimento, equilíbrio e postura, respeitando limitações e histórico de fraturas.' },
  { icon: Footprints, title: 'Prevenção de quedas e fraturas', text: 'Cuidados dentro e fora de casa, sinais de alerta e quando procurar atendimento.' },
  { icon: ClipboardCheck, title: 'Avaliação e acompanhamento', text: 'Densitometria, preparação para a consulta e informações educativas sobre tratamentos.' },
  { icon: BookOpen, title: 'Um plano para o dia a dia', text: 'Plano educativo de 30 dias, checklist de saúde óssea, mitos e respostas às dúvidas frequentes.' },
];

const illustratedCare = [
  { image: exercisePhoto, alt: 'Mulher idosa elevando os calcanhares com apoio em cadeira e acompanhamento profissional', title: 'Exercícios adaptados', text: 'Fortalecimento e equilíbrio fazem parte do cuidado. A intensidade e os movimentos devem respeitar seu condicionamento, a presença de osteoporose e o histórico de fraturas.' },
  { image: dairyPhoto, alt: 'Leite, iogurte natural e queijo branco como fontes alimentares de cálcio', title: 'Alimentação láctea e cálcio', text: 'Leite, iogurte e queijos podem contribuir com cálcio e proteínas, conforme sua tolerância e necessidades. Quem não consome lácteos pode discutir outras fontes e alimentos fortificados com um profissional.' },
  { image: sunlightPhoto, alt: 'Casal idoso ao ar livre com chapéus e roupas de proteção solar', title: 'Exposição solar com cuidado', text: 'A luz solar participa da produção de vitamina D pela pele, mas não existe um tempo de exposição seguro e suficiente para todos. Evite queimaduras, mantenha a fotoproteção e procure orientação individual.' },
  { image: fallRiskPhoto, alt: 'Mulher idosa e familiar identificando tapete dobrado e fio elétrico no caminho como riscos de queda', title: 'Fatores de risco de quedas', text: 'Tapetes soltos, fios no caminho, pouca iluminação e pisos escorregadios aumentam os riscos. Tontura, alterações da visão e alguns medicamentos também merecem avaliação profissional.' },
];


function OfferLink({ children }: { children: React.ReactNode }) {
  return <Button asChild className="h-auto min-h-12 whitespace-normal bg-accent px-7 py-4 text-base font-bold text-accent-foreground hover:bg-accent/90"><a href="#oferta-ossos">{children}<ArrowDown /></a></Button>;
}

function Osteoporose() {
  return <main>
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <img src={logo} alt="Eu Ainda Faço Sozinho" className="h-16 w-auto" />
        <Button asChild variant="ghost"><Link to="/"><ArrowLeft />EU AINDA FAÇO SOZINHO</Link></Button>
      </div>
    </header>

    <section className="relative isolate overflow-hidden">
      <img src={family} alt="Avós passeando com os netos em um shopping" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-background/90" />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <div>
            <p className="mb-5 font-semibold text-primary">O cuidado com os músculos continua nos ossos.</p>
            <h1 className="max-w-3xl font-display text-xl font-bold leading-snug tracking-tight text-primary md:text-2xl">
              Tenha autonomia e faça o que ama
              <br />
              <span className="text-lg text-accent-deep md:text-xl">no seu próprio ritmo.</span>
            </h1>

            <p className="mt-6 max-w-2xl rounded-xl bg-card/80 px-5 py-4 text-base font-bold leading-snug text-primary md:text-lg">
              “Ela não dói. Não avisa. E quando os primeiros sinais aparecem, os ossos já podem estar fragilizados.”
            </p>
            <AnatomiaVideo src={vsl} poster={vslCapa} title="Dr. Mauro explica a osteoporose e o manual" />
            {osteoporoseOffer.checkoutUrl && <div className="mt-5 text-center"><Button asChild className="h-auto whitespace-normal bg-accent px-8 py-4 text-lg font-bold text-accent-foreground hover:bg-accent/90"><a href={osteoporoseOffer.checkoutUrl}>QUERO MEU MANUAL DE OSTEOPOROSE</a></Button></div>}
            <h2 className="mt-5 max-w-2xl text-lg font-semibold md:text-xl">Osteoporose: informação para cuidar da saúde dos ossos</h2>
            <p className="mt-5 max-w-2xl text-sm font-bold leading-snug text-primary md:text-base">Um manual educativo para compreender a saúde óssea, conhecer cuidados com a alimentação e o movimento e aprender estratégias que podem ajudar a reduzir o risco de quedas e fraturas.</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base">Escrito por um médico ortopedista com décadas de experiência no atendimento ao idoso, o manual explica por que a osteoporose pode evoluir sem sintomas, quais fatores de risco merecem atenção e como alimentação, exercício adaptado e prevenção de quedas caminham juntos.</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base">Você também encontra orientações sobre exposição solar com cuidados, alimentos ricos em cálcio e proteína, exercícios ilustrados e sinais que pedem avaliação profissional, para conversar com seu médico com mais clareza.</p>

            <p className="mt-4 max-w-2xl text-base font-semibold">Músculos ajudam você a se mover. Ossos sustentam sua autonomia.</p>
            <div className="mt-7"><OfferLink>QUERO CONHECER A OFERTA</OfferLink></div>
            <p className="mt-4 text-sm text-muted-foreground">Por Dr. Mauro Augusto Artolphi Pedrin, CRM-DF 15789, RQE 11028</p>
          </div>
        </div>

        <OsteoporoseVoice />
        <AnatomiaVideo src={anatomia} poster={anatomiaCapa} title="Anatomia e fisiopatologia da osteoporose, com narração masculina" />
      </div>
    </section>

    <section className="pb-14">

      <div className="mx-auto max-w-xl px-6">
        <OsteoporoseQuiz />
      </div>
    </section>

    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-primary">Sua força e sua saúde óssea se complementam</h2>
        <p className="mt-5 text-lg leading-relaxed">O e-book Eu Ainda Faço Sozinho aborda a saúde muscular. Este manual amplia esse cuidado: explica como a fragilidade dos ossos e a perda de força podem coexistir e por que alimentação, exercícios adaptados, prevenção de quedas e avaliação médica precisam caminhar juntos.</p>
        <p className="mt-4 text-lg leading-relaxed">A osteoporose pode evoluir sem sintomas. Conhecer os fatores de risco ajuda a conversar com seu médico com antecedência.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-semibold text-primary">Conhecimento para cuidar de dentro para fora</p>
        <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">O que você encontrará no manual</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ icon: Icon, title, text }) => <article key={title} className="pt-5"><Icon className="mb-4 h-8 w-8 text-primary" /><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section aria-labelledby="cuidados-ilustrados" className="pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="cuidados-ilustrados" className="text-3xl font-bold text-primary md:text-4xl">Cuidados que fazem parte da sua rotina</h2>
        <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {illustratedCare.map(({ image, alt, title, text }) => <figure key={title}>
            <img src={image} alt={alt} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-lg object-cover" />
            <figcaption className="mt-5"><h3 className="text-2xl font-bold text-primary">{title}</h3><p className="mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p></figcaption>
          </figure>)}
        </div>
        <p className="mt-7 text-sm text-muted-foreground">Fotos ilustrativas geradas por inteligência artificial. Não representam pacientes ou uma prescrição individual de exercícios.</p>
      </div>
    </section>


    <section className="py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 md:grid-cols-[1fr_1.5fr]">
        <img src={author} alt="Dr. Mauro Augusto Artolphi Pedrin em roupa de cirurgia" loading="lazy" className="mx-auto aspect-square w-full max-w-sm rounded-lg object-cover" />
        <div><h2 className="text-3xl font-bold text-primary">Conhecimento, experiência e cuidado</h2><p className="mt-5 text-xl font-semibold">Dr. Mauro Augusto Artolphi Pedrin</p><p className="mt-2">CRM-DF 15789, RQE 11028<br />Ortopedia e Traumatologia</p><p className="mt-5 text-lg leading-relaxed">Com 22 anos de experiência, o autor propõe um cuidado integrado com ossos, músculos e capacidade funcional, em linguagem acessível e com responsabilidade médica.</p><p className="mt-4 text-lg leading-relaxed">As orientações educativas devem ser adaptadas à idade, às condições de saúde e ao risco individual de fraturas.</p></div>
      </div>
    </section>

    <InstagramFollow
      intro="O cuidado com a saúde óssea continua fora do manual. No Instagram, o Dr. Mauro publica conteúdo educativo sobre saúde óssea, cálcio e vitamina D, prevenção de quedas e força, sempre com responsabilidade médica."
      themes={[
        "Saúde óssea explicada sem alarme",
        "Cálcio, vitamina D e alimentação",
        "Cuidados que reduzem o risco de quedas",
        "Movimento e exercícios com segurança",
      ]}
      proof={{
        quote:
          "fui muito bem acolhida pelo hospital, o médico que fez a cirurgia me acompanhou durante o todo o processo de recuperação, Dr. Mauro Pedrin, excelente profissional",
        author: "Amanda Aguiar",
        source: "avaliação pública de paciente no Google, 5 estrelas",
      }}
    />

    <section id="oferta-ossos" className="scroll-mt-6 py-16">

      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-semibold text-primary">Complete seu cuidado com a saúde óssea</p>
        <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">MAIS FORTE AINDA POR DENTRO</h2>
        <p className="mt-4 text-lg">Manual educativo de osteoporose e prevenção de fraturas</p>
        <ul className="mx-auto my-8 max-w-xl space-y-3 text-left text-lg">{['Saúde óssea, alimentação e exercícios adaptados', 'Cuidados para prevenção de quedas e fraturas', 'Plano educativo de 30 dias e checklist pessoal', 'Orientações para conversar com seu médico'].map(text => <li key={text} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{text}</li>)}</ul>
        <p className="font-display text-6xl font-bold text-primary">{formatBRL(osteoporoseOffer.price)}</p>
        <p className="mt-2 text-muted-foreground">Pagamento único</p>
        <div className="mt-7">{osteoporoseOffer.checkoutUrl ? <Button asChild className="h-auto whitespace-normal bg-accent px-8 py-4 text-lg font-bold text-accent-foreground hover:bg-accent/90"><a href={osteoporoseOffer.checkoutUrl}>QUERO MEU MANUAL DE OSTEOPOROSE</a></Button> : <><Button disabled className="h-auto w-full max-w-lg whitespace-normal bg-accent px-8 py-4 text-lg font-bold text-accent-foreground">COMPRA DISPONÍVEL EM BREVE</Button><p className="mt-3 text-sm text-muted-foreground">As vendas deste manual ainda não estão abertas.</p></>}</div>
        <Button asChild variant="link" className="mt-5 h-auto whitespace-normal"><Link to="/">Voltar ao e-book Eu Ainda Faço Sozinho</Link></Button>
      </div>
    </section>

    <section className="bg-secondary py-14">
      <div className="mx-auto max-w-3xl px-6"><h2 className="mb-6 text-3xl font-bold text-primary">Dúvidas sobre o manual</h2><Accordion type="single" collapsible>
        {[
          ['É o mesmo e-book Eu Ainda Faço Sozinho?', 'Não. É um manual complementar com foco em osteoporose e saúde óssea. O Eu Ainda Faço Sozinho aborda sarcopenia e saúde muscular. São produtos distintos.'],
          ['Quem pode se beneficiar da leitura?', 'Pessoas interessadas em saúde óssea, adultos e idosos, familiares e cuidadores. A prevenção é abordada desde a infância, mas as orientações precisam ser adaptadas a cada fase da vida.'],
          ['O manual substitui uma consulta ou prescreve suplementos?', 'Não. Não estabelece diagnóstico nem prescreve medicamentos, suplementos ou exercícios individualizados. Não interrompa tratamentos e não use megadoses de vitamina D por conta própria.'],
          ['O plano de 30 dias garante que não terei fraturas?', 'Não. O plano organiza hábitos educativos e cuidados preventivos; não garante recuperação da densidade óssea nem elimina o risco de fraturas.'],
          ['Como será o acesso?', 'O produto será digital. Quando as vendas forem abertas, as instruções de acesso e as condições de compra estarão disponíveis na plataforma de pagamento.'],
        ].map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="text-left text-lg">{question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed">{answer}</AccordionContent></AccordionItem>)}
      </Accordion></div>
    </section>

    <footer className="py-10"><div className="mx-auto max-w-4xl px-6"><div className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><AlertTriangle className="h-5 w-5 shrink-0 text-primary" /><p>Material educativo. Não substitui consulta médica, exame físico, diagnóstico ou tratamento individualizado. Exercícios e alimentação devem respeitar suas condições clínicas. Após uma queda com dor intensa ou incapacidade de caminhar, procure atendimento imediato.</p></div><p className="mt-6 text-center text-sm text-muted-foreground">Dr. Mauro Augusto Artolphi Pedrin, CRM-DF 15789, RQE 11028</p></div></footer>
  </main>;
}