import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Static build: every route is prerendered to real HTML at build time via
// TanStack Start's crawler (needs a real, fast-starting SSR preview server,
// hence the plain "node-server" preset here — any "cloudflare*" preset makes
// nitro spawn `wrangler pages dev` for that preview, which is too slow to
// bind its port in time). The output's `public/` directory is plain static
// HTML/CSS/JS/media — that's what gets uploaded to Cloudflare Pages.
export default defineConfig({
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true },
    }),
    nitro({ preset: "node-server" }),
    viteReact(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
