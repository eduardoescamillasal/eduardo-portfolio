import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eduardo Escamilla | Software Engineer · Mathematics · AI',
  description: 'Portfolio of Eduardo Escamilla — full stack software engineering, mathematics, cloud, and AI experimentation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
