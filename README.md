# Eduardo Escamilla — Portfolio

Next.js portfolio. Run `npm run dev` for development and `npm run build` for the production check.

## Content

- `app/page.tsx`: home, professional work, background, and AI statement.
- `data/portfolio.ts`: existing project and experience content.
- `app/[project]/page.tsx`: `/proofgym` and `/kickboxwm` project details.
- `app/components/interactive.tsx`: certificate filters and email draft form.
- `public/Eduardo_Escamilla_CV.pdf`: default downloadable CV.
- `public/Eduardo_Escamilla_CV.docx`: editable source retained for future updates. The page offers PDF downloads only. Both files include a clickable portfolio URL.

## Certificates

Add real credentials to `data/certificates.ts` with title, platform, issuer, credential kind, optional included courses, verification URL, and preview path. Put preview images in `public/certificates/`. The section features four completed DataCamp tracks and selected Coursera credentials. Visitors can browse the collection with search, type/platform filters, and pagination. Certificate details and available previews open in a modal. The collection includes 20 Coursera PDFs, four DataCamp track PDFs, and the existing calculus certificate screenshot. Coursera PDFs have verification links; three earlier University of Pennsylvania entries still need documents and verification links. DataCamp records are track completions, not DataCamp professional certifications.

## Remaining portfolio checklist

- Supply verification links and previews for the three remaining University of Pennsylvania courses, and public DataCamp verification links if available.
- Add actual project screenshots or demo recordings and project-specific repository links.
- Add DSA learning material and React patterns later.
- Add a TensorFlow.js model with its model assets, usage explanation, and an interactive example.
- Configure Google Analytics with the site's measurement ID and chosen consent behavior.
- Activate FormSubmit delivery: submit the contact form once from the running site, then click the activation link emailed to eduardo.escamillasal@gmail.com. Until activation, delivery is pending. The form posts directly to FormSubmit with its default spam check, a honeypot, and a confirmation page; no email app is required. Verify receipt with a second submission after activation.
- Define the paid service, trial terms, and Stripe product/prices before integrating checkout. Keep secret keys on the server.
- Supply any additional personal content. PDF CV downloads are available; regenerate the PDF after editing the Word source.

Changes are local. Existing Vercel configuration is preserved.

## Interactive visual polish

The hero includes an original canvas particle wave that reacts to fine-pointer movement. Colors follow the selected theme. Animation is capped at 30 FPS, uses fewer particles on small screens, stops offscreen and in background tabs, and becomes static for reduced-motion preferences. A subtle “Pause motion” control also lets visitors stop it. Buttons, links, certificate cards, and form controls have hover, focus, and press feedback; motion effects respect reduced-motion settings.

## Project AI explorer

The homepage selected-work section includes an AI explainer for a real excerpt of the portfolio particle animation. Each project detail page has a guide scoped to its documented features and engineering questions. The guides offer four starter questions, follow-up input, a collapsible question list, and source links. The homepage guide also displays the code excerpt. ProofGym also includes a reviewed validation excerpt and implementation context from its supplied source snapshot. KickboxWM uses a user-supplied theoretical rationale and portfolio descriptions; its implementation has not yet been reviewed. CogniTrain currently uses documented features only. The guide distinguishes documented behavior from proposed designs.

The guide receives only the selected project context, not experience, education or credential records. Instructions keep discussion focused on code and project design; this is a model instruction boundary, not a guarantee against every adversarial prompt.

Set the server-only `OPENAI_API_KEY` in `.env.local` and in hosting. Optional `OPENAI_MODEL` defaults to `gpt-5.4-mini`. Questions are processed through the Responses API with `store: false`. Existing request validation, bounded history, timeout, and per-instance rate limits apply. Run `npm run test:assistant` and `npm run build` to validate.

### ProofGym source review

Reviewed the user-supplied local snapshot on 2026-10-23 without modifying it. Curated context and a verbatim `isAccessible` excerpt are in `data/proofgym.ts`. Evidence: `package.json` (stack), `lib/formula.ts` (parser/AST), `lib/validator.ts` (rules and scope), `store/useProofStore.ts` (workspace transitions), `lib/generator.ts` and `components/ExerciseSelector.tsx` (implemented generator), `store/useProgressStore.ts` and `store/useArenaStore.ts` (localStorage), `lib/progress.ts` (XP/medals/streaks), and `lib/puzzles/index.ts` (arena domains and proof adapter).

The upstream README is stale about generator and persistence status. This review does not establish deployed-version parity, authorship history, measured outcomes, or formal correctness. In particular, the current completion helper compares the last top-level formula to the goal rather than independently checking every validation result. The guide must not imply that a completion indicator certifies an entirely valid proof. Source changes need a fresh review before updating this curated snapshot.

### KickboxWM rationale review

Reviewed the supplied 14-page theoretical PDF on 2026-10-23. The user identifies this as a hypothesis-driven personal experiment with straightforward implementation. `data/kickboxwm.ts` summarizes that rationale, distinguishes delayed-recall motor N-back from match detection, and separates protocol proposals from verified implementation and empirical results. The document explicitly describes the combined protocol as not tested in a controlled trial. Its generated citations and predicted biological/cognitive outcomes were not independently validated and are not represented as established findings. The original PDF has not been added to public assets. Project source is still needed to verify specific implementation claims.

### Interactive proof demonstration

The ProofGym detail page includes a six-line Fitch-style derivation of `P → R` from `P → Q` and `Q → R`. Visitors reveal the assumption, two uses of implication elimination, and implication introduction, select lines for explanations, switch to English, or replay. The example is a guided portfolio demonstration, separate from the full ProofGym engine. Symbols and subproof scope use color and structural labels; curated TypeScript excerpts also have syntax highlighting.

## Search metadata

The homepage and project pages render distinct titles/descriptions, canonical URLs, Open Graph and Twitter previews, and JSON-LD in their initial HTML. Project metadata lives in `lib/project-seo.ts`; project pages describe the application and its breadcrumb hierarchy. The homepage profile identifies the person and website using consistent IDs. The sitemap includes all three project routes, unknown project slugs return 404, and robots excludes the chat API. No ratings, clinical results, or unsupported credentials are included in structured data.
