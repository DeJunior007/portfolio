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
    // Header
    "nav.home": "Inicio",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Ola, eu sou",
    "hero.title": "Desenvolvedor de Software (Fullstack)",
    "hero.description":
      "APIs e front-end alinhados. TypeScript/Node.js e Laravel/PHP no back, React/Next no front, integracoes, filas e WebSocket para experiencias consistentes.",
    "hero.cta": "Entre em contato",

    // About
    "about.title": "Quem eu sou",
    "about.description":
      "Engenheiro de software com foco em backend, APIs bem modeladas e confiabilidade. Trabalho com filas, webhooks, WebSocket e bancos relacionais.",
    "about.experience": "Anos de experiencia",
    "about.projects": "Entregas",
    "about.clients": "Squads",

    // Skills
    "skills.title": "Competencias tecnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Ferramentas",

    // Projects
    "projects.title": "Projetos",
    "projects.subtitle": "Entrega e aprendizado",
    "projects.viewAll": "Ver todos",
    "projects.viewProject": "Ver projeto",
    "projects.sourceCode": "Codigo fonte",

    // Contact
    "contact.title": "Contato",
    "contact.subtitle": "Vagas full-time em desenvolvimento fullstack",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.send": "Enviar mensagem",
    "contact.success": "Mensagem enviada com sucesso!",
    "contact.error": "Erro ao enviar mensagem. Tente novamente.",

    // Footer
    "footer.rights": "Todos os direitos reservados",
    "footer.madeWith": "Feito com",
    "footer.by": "por Deilton Pedro Junior",
  },
  "en-US": {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.title": "Software Engineer (Fullstack)",
    "hero.description":
      "APIs and frontend in sync. TypeScript/Node.js and Laravel/PHP on backend, React/Next on frontend, plus integrations, queues and WebSocket for consistent experiences.",
    "hero.cta": "Get in touch",

    // About
    "about.title": "About",
    "about.description":
      "Backend-focused engineer: well-modeled APIs, reliability, queues, webhooks, WebSocket and relational databases.",
    "about.experience": "Years of experience",
    "about.projects": "Deliveries",
    "about.clients": "Squads",

    // Skills
    "skills.title": "Technical skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Delivery and learning",
    "projects.viewAll": "View all",
    "projects.viewProject": "View project",
    "projects.sourceCode": "Source code",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Open to full-time fullstack roles",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.madeWith": "Made with",
    "footer.by": "by Deilton Pedro Junior",
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
