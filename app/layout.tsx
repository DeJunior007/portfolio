import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { Toaster } from '@/components/ui/toaster';
import { MouseGlow } from '@/components/effects/mouse-glow';
import { DustField } from '@/components/effects/dust-field';
import { CardGlowTracker } from '@/components/effects/card-glow-tracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Deilton Pedro Junior | Desenvolvedor Full Stack',
  description: 'Portfolio profissional de Deilton Pedro Junior, desenvolvedor Full Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <LanguageProvider defaultLanguage="pt-BR">
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 bg-noise opacity-[0.035] mix-blend-overlay" />
            <DustField />
            <MouseGlow />
            <CardGlowTracker />
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
