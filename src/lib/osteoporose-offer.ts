export const osteoporoseOffer = {
  originalPrice: 217,
  price: 97,
  checkoutUrl: "https://pay.hotmart.com/Y108253778O" as string | null,
};

export const osteoporoseSavings = osteoporoseOffer.originalPrice - osteoporoseOffer.price;
export const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);