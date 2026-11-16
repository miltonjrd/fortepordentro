import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowLeft, ArrowRight, ClipboardCheck, LoaderCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sarcFQuestions, scoreSarcF, SARC_F_DELAY_MS } from '@/lib/sarc-f';

export function SarcFQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [stage, setStage] = useState<'questions' | 'calculating' | 'result'>('questions');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const question = sarcFQuestions[answers.length];

  useEffect(() => {
    if (stage !== 'calculating') return;
    const timer = setTimeout(() => setStage('result'), SARC_F_DELAY_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (started.current) headingRef.current?.focus({ preventScroll: true });
  }, [answers.length, stage]);

  function choose(value: number) {
    started.current = true;
    const next = [...answers, value];
    setAnswers(next);
    if (next.length === sarcFQuestions.length) setStage('calculating');
  }

  function restart() {
    setAnswers([]);
    setStage('questions');
  }

  const result = stage === 'result' ? scoreSarcF(answers) : null;

  return (
    <div id="quiz-sarc-f" className="mt-6 rounded-lg border bg-card p-5 text-left text-card-foreground sm:p-6" aria-label="Triagem SARC-F">
      <div className="mb-4 flex items-center justify-between gap-3 text-sm font-semibold text-primary">
        <span className="flex items-center gap-2"><ClipboardCheck className="size-5" aria-hidden="true" />Triagem rápida do SARC-F</span>
        <span className="shrink-0">{stage === 'questions' ? `${answers.length + 1} de 5` : '5 de 5'}</span>
      </div>
      <div className="mb-5 grid grid-cols-5 gap-1.5" aria-hidden="true">
        {sarcFQuestions.map((item, index) => <span key={item.label} className={`h-1 rounded-full ${index <= answers.length ? 'bg-primary' : 'bg-border'}`} />)}
      </div>
      <div className="min-h-72" aria-live="polite" aria-busy={stage === 'calculating'}>
        {stage === 'questions' && question && <>
          <p className="mb-2 text-sm font-semibold text-muted-foreground">{question.label}</p>
          <h2 ref={headingRef} tabIndex={-1} className="mb-5 text-xl font-bold leading-snug outline-none">{question.text}</h2>
          <div className="grid gap-2.5">
            {question.options.map((option, index) => <Button key={`${answers.length}-${index}`} type="button" variant="outline" onClick={() => choose(index)} className="h-auto min-h-12 justify-between whitespace-normal px-4 py-3 text-left text-base leading-snug hover:bg-secondary hover:text-secondary-foreground">{option}<ArrowRight aria-hidden="true" /></Button>)}
          </div>
          {answers.length > 0 && <Button type="button" variant="ghost" size="sm" className="mt-3" onClick={() => setAnswers(answers.slice(0, -1))}><ArrowLeft aria-hidden="true" />Voltar</Button>}
        </>}
        {stage === 'calculating' && <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
          <LoaderCircle className="size-9 text-primary motion-safe:animate-spin" aria-hidden="true" />
          <h2 ref={headingRef} tabIndex={-1} className="text-xl font-bold outline-none">Calculando pontuação SARC-F…</h2>
        </div>}
        {result && <>
          <div className="mb-3 flex items-center gap-2 text-primary">{result.elevatedRisk ? <AlertTriangle className="size-6 shrink-0" aria-hidden="true" /> : <ClipboardCheck className="size-6 shrink-0" aria-hidden="true" />}<span className="text-sm font-semibold">Pontuação: {result.score} de 10</span></div>
          <h2 ref={headingRef} tabIndex={-1} className="text-xl font-bold leading-snug outline-none">{result.elevatedRisk ? 'Sinais de risco aumentado de sarcopenia' : 'Triagem abaixo do ponto de alerta'}</h2>
          <p className="mt-3 leading-relaxed">{result.elevatedRisk ? 'As respostas sugerem risco aumentado de sarcopenia, condição associada à perda de força e massa muscular, quedas e perda de autonomia. Procure avaliação profissional para investigar esses sinais.' : 'Suas respostas ficaram abaixo de 4 pontos. Isso não exclui sarcopenia. Se há fraqueza, dor, dificuldade de mobilidade ou quedas, procure avaliação profissional.'}</p>
          <Button asChild className="mt-5 h-auto min-h-12 w-full whitespace-normal bg-accent px-4 py-3 text-base font-bold text-accent-foreground hover:bg-accent/90"><a href="#oferta">Conhecer o guia<ArrowRight aria-hidden="true" /></a></Button>
          <Button type="button" variant="ghost" className="mt-2 w-full" onClick={restart}><RotateCcw aria-hidden="true" />Refazer triagem</Button>
        </>}
      </div>
      <p className="mt-4 pt-3 text-sm leading-relaxed text-muted-foreground">Triagem, não diagnóstico. Não mede massa muscular nem determina a causa da dor nas costas. O e-book é educativo e não substitui consulta.</p>
    </div>
  );
}