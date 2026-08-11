"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "pt-BR" | "en-US";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  "pt-BR": {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.greeting": "Olá, eu sou",
    "hero.cta": "Entre em contato",
  },
  "en-US": {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hello, I am",
    "hero.cta": "Get in touch",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "pt-BR",
}: {
  children: ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
