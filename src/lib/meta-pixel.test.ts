import { describe, expect, it } from "vitest";
import { isPixelAllowed } from "./meta-pixel";

describe("Meta Pixel por rota", () => {
  it("roda somente na página principal de vendas", () => {
    expect(isPixelAllowed("/")).toBe(true);
    expect(isPixelAllowed("")).toBe(true);
    expect(isPixelAllowed("/", "fortepordentro.com.br")).toBe(true);
  });
  it("não roda em nenhuma outra rota", () => {
    expect(isPixelAllowed("/privacidade")).toBe(false);
    expect(isPixelAllowed("/osteoporose")).toBe(false);
    expect(isPixelAllowed("/osteoporose/")).toBe(false);
    expect(isPixelAllowed("/qualquer-outra")).toBe(false);
  });
  it("nunca roda no subdomínio do upsell, nem na raiz dele", () => {
    expect(isPixelAllowed("/", "osteoporose.fortepordentro.com.br")).toBe(false);
    expect(isPixelAllowed("/osteoporose", "osteoporose.fortepordentro.com.br")).toBe(false);
  });
});
