"use client";

import { useLanguage } from '@/components/language-provider';
import { Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-2xl py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-primary">
              Deilton<span className="text-primary/70">Dev</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              &copy; {currentYear} Deilton Pedro Junior. {t('footer.rights')}
            </p>
            <p className="text-muted-foreground mt-1 flex items-center justify-center md:justify-end">
              {t('footer.madeWith')} <Heart className="h-4 w-4 mx-1 text-destructive" /> {t('footer.by')}
            </p>
            <p className="text-xs text-primary mt-2">Disponivel para conversar com recrutadores via LinkedIn.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
