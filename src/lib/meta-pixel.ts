import { isUpsellHost } from "./host-routing";

// O Meta Pixel só existe na página principal de vendas. Qualquer outra rota
// (upsell de osteoporose, privacidade, rotas futuras) nunca carrega nem dispara eventos.
export const PIXEL_ALLOWED_PATHS = ["/"];

export function isPixelAllowed(pathname: string, hostname = "") {
  if (isUpsellHost(hostname)) return false;
  const path = pathname.replace(/\/+$/, "") || "/";
  return PIXEL_ALLOWED_PATHS.includes(path);
}
