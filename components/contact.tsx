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
  MessageCircle,
} from 'lucide-react';

const easing = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing, delay },
  },
});

export function Contact() {
  const { t, language } = useLanguage();
  const ptBR = language === "pt-BR";

  const copy = {
    badge: ptBR ? "Convite para entrevistas" : "Interview invite",
    title: ptBR ? "Vamos conversar?" : "Let's talk?",
    subtitle: ptBR
      ? "Disponível para vagas full-time com foco em back-end. Respondo em até 24h."
      : "Open to full-time backend-focused roles. Reply within 24h.",
    recruiterTip: ptBR
      ? "💡 Recruiter: envie a vaga, senioridade e faixa salarial para agilizar."
      : "💡 Recruiter tip: share the role, seniority and salary range to speed things up.",
    whatsapp: ptBR ? "Chamar no WhatsApp" : "Message on WhatsApp",
    email: ptBR ? "Enviar email" : "Send email",
    orLabel: ptBR ? "ou" : "or",
    availability: ptBR
      ? "Disponível · Responde em até 24h"
      : "Available · Replies within 24h",
    location: "Ourinhos, Brasil · Remote OK",
    profileLabel: ptBR ? "Ver perfil completo" : "Full profile",
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-28 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14 space-y-3"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {copy.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">{copy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {copy.subtitle}
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {copy.availability}
          </div>
        </motion.div>

        {/* ── CTA principal ── */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl shadow-primary/10 p-8 md:p-10 mb-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

            {/* Recruiter tip — destaque no topo */}
            <div className="relative mb-8 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary font-medium">
              {copy.recruiterTip}
            </div>

            {/* Botões de ação */}
            <div className="relative flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 h-14 text-base" asChild>
                <a
                  href="https://wa.me/5514982280039"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {copy.whatsapp}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-14 text-base"
                asChild
              >
                <a href="mailto:deiltonp74@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  {copy.email}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ── Info + Social grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Telefone */}
          <a
            href="tel:+5514982280039"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <PhoneCall className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp</p>
              <p className="text-sm font-semibold truncate">+55 14 98228-0039</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:deiltonp74@gmail.com"
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-sm font-semibold truncate">deiltonp74@gmail.com</p>
            </div>
          </a>

          {/* Localização */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                {ptBR ? "Localização" : "Location"}
              </p>
              <p className="text-sm font-semibold truncate">{copy.location}</p>
            </div>
          </div>
        </motion.div>

        {/* ── Social + LinkedIn ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* LinkedIn destaque */}
          <a
            href="https://www.linkedin.com/in/deilton-pedro/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-muted-foreground truncate">
                {ptBR ? "Stack, cases e experiência completa" : "Stack, cases and full experience"}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>

          {/* GitHub destaque */}
          <a
            href="https://github.com/DeJunior007"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
          >
            <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-muted-foreground truncate">
                {ptBR ? "Código, projetos e contribuições" : "Code, projects and contributions"}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}