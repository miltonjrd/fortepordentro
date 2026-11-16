export const SARC_F_THRESHOLD = 4;
export const SARC_F_DELAY_MS = 2000;

export const sarcFQuestions = [
  { label: 'Força', text: 'Quanta dificuldade a pessoa tem para carregar um peso de 5 kg?', options: ['Nenhuma', 'Alguma dificuldade', 'Muita dificuldade / Não consegue'] },
  { label: 'Caminhar', text: 'Quanta dificuldade ela tem para caminhar atravessando um cômodo?', options: ['Nenhuma', 'Alguma dificuldade', 'Muita dificuldade / Usa bengala ou apoio'] },
  { label: 'Levantar', text: 'Quanta dificuldade ela tem para se levantar de uma cadeira ou da cama?', options: ['Nenhuma', 'Alguma dificuldade', 'Muita dificuldade / Não consegue sem ajuda'] },
  { label: 'Degraus', text: 'Quanta dificuldade ela tem para subir um lance de 10 degraus de escada?', options: ['Nenhuma', 'Alguma dificuldade', 'Muita dificuldade / Não consegue'] },
  { label: 'Quedas', text: 'Quantas vezes ela caiu no último ano?', options: ['Nenhuma queda', '1 a 3 quedas', '4 ou mais quedas'] },
] as const;

export function scoreSarcF(answers: readonly number[]) {
  if (answers.length !== 5 || answers.some(value => !Number.isInteger(value) || value < 0 || value > 2)) {
    throw new Error('Responda às cinco perguntas com valores de 0 a 2.');
  }
  const score = answers.reduce((total, answer) => total + answer, 0);
  return { score, elevatedRisk: score >= SARC_F_THRESHOLD };
}