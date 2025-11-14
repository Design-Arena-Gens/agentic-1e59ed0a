import './globals.css';
import type { Metadata } from 'next';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'Your Name ? Full?Stack Developer (AI)',
  description: 'Portfolio of a full?stack developer specializing in AI?powered products.',
  metadataBase: new URL('https://agentic-1e59ed0a.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          'min-h-screen bg-dark text-white antialiased',
          'selection:bg-primary/30 selection:text-white'
        )}
      >
        {children}
      </body>
    </html>
  );
}
