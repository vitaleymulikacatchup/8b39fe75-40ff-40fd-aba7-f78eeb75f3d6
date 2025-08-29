import type { Metadata } from 'next';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MemeMint',
  description: 'Create a simple, fun landing page for a meme coin',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}