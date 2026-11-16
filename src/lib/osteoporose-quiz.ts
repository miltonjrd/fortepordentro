export const OSTEOPOROSE_QUIZ_DELAY_MS = 2000;
export const OSTEOPOROSE_RISK_THRESHOLD = 2;

export type OsteoporoseQuizOption = { label: string; score: number };
export type OsteoporoseQuizQuestion = { id: string; prompt: string; options: OsteoporoseQuizOption[] };

export const osteoporoseQuizQuestions: OsteoporoseQuizQuestion[] = [
  {
    id: 'idade',
    prompt: 'Qual é a idade da pessoa que você quer proteger?',
    options: [
      { label: 'Menos de 50 anos', score: 0 },
      { label: '50 a 65 anos', score: 1 },
      { label: 'Mais de 65 anos', score: 2 },
    ],
  },
  {
    id: 'fratura-familiar',
    prompt: 'Já houve histórico de fratura por queda boba na família?',
    options: [
      { label: 'Sim, já aconteceu', score: 2 },
      { label: 'Não, nenhuma', score: 0 },
    ],
  },
  {
    id: 'calcio-vitamina-d',
    prompt: 'Com que frequência ela consome Cálcio ou toma Vitamina D?',
    options: [
      { label: 'Raramente / Quase nunca', score: 2 },
      { label: 'Todos os dias', score: 0 },
    ],
  },
];

export function scoreOsteoporoseQuiz(answers: number[]): number {
  return answers.reduce((total, answer, index) => {
    const option = osteoporoseQuizQuestions[index]?.options[answer];
    return total + (option ? option.score : 0);
  }, 0);
}

export function osteoporoseQuizHasRisk(answers: number[]): boolean {
  return scoreOsteoporoseQuiz(answers) >= OSTEOPOROSE_RISK_THRESHOLD;
}
