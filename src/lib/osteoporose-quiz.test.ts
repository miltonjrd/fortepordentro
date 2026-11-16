import { describe, expect, it } from 'vitest';
import {
  OSTEOPOROSE_RISK_THRESHOLD,
  osteoporoseQuizHasRisk,
  osteoporoseQuizQuestions,
  scoreOsteoporoseQuiz,
} from './osteoporose-quiz';

describe('triagem educativa de osteoporose', () => {
  it('tem exatamente três perguntas de clique único', () => {
    expect(osteoporoseQuizQuestions).toHaveLength(3);
    expect(osteoporoseQuizQuestions.map((q) => q.id)).toEqual(['idade', 'fratura-familiar', 'calcio-vitamina-d']);
  });

  it('usa as opções pedidas pelo Dr. Mauro, na ordem', () => {
    const [idade, fratura, nutrientes] = osteoporoseQuizQuestions;
    expect(idade?.options.map((o) => o.label)).toEqual(['Menos de 50 anos', '50 a 65 anos', 'Mais de 65 anos']);
    expect(fratura?.options.map((o) => o.label)).toEqual(['Sim, já aconteceu', 'Não, nenhuma']);
    expect(nutrientes?.options.map((o) => o.label)).toEqual(['Raramente / Quase nunca', 'Todos os dias']);
  });

  it('ponta o perfil de maior risco em 6 e o de menor risco em 0', () => {
    expect(scoreOsteoporoseQuiz([2, 0, 0])).toBe(6);
    expect(scoreOsteoporoseQuiz([0, 1, 1])).toBe(0);
  });

  it('trata 50 a 65 anos com fratura familiar e cálcio diário como risco', () => {
    expect(scoreOsteoporoseQuiz([1, 0, 1])).toBe(3);
    expect(osteoporoseQuizHasRisk([1, 0, 1])).toBe(true);
  });

  it('não aciona o alerta para adulto jovem sem histórico e com cálcio diário', () => {
    expect(scoreOsteoporoseQuiz([0, 1, 1])).toBe(0);
    expect(osteoporoseQuizHasRisk([0, 1, 1])).toBe(false);
  });

  it('aciona o alerta a partir do limiar de 2 pontos', () => {
    expect(OSTEOPOROSE_RISK_THRESHOLD).toBe(2);
    expect(osteoporoseQuizHasRisk([2, 1, 1])).toBe(true);
    expect(osteoporoseQuizHasRisk([1, 1, 1])).toBe(false);
  });

  it('ignora respostas fora do intervalo em vez de somar pontuação inválida', () => {
    expect(scoreOsteoporoseQuiz([9, -1, 0])).toBe(2);
    expect(scoreOsteoporoseQuiz([])).toBe(0);
  });
});
