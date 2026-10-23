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

## Contextual portfolio assistant

A single “Ask about my work” launcher opens a compact chat window on every page. It introduces the portfolio and links to projects and experience. Four starter questions help visitors explore team contribution, React and React Native experience, projects, and a plain-language introduction. Visitors can select a question or type their own. AI follow-up is available after key configuration. The overview has a heading and links to supporting sections; repeated inline explanation buttons have been removed. The assistant answers the question asked and addresses education details only when directly relevant.

To enable AI follow-up, copy `.env.example` to `.env.local`, set `OPENAI_API_KEY`, and restart the dev server. Set the same server-only variable in Vercel and redeploy to enable it there. `OPENAI_MODEL` defaults to `gpt-5.4-mini`. Never prefix the API key with `NEXT_PUBLIC_` or paste it into client code. The integration uses the [OpenAI Responses API](https://developers.openai.com/api/docs/guides/text).

Answers use the portfolio’s project and experience data, with a short bounded conversation. No transcript is saved by this app; OpenAI receives the questions and portfolio context (`store: false` is set). The endpoint validates input, limits output, times out provider requests, and applies an in-memory limit of 10 requests per client per 10 minutes per server instance. This limit is not shared across Vercel instances; use provider project spend limits and a shared limiter for strict production-wide quotas. Unknown or unavailable facts should be identified as such. Provider errors leave the authored explanation and links available.
