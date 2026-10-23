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

The homepage selected-work section includes an AI explainer for a real excerpt of the portfolio particle animation. Each project detail page has a guide scoped to its documented features and engineering questions. The guides offer four starter questions, follow-up input, a collapsible question list, and source links. The homepage guide also displays the code excerpt. Other project source code is not included; the guide distinguishes documented behavior from proposed designs.

The guide receives only the selected project context, not experience, education or credential records. Instructions keep discussion focused on code and project design; this is a model instruction boundary, not a guarantee against every adversarial prompt.

Set the server-only `OPENAI_API_KEY` in `.env.local` and in hosting. Optional `OPENAI_MODEL` defaults to `gpt-5.4-mini`. Questions are processed through the Responses API with `store: false`. Existing request validation, bounded history, timeout, and per-instance rate limits apply. Run `npm run test:assistant` and `npm run build` to validate.
