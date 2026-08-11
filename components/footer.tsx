"use client";

import { useLanguage } from '@/components/language-provider';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const ptBR = language === "pt-BR";

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
    <footer className="relative overflow-hidden bg-white/5 backdrop-blur-2xl pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-primary/5" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto w-full max-w-content px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <a href="#home" className="text-2xl font-bold text-primary">
              Deilton<span className="text-primary/60">Dev</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {ptBR
                ? "Full stack, back-end forte, automações de IA de verdade."
                : "Full stack, strong backend, real AI automations."}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {ptBR ? "Disponível para novas oportunidades" : "Open to new opportunities"}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {ptBR ? "Navegação" : "Navigation"}
            </p>
            <nav className="flex flex-col items-center gap-2 md:items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {ptBR ? "Conecte-se" : "Connect"}
            </p>
            <div className="flex items-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="glow-card flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:deiltonp74@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              deiltonp74@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} Deilton Pedro Junior · {ptBR ? "Todos os direitos reservados." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
