export const ebookOffer = {
  originalPrice: 169,
  price: 67,
  checkoutUrl:
    "https://pay.hotmart.com/I108252618E" as string | null,
};

export const ebookSavings = ebookOffer.originalPrice - ebookOffer.price;
export const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
