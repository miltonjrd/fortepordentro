import { describe, expect, it } from 'vitest';
import { osteoporoseOffer, osteoporoseSavings } from './osteoporose-offer';

describe('Oferta de osteoporose escolhida pelo autor', () => {
  it('tem preço de referência de R$ 217,00', () => {
    expect(osteoporoseOffer.originalPrice).toBe(217);
  });
  it('vende por R$ 97,00', () => {
    expect(osteoporoseOffer.price).toBe(97);
  });
  it('calcula economia de R$ 120,00', () => {
    expect(osteoporoseSavings).toBe(120);
  });
});
describe('Checkout do manual', () => {
  it('aponta para o pagamento da Hotmart do manual', () => {
    expect(osteoporoseOffer.checkoutUrl).toBe('https://pay.hotmart.com/Y108253778O');
  });
});
