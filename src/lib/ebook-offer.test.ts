import { describe, expect, it } from 'vitest';
import { ebookOffer, ebookSavings } from './ebook-offer';

describe('Oferta do e-book Eu Ainda Faço Sozinho', () => {
  it('tem preço de referência de R$ 169,00', () => {
    expect(ebookOffer.originalPrice).toBe(169);
  });
  it('vende por R$ 67,00', () => {
    expect(ebookOffer.price).toBe(67);
  });
  it('calcula economia de R$ 102,00', () => {
    expect(ebookSavings).toBe(102);
  });
  it('aponta para o checkout da Hotmart informado pelo autor', () => {
    expect(ebookOffer.checkoutUrl).toBe('https://pay.hotmart.com/I108252618E');
  });
});
