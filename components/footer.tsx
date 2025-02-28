"use client";

import { useLanguage } from '@/components/language-provider';
import { Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
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
          </div>
        </div>
      </div>
    </footer>
  );
}