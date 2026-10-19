# Eduardo Escamilla — Portfolio

Hiring-focused personal portfolio built with Next.js.

## Run

```bash
npm install
npm run dev
```

## Portrait

The hero is already designed for a professional portrait. Put your photo at `public/portrait.jpg`, then replace the `portrait-placeholder` block in `app/page.tsx` with:

```tsx
<img className="portrait-image" src="/portrait.jpg" alt="Eduardo Escamilla" />
```

and add:

```css
.portrait-image { width:100%; aspect-ratio:4/5; object-fit:cover; display:block; }
```

A placeholder is used now because no portrait image was supplied.

## CV

`public/Eduardo_Escamilla_CV.docx` is Eduardo's current CV. All CV links on the portfolio are direct downloads. The previous public/private CV builder has been removed from this site so it can live as a separate project.
