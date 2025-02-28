"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'pt-BR': {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.description': 'Transformando ideias em soluções digitais inovadoras',
    'hero.cta': 'Entre em contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais que resolvem problemas reais. Com experiência em desenvolvimento web e mobile, estou sempre em busca de novos desafios e aprendizados. Minha jornada na programação começou há alguns anos e desde então venho aprimorando minhas habilidades em diversas tecnologias e frameworks.',
    'about.experience': 'Anos de Experiência',
    'about.projects': 'Projetos Concluídos',
    'about.clients': 'Clientes Satisfeitos',
    
    // Skills
    'skills.title': 'Minhas Habilidades',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Ferramentas',
    
    // Projects
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Trabalhos recentes',
    'projects.viewAll': 'Ver todos',
    'projects.viewProject': 'Ver projeto',
    'projects.sourceCode': 'Código fonte',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos trabalhar juntos',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados',
    'footer.madeWith': 'Feito com',
    'footer.by': 'por Deilton Pedro Junior',
  },
  'en-US': {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Transforming ideas into innovative digital solutions',
    'hero.cta': 'Get in touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I am a Full Stack developer passionate about creating digital solutions that solve real problems. With experience in web and mobile development, I am always looking for new challenges and learning opportunities. My programming journey began a few years ago, and since then I have been improving my skills in various technologies and frameworks.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end',
    'skills.tools': 'Tools',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Recent work',
    'projects.viewAll': 'View all',
    'projects.viewProject': 'View project',
    'projects.sourceCode': 'Source code',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.madeWith': 'Made with',
    'footer.by': 'by Deilton Pedro Junior',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children, 
  defaultLanguage = 'pt-BR' 
}: { 
  children: ReactNode;
  defaultLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}