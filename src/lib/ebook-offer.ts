export const ebookItems = [
  { name: 'E-book "Forte por Dentro": guia prático de força no dia a dia', price: 97 },
  { name: "Bônus 1: Guia de Primeiros Passos", price: 17 },
  { name: "Bônus 2: Checklist de Segurança em Casa", price: 17 },
  { name: "Bônus 3: Manual de Proteínas Simples", price: 19.9 },
];

const sumItems = Math.round(ebookItems.reduce((total, item) => total + item.price, 0) * 100) / 100;

export const ebookOffer = {
  originalPrice: sumItems,
  price: 67,
  checkoutUrl: "https://pay.hotmart.com/I108252618E" as string | null,
};

export const ebookSavings = Math.round((ebookOffer.originalPrice - ebookOffer.price) * 100) / 100;
export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
