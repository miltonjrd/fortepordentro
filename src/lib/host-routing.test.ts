import { describe, expect, it } from "vitest";
import { resolveHostRedirect } from "./host-routing";

const r = (u: string) => resolveHostRedirect(new URL(u));

describe("roteamento por host", () => {
  it("domínio principal não redireciona a página de vendas", () => {
    expect(r("https://site.com.br/")).toBeNull();
    expect(r("https://site.com.br/privacidade")).toBeNull();
  });
  it("manda /osteoporose do domínio principal para o subdomínio", () => {
    expect(r("https://site.com.br/osteoporose?a=1")).toEqual({ location: "https://osteoporose.site.com.br/osteoporose?a=1", status: 301 });
    expect(r("https://www.site.com.br/osteoporose")?.location).toBe("https://osteoporose.site.com.br/osteoporose");
  });
  it("subdomínio serve o upsell e seus arquivos", () => {
    expect(r("https://osteoporose.site.com.br/osteoporose")).toBeNull();
    expect(r("https://osteoporose.site.com.br/assets/app.js")).toBeNull();
    expect(r("https://osteoporose.site.com.br/favicon.png")).toBeNull();
  });
  it("subdomínio nunca mostra a página principal", () => {
    expect(r("https://osteoporose.site.com.br/?x=1")).toEqual({ location: "/osteoporose?x=1", status: 302 });
    expect(r("https://osteoporose.site.com.br/privacidade")?.location).toBe("https://site.com.br/privacidade");
  });
  it("preview e desenvolvimento rodam tudo no mesmo host", () => {
    expect(r("https://fortepordentro.conta.workers.dev/osteoporose")).toBeNull();
    expect(r("http://localhost:8080/osteoporose")).toBeNull();
  });
});
