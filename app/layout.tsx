import type { Metadata } from 'next';
import { siteUrl, siteDescription, shareImage } from '../lib/site';
import './globals.css';
import { ExplainThis } from './components/explain-this';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Eduardo Escamilla | Software Engineer', template: '%s | Eduardo Escamilla' },
  description: siteDescription,
  applicationName: 'Eduardo Escamilla — Portfolio',
  authors: [{ name: 'Eduardo Escamilla', url: siteUrl }],
  creator: 'Eduardo Escamilla',
  openGraph: {
    type: 'website', locale: 'en_US', siteName: 'Eduardo Escamilla',
    title: 'Eduardo Escamilla | Software Engineer', description: siteDescription,
    images: [shareImage],
  },
  twitter: { card: 'summary_large_image', title: 'Eduardo Escamilla | Software Engineer', description: siteDescription, images: [shareImage] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}` }} /></head><body>{children}<ExplainThis topic="overview" /></body></html>;
}
