# Forte por Dentro

## Development

```sh
npm i
npm run dev
```

## Build & deploy

`npm run build` prerenders every route to static HTML and writes the result to `dist/` —
plain HTML/CSS/JS/media, no server runtime required. Upload `dist/` directly to Cloudflare
Pages (or any static host).

```sh
npm run build
npm run preview   # serve dist/ locally to double-check before uploading
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
