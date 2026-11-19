// Separa o upsell de osteoporose num subdomínio (osteoporose.<domínio>) servido pelo
// mesmo projeto. Módulo puro: usado pelo Worker (worker/index.ts) e pelo navegador.

export const UPSELL_SUBDOMAIN = "osteoporose";
export const UPSELL_PATH = "/osteoporose";

export function isUpsellHost(hostname: string) {
  return hostname.toLowerCase().startsWith(`${UPSELL_SUBDOMAIN}.`);
}

// Hosts onde não existe subdomínio próprio (preview, desenvolvimento): tudo roda no mesmo host.
function isSingleHost(hostname: string) {
  const h = hostname.toLowerCase();
  return h === "localhost" || h.endsWith(".workers.dev") || h.endsWith(".pages.dev") || /^[\d.]+$/.test(h) || h.includes(":");
}

function baseDomain(hostname: string) {
  return hostname.toLowerCase().replace(/^(www|osteoporose)\./, "");
}

export function upsellOrigin(hostname: string, protocol = "https:") {
  return `${protocol}//${UPSELL_SUBDOMAIN}.${baseDomain(hostname)}`;
}

export function mainOrigin(hostname: string, protocol = "https:") {
  return `${protocol}//${baseDomain(hostname)}`;
}

const isUpsellPath = (p: string) => p === UPSELL_PATH || p.startsWith(`${UPSELL_PATH}/`);
const isAssetPath = (p: string) => /\.[a-z0-9]+$/i.test(p.split("/").pop() ?? "");

// Devolve { location, status } quando a requisição deve ser redirecionada; null quando segue normalmente.
export function resolveHostRedirect(url: URL): { location: string; status: 301 | 302 } | null {
  const { hostname, pathname, search, protocol } = url;
  if (isSingleHost(hostname)) return null;

  if (isUpsellHost(hostname)) {
    if (isUpsellPath(pathname) || isAssetPath(pathname) || pathname.startsWith("/assets/")) return null;
    if (pathname === "/privacidade") return { location: `${mainOrigin(hostname, protocol)}${pathname}${search}`, status: 302 };
    return { location: `${UPSELL_PATH}${search}`, status: 302 };
  }

  if (isUpsellPath(pathname)) {
    return { location: `${upsellOrigin(hostname, protocol)}${pathname}${search}`, status: 301 };
  }
  return null;
}
