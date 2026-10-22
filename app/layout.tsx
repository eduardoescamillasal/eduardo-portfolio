import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eduardo Escamilla | Software Engineer · Mathematics · AI',
  description: 'Portfolio of Eduardo Escamilla — full stack software engineering, mathematics, cloud, and AI experimentation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}` }} /></head><body>{children}</body></html>;
}
