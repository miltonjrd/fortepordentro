import { resolveHostRedirect } from "../src/lib/host-routing";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

// Um único deploy atende o domínio principal e osteoporose.<domínio>.
// O Worker só decide redirecionamentos por host; os arquivos continuam estáticos.
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const redirect = resolveHostRedirect(new URL(request.url));
    if (redirect) return Response.redirect(new URL(redirect.location, request.url).toString(), redirect.status);
    return env.ASSETS.fetch(request);
  },
};
