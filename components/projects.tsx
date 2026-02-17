"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
};

export function Projects() {
  const { t, language } = useLanguage();
  const ptBR = language === "pt-BR";

  // ── Projetos reais (com link, imagem própria ou sem imagem)
  const projects = ptBR
    ? [
        {
          title: "SmartCal",
          type: "Case pessoal",
          description:
            "Orquestração de LLM + visão computacional para ler fotos e textos e responder via WhatsApp. Backend com webhooks, filas assíncronas e Supabase para histórico de conversas.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "Resposta de IA em segundos direto no WhatsApp",
          liveUrl: "https://www.smartcal.com.br/",
          githubUrl: "https://github.com/DeJunior007",
        },
      ]
    : [
        {
          title: "SmartCal",
          type: "Personal project",
          description:
            "LLM + vision orchestration to read photos and text, replying via WhatsApp. Backend with webhooks, async queues and Supabase for conversation history.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "AI response in seconds straight to WhatsApp",
          liveUrl: "https://www.smartcal.com.br/",
          githubUrl: "https://github.com/DeJunior007",
        },
      ];

  // ── Experiência profissional (timeline, sem imagem)
  const experiences = ptBR
    ? [
        {
          company: "NG Promotora",
          role: "Desenvolvedor de Software",
          period: "2023 – atual",
          description:
            "APIs em Laravel/PHP e TypeScript para sistemas internos de crédito. Filas assíncronas com Horizon, webhooks e dashboards em SQL. Implementei fluxo de simulações em background com retorno em tempo real via WebSocket.",
          tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "SQL"],
          highlight: "API central de integração financeira com WebSocket em produção",
        },
        {
          company: "MSI Soluções",
          role: "Estagiário de Desenvolvimento",
          period: "2022 – 2023",
          description:
            "APIs em PHP/Laravel, stored procedures em PL/pgSQL e integrações com sistemas ERP. Foco em estabilidade e entregas incrementais.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP"],
          highlight: "Integrações ERP com banco relacional complexo",
        },
        {
          company: "Assert Tech",
          role: "Estagiário de Desenvolvimento",
          period: "2021 – 2022",
          description:
            "Desenvolvimento de interfaces com Next.js e Node.js, consumo de APIs REST e entregas orientadas a produto.",
          tags: ["Node.js", "Next.js", "REST APIs"],
          highlight: "Primeiro contato com stack full stack em ambiente de produto",
        },
      ]
    : [
        {
          company: "NG Promotora",
          role: "Software Developer",
          period: "2023 – present",
          description:
            "Laravel/PHP and TypeScript APIs for internal credit systems. Async queues with Horizon, webhooks and SQL dashboards. Built background simulation flow with real-time WebSocket updates.",
          tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "SQL"],
          highlight: "Central financial integration API with WebSocket in production",
        },
        {
          company: "MSI Soluções",
          role: "Development Intern",
          period: "2022 – 2023",
          description:
            "PHP/Laravel APIs, PL/pgSQL stored procedures and ERP integrations. Focus on stability and incremental delivery.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP"],
          highlight: "ERP integrations with complex relational database",
        },
        {
          company: "Assert Tech",
          role: "Development Intern",
          period: "2021 – 2022",
          description:
            "Next.js and Node.js interfaces, REST API consumption and product-oriented delivery.",
          tags: ["Node.js", "Next.js", "REST APIs"],
          highlight: "First fullstack experience in a product environment",
        },
      ];

  return (
    <section id="projects" className="relative py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/60 to-background" />
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 space-y-24">

        {/* ── PROJETOS ── */}
        <div>
          <motion.div
            className="text-center mb-12 space-y-4"
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {ptBR ? "Projetos" : "Projects"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {ptBR ? "O que eu construí" : "What I built"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {ptBR
                ? "Projetos reais, em produção, com usuários."
                : "Real projects, in production, with real users."}
            </p>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="col-span-1 md:col-span-2"
              >
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-lg shadow-primary/10 p-8">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-widest">
                          {project.type}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-muted-foreground">
                          {ptBR ? "Em produção" : "Live"}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {project.highlight}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 md:w-48 shrink-0">
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {ptBR ? "Ver projeto" : "Live site"}
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── EXPERIÊNCIA ── */}
        <div>
          <motion.div
            className="text-center mb-12 space-y-4"
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {ptBR ? "Experiência" : "Experience"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {ptBR ? "Onde trabalhei" : "Where I worked"}
            </h2>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-md shadow-primary/5 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-primary/15">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">

                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <h3 className="font-bold text-lg leading-tight">{exp.company}</h3>
                          <p className="text-primary text-sm font-medium">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {exp.highlight}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 md:px-12 backdrop-blur-2xl shadow-2xl shadow-primary/10 text-center md:text-left">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {ptBR ? "Disponível para contato" : "Open to opportunities"}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {ptBR
                    ? "Quer um backend que não trava?"
                    : "Need a backend that doesn't break?"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ptBR
                    ? "Disponível para posições full-time ou freelance. Respondo rápido."
                    : "Available for full-time roles or freelance. I reply fast."}
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Button size="lg" asChild>
                  <a href="https://www.linkedin.com/in/deilton-pedro/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/DeJunior007" target="_blank" rel="noopener noreferrer">
                    GitHub
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}