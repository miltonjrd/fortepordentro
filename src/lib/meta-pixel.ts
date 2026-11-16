// Rotas onde o Meta Pixel nunca é carregado nem dispara eventos.
// O upsell de osteoporose fica fora para não classificar o Pixel em categorias de saúde.
export const PIXEL_EXCLUDED_PATHS = ["/osteoporose"];

export function isPixelAllowed(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return !PIXEL_EXCLUDED_PATHS.some((p) => path === p || path.startsWith(`${p}/`));
}
