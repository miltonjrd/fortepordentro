import { useEffect } from 'react';

// HOTMART - Sales Funnel Widget (código oficial, carregado no navegador)
declare global { interface Window { checkoutElements?: { init: (name: string) => { mount: (sel: string) => void } } } }

const SRC = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';

export function HotmartSalesFunnel() {
  useEffect(() => {
    const mount = () => window.checkoutElements?.init('salesFunnel').mount('#hotmart-sales-funnel');
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) { if (window.checkoutElements) mount(); else existing.addEventListener('load', mount); return; }
    const s = document.createElement('script');
    s.src = SRC;
    s.addEventListener('load', mount);
    document.body.appendChild(s);
  }, []);
  return <div id="hotmart-sales-funnel"></div>;
}
