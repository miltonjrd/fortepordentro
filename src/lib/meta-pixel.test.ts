import { describe, expect, it } from "vitest";
import { isPixelAllowed } from "./meta-pixel";

describe("Meta Pixel por rota", () => {
  it("roda na página de vendas e na política de privacidade", () => {
    expect(isPixelAllowed("/")).toBe(true);
    expect(isPixelAllowed("/privacidade")).toBe(true);
  });
  it("não roda no upsell de osteoporose", () => {
    expect(isPixelAllowed("/osteoporose")).toBe(false);
    expect(isPixelAllowed("/osteoporose/")).toBe(false);
    expect(isPixelAllowed("/osteoporose/qualquer")).toBe(false);
  });
  it("não confunde rotas com prefixo parecido", () => {
    expect(isPixelAllowed("/osteoporosex")).toBe(true);
  });
});
