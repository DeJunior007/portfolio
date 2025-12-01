"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Linkedin,
  Github,
  Clock,
  PhoneCall,
  ExternalLink,
} from 'lucide-react';

export function Contact() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <PhoneCall className="h-6 w-6 text-primary" />,
      title: "Telefone",
      value: "+55 14 98228-0039",
      href: "tel:+5514982280039"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "deiltonp74@gmail.com",
      href: "mailto:deiltonp74@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Ourinhos, Brazil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/deilton-pedro/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/DeJunior007",
      label: "GitHub"
    },
 
  ];

  return (
    <section id="contact" className="relative py-20 md:py-24 pb-24 md:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {language === "en-US" ? "Interview invite" : "Convite para entrevistas"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === "en-US" ? "Get in touch" : "Entre em Contato"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "en-US"
              ? "Open to full-time backend/integration roles."
              : "Vamos conversar sobre vagas full-time em backend/integracoes."}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {language === "en-US"
                ? "Replies within 24h; 15-min calls available."
                : "Respondo em ate 24h; chamadas de 15 min disponiveis."}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-lg shadow-primary/10 flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-3">
                {language === "en-US" ? "Talk directly to me" : "Fale direto comigo"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === "en-US"
                  ? "No forms. Fast response via WhatsApp; email as alternative."
                  : "Sem formularios. Resposta rapida por WhatsApp; email como alternativa."}
              </p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5514982280039"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Abrir WhatsApp agora
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:deiltonp74@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    {language === "en-US" ? "Prefer email" : "Prefiro email"}
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  {language === "en-US"
                    ? "Recruiter tip: send role, seniority and salary range to speed things up."
                    : "Dica para recruiters: envie vaga, senioridade e faixa salarial para agilizar."}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full backdrop-blur-2xl shadow-lg shadow-primary/10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-6">
                {t('contact.title')}
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-3 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a 
                        href={info.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto rounded-2xl border border-primary/15 bg-primary/10 p-4 backdrop-blur-2xl">
                <div className="flex items-start gap-3">
                  <ExternalLink className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Perfil completo</p>
                    <p className="text-sm text-muted-foreground">
                      Mais sobre mim no LinkedIn: stack, entregas e cases recentes.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/deilton-pedro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Abrir LinkedIn <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
