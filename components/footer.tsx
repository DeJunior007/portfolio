"use client";

import { useLanguage } from '@/components/language-provider';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const ptBR = language === "pt-BR";

  const links = [
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/deilton-pedro/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/DeJunior007",
      label: "GitHub",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:deiltonp74@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-2xl py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-background" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + status */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-2xl font-bold text-primary">
              Deilton<span className="text-primary/60">Dev</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {ptBR ? "Disponível para novas oportunidades" : "Open to new opportunities"}
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © {currentYear} Deilton Pedro Junior
            <br />
            {ptBR ? "Todos os direitos reservados." : "All rights reserved."}
          </p>

        </div>
      </div>
    </footer>
  );
}