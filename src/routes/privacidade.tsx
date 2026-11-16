import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Dr. Mauro Pedrin" },
      { name: "description", content: "Como o site do Dr. Mauro Augusto Artolphi Pedrin trata dados de visitantes, cookies e o Meta Pixel, conforme a LGPD." },
      { property: "og:title", content: "Política de Privacidade | Dr. Mauro Pedrin" },
      { property: "og:description", content: "Uso de cookies, Meta Pixel e direitos do titular conforme a LGPD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 text-base leading-relaxed text-foreground">
      <h1 className="font-display text-3xl font-bold text-primary">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-muted-foreground">Última atualização: novembro de 2026</p>

      <h2 className="mt-8 text-xl font-bold text-primary">Quem é o responsável</h2>
      <p className="mt-2">Este site é mantido por Dr. Mauro Augusto Artolphi Pedrin, médico ortopedista (CRM-DF 15789, RQE 11028). Contato: <a className="underline" href="mailto:mauroaapedrin@hotmail.com">mauroaapedrin@hotmail.com</a>.</p>

      <h2 className="mt-8 text-xl font-bold text-primary">Quais dados coletamos</h2>
      <p className="mt-2">O site não pede cadastro e não guarda as respostas dos testes rápidos: elas ficam apenas no seu navegador e somem ao fechar a página. Os dados de compra (nome, e-mail, pagamento) são coletados e tratados pela Hotmart, conforme a política de privacidade dela.</p>

      <h2 className="mt-8 text-xl font-bold text-primary">Cookies e Meta Pixel</h2>
      <p className="mt-2">Usamos o Meta Pixel, da Meta Platforms, para medir visitas e melhorar nossos anúncios. Ele só é ativado se você clicar em "Aceitar" no aviso de cookies. Se recusar, o Pixel não é carregado e os cookies de marketing (_fbp e _fbc) são apagados. Você pode mudar sua escolha a qualquer momento pelo link "Preferências de cookies" no rodapé. Não enviamos à Meta informações sobre sua saúde.</p>

      <h2 className="mt-8 text-xl font-bold text-primary">Base legal e seus direitos</h2>
      <p className="mt-2">O uso de cookies de marketing se baseia no seu consentimento (LGPD, Lei 13.709/2018). Você pode pedir acesso, correção ou exclusão de dados, ou retirar o consentimento, escrevendo para o e-mail acima.</p>

      <h2 className="mt-8 text-xl font-bold text-primary">Aviso de saúde</h2>
      <p className="mt-2">Os materiais vendidos são educativos e não substituem consulta médica, diagnóstico ou tratamento.</p>

      <p className="mt-10"><Link to="/" className="font-semibold text-primary underline">Voltar ao site</Link></p>
    </main>
  );
}
