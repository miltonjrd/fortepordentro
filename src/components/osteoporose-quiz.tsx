import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowDown, Check, ClipboardCheck, LoaderCircle, RotateCcw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  OSTEOPOROSE_QUIZ_DELAY_MS,
  osteoporoseQuizHasRisk,
  osteoporoseQuizQuestions,
  scoreOsteoporoseQuiz,
} from '@/lib/osteoporose-quiz';

export function OsteoporoseQuiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [stage, setStage] = useState<'questions' | 'calculating' | 'result'>('questions');
  const endRef = useRef<HTMLDivElement>(null);
  const question = osteoporoseQuizQuestions[answers.length];

  useEffect(() => {
    if (stage !== 'calculating') return;
    const timer = setTimeout(() => setStage('result'), OSTEOPOROSE_QUIZ_DELAY_MS);
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (answers.length === 0) return;
    endRef.current?.scrollIntoView({ block: 'nearest' });
  }, [answers.length, stage]);

  function choose(value: number) {
    const next = [...answers, value];
    setAnswers(next);
    if (next.length === osteoporoseQuizQuestions.length) setStage('calculating');
  }

  function restart() {
    setAnswers([]);
    setStage('questions');
  }

  const risk = stage === 'result' ? osteoporoseQuizHasRisk(answers) : null;

  return (
    <div className="rounded-xl border bg-card p-4 text-card-foreground sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-primary">
          <ClipboardCheck className="size-5" aria-hidden="true" />
          Triagem educativa de saúde óssea
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {osteoporoseQuizQuestions.map((q, i) => (
            <span key={q.id} className={`h-1.5 w-6 rounded-full ${i < answers.length ? 'bg-accent' : 'bg-border'}`} />
          ))}
        </div>
      </div>

      <div className="space-y-3" aria-live="polite">
        {answers.map((answer, i) => {
          const asked = osteoporoseQuizQuestions[i];
          const chosen = asked?.options[answer];
          if (!asked || !chosen) return null;
          return (
            <div key={asked.id} className="space-y-3">
              <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-secondary-foreground">{asked.prompt}</p>
              <p className="ml-auto flex max-w-[85%] items-center gap-2 rounded-2xl rounded-br-sm bg-primary px-4 py-3 font-medium text-primary-foreground">
                <Check className="size-4 shrink-0" aria-hidden="true" />
                {chosen.label}
              </p>
            </div>
          );
        })}

        {stage === 'questions' && question && (
          <div className="space-y-3">
            <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-3 text-secondary-foreground">{question.prompt}</p>
            <div className="flex flex-col gap-2">
              {question.options.map((option, i) => (
                <Button
                  key={option.label}
                  type="button"
                  onClick={() => choose(i)}
                  variant="outline"
                  className="h-auto min-h-12 w-full whitespace-normal justify-start rounded-xl px-4 py-3 text-left text-base"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {stage === 'calculating' && (
          <div className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-4 text-secondary-foreground">
            <LoaderCircle className="size-5 animate-spin text-primary" aria-hidden="true" />
            <p className="font-semibold">Preparando as informações...</p>
          </div>
        )}

        {stage === 'result' && risk !== null && (
          <div
            className={`rounded-xl border-2 p-4 sm:p-5 ${risk ? 'border-accent bg-accent/10' : 'border-primary/40 bg-secondary'}`}
          >
            <p className="flex items-start gap-3 font-bold text-primary">
              {risk ? (
                <AlertTriangle className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden="true" />
              ) : (
                <ShieldCheck className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
              )}
              <span className="text-lg leading-snug">
                {risk
                  ? 'Alguns fatores marcados costumam ser conversados com o médico.'
                  : 'Bons hábitos fazem parte do cuidado com os ossos ao longo dos anos.'}
              </span>
            </p>
            <p className="mt-3 text-base leading-relaxed">
              {risk
                ? 'Idade, histórico familiar de fratura e ingestão de cálcio e vitamina D são temas comuns na conversa sobre saúde óssea. O médico é quem orienta a avaliação adequada.'
                : 'Cálcio, vitamina D, força muscular e equilíbrio fazem parte do cuidado com os ossos ao longo dos anos.'}
            </p>
            <Button
              asChild
              className="mt-5 h-auto min-h-12 w-full whitespace-normal bg-accent px-6 py-4 text-base font-bold text-accent-foreground hover:bg-accent/90"
            >
              <a href="#oferta-ossos">
                QUERO CONHECER O MANUAL
                <ArrowDown className="size-5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              type="button"
              onClick={restart}
              variant="link"
              className="mt-2 h-auto w-full p-0 text-sm font-semibold text-primary"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Refazer a triagem
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Pontuação desta triagem: {scoreOsteoporoseQuiz(answers)} de 6. Triagem educativa, não é diagnóstico: não
              mede densidade óssea, não substitui consulta, exame físico ou densitometria. Fatores de risco não indicam
              que uma fratura vai acontecer.
            </p>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
