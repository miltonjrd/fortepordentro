import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { isPixelAllowed } from "@/lib/meta-pixel";

const KEY = "cookie-consent-marketing";
const PIXEL_ID = "3715069618646523";

function startPixel() {
  const w = window as any;
  if (w.__metaPixelInit) {
    w.fbq?.("consent", "grant");
    return;
  }
  w.__metaPixelInit = true;
  if (!w.fbq) {
    const n: any = (w.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod(...args) : n.queue.push(args);
    });
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    // Desliga o PageView automático do script em mudanças de URL; o PageView é
    // enviado manualmente abaixo, só nas rotas permitidas.
    n.disablePushState = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
  }
  w.fbq("init", PIXEL_ID);
  w.fbq("track", "PageView");
}

function clearMetaCookies() {
  const names = ["_fbp", "_fbc"];
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(`; domain=${d}`, `; domain=.${d}`);
  }
  const segs = window.location.pathname.split("/").filter(Boolean);
  const paths = ["/"];
  for (let i = 1; i <= segs.length; i++) paths.push("/" + segs.slice(0, i).join("/"));
  for (const n of names)
    for (const d of domains)
      for (const p of paths)
        document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0; path=${p}${d}`;
}

export function CookieConsent() {
  const router = useRouter();
  const [choice, setChoice] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    setChoice(localStorage.getItem(KEY));
  }, []);

  useEffect(() => {
    if (choice !== "granted") {
      if (choice === "denied") {
        (window as any).fbq?.("consent", "revoke");
        clearMetaCookies();
      }
      return;
    }
    if (isPixelAllowed(window.location.pathname)) startPixel();
    let last = window.location.pathname + window.location.search;
    return router.subscribe("onResolved", () => {
      const cur = window.location.pathname + window.location.search;
      if (cur === last) return;
      last = cur;
      if (!isPixelAllowed(window.location.pathname)) return;
      if ((window as any).__metaPixelInit) (window as any).fbq?.("track", "PageView");
      else startPixel();
    });
  }, [choice, router]);

  const decide = (v: "granted" | "denied") => {
    localStorage.setItem(KEY, v);
    setChoice(v);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const show = choice === null || open;

  const prefsLink = (
    <div className="bg-background py-3 text-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-muted-foreground underline hover:text-foreground"
      >
        Preferências de cookies
      </button>
      <a href="/privacidade" className="ml-4 text-xs text-muted-foreground underline hover:text-foreground">
        Política de Privacidade
      </a>
      <p className="mt-2 text-xs text-muted-foreground">
        Dr. Mauro Augusto Artolphi Pedrin, CRM-DF 15789. Contato: mauroaapedrin@hotmail.com
      </p>
    </div>
  );

  if (!show) return prefsLink;

  return (
    <>
    {prefsLink}
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 md:flex-row md:items-center">
        <p className="text-sm text-foreground md:flex-1">
          Usamos cookies de marketing (Meta Pixel) para medir visitas e melhorar nossos anúncios.
          Eles só são ativados se você aceitar, conforme a LGPD. Recusar não afeta o uso do site.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => decide("denied")}
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Recusar
          </button>
          <button
            onClick={() => decide("granted")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
      </>
  );
}
