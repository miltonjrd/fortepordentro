import { describe, expect, it } from 'vitest';
import { scoreSarcF, SARC_F_DELAY_MS, sarcFQuestions } from './sarc-f';

describe('Triagem SARC-F', () => {
  it('não alerta para respostas sem dificuldade e sem quedas', () => {
    expect(scoreSarcF([0, 0, 0, 0, 0])).toEqual({ score: 0, elevatedRisk: false });
  });
  it('considera 3 pontos abaixo do corte', () => {
    expect(scoreSarcF([1, 1, 1, 0, 0])).toEqual({ score: 3, elevatedRisk: false });
  });
  it('indica risco aumentado a partir de 4 pontos', () => {
    expect(scoreSarcF([1, 1, 1, 1, 0])).toEqual({ score: 4, elevatedRisk: true });
  });
  it('soma até 10 pontos', () => {
    expect(scoreSarcF([2, 2, 2, 2, 2])).toEqual({ score: 10, elevatedRisk: true });
  });
  it('pontua quedas como 0, 1 e 2', () => {
    expect(sarcFQuestions[4].options).toHaveLength(3);
    expect([0, 1, 2].map(value => scoreSarcF([0, 0, 0, 0, value]).score)).toEqual([0, 1, 2]);
  });
  it('aguarda dois segundos antes do resultado', () => {
    expect(SARC_F_DELAY_MS).toBe(2000);
  });
  it('não calcula um questionário incompleto ou inválido', () => {
    expect(() => scoreSarcF([0, 0])).toThrow();
    expect(() => scoreSarcF([0, 0, 0, 0, 3])).toThrow();
  });
});