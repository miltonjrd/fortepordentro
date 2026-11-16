<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the osteoporosis upsell on its own `/osteoporose` route; the main sarcopenia sales page must remain independent so Hotmart can use the upsell URL after purchase.
- Keep osteoporosis offer amounts and checkout availability in `src/lib/osteoporose-offer.ts`; a missing checkout must not allow a pretend purchase.
- Keep SARC-F scoring in a browser-safe pure module and transient answers inside the quiz component; this screening needs no stored health data and must distinguish risk from diagnosis.
- Keep the osteoporosis triage scoring in a browser-safe pure module (`src/lib/osteoporose-quiz.ts`) and its answers transient in the component; it must read as risk screening, never diagnosis, and the video slot stays a single component (`OsteoporoseVoice`) used by the route.
- Use the shared `AnatomiaVideo` player for narrated anatomy clips with native controls and no autoplay so visitors choose when to hear the explanations.
