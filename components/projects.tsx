"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Briefcase, Calendar, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easing } },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easing } },
};

export function Projects() {
  const { t, language } = useLanguage();
  const ptBR = language === "pt-BR";

  const projects = ptBR
    ? [
        {
          title: "SmartCal",
          type: "Case pessoal",
          status: "Em produção",
          description:
            "Orquestração de LLM + visão computacional para ler fotos e textos e responder via WhatsApp. Backend com webhooks, filas assíncronas e Supabase para histórico de conversas.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "Resposta de IA em segundos direto no WhatsApp",
          liveUrl: "https://www.smartcal.com.br/",
          githubUrl: "https://github.com/DeJunior007",
        },
        {
          title: "MultiVideos",
          type: "Case pessoal",
          status: "Uso pessoal em produção",
          description:
            "Automatiza a publicação de vídeos em várias Páginas do Facebook: upload, transcrição e geração de legenda por IA rodando 100% self-hosted (Whisper + Ollama num modelo LFM2.5 local), sem depender de API paga de LLM. Fila de mensageria com RabbitMQ e workers assíncronos para transcodificação e publicação.",
          tags: ["Laravel", "RabbitMQ", "Ollama", "Whisper", "Redis", "Next.js", "Docker"],
          highlight: "IA local com Ollama: zero custo de API por vídeo processado",
        },
      ]
    : [
        {
          title: "SmartCal",
          type: "Personal project",
          status: "Live",
          description:
            "LLM + vision orchestration to read photos and text, replying via WhatsApp. Backend with webhooks, async queues and Supabase for conversation history.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "AI response in seconds straight to WhatsApp",
          liveUrl: "https://www.smartcal.com.br/",
          githubUrl: "https://github.com/DeJunior007",
        },
        {
          title: "MultiVideos",
          type: "Personal project",
          status: "Personal use, in production",
          description:
            "Automates publishing videos across multiple Facebook Pages: upload, transcription and AI caption generation running fully self-hosted (Whisper + Ollama on a local LFM2.5 model), no paid LLM API involved. Message queue with RabbitMQ and async workers for transcoding and publishing.",
          tags: ["Laravel", "RabbitMQ", "Ollama", "Whisper", "Redis", "Next.js", "Docker"],
          highlight: "Local AI with Ollama: zero API cost per video processed",
        },
      ];

  const otherProjects = ptBR
    ? [
        {
          title: "ScraperR",
          description:
            "Ferramenta pessoal de busca de vagas: scraping de LinkedIn/Indeed/Gupy, geração de material de candidatura com IA e dashboard próprio. Arquitetura poliglota em 4 repositórios com RabbitMQ e Redis.",
          tags: ["Laravel", "Python", "Next.js", "RabbitMQ"],
          url: "https://github.com/DeJunior007/scraperr",
        },
        {
          title: "Wedding Platform",
          description:
            "Plataforma de casamento multi-tenant: RSVP, lista de presentes com pagamento via Mercado Pago e atualização em tempo real por WebSocket num serviço à parte na VPS.",
          tags: ["Next.js", "Supabase", "WebSocket", "Mercado Pago"],
          url: "https://github.com/DeJunior007/wedding-platform",
        },
        {
          title: "Fidelização & sorteio para varejo",
          description:
            "Freelance: cliente sobe a foto da nota fiscal, leitura de QR Code e validação automática via scraping geram cupons, com tela pública de sorteio ao vivo.",
          tags: ["NestJS", "Prisma", "Python"],
        },
        {
          title: "SaaS para estúdios de fotografia",
          description:
            "Freelance: plataforma multi-tenant com portal do cliente, autenticação via Keycloak e fluxo completo de contrato, seleção e entrega de fotos.",
          tags: ["NestJS", "Prisma", "Keycloak"],
        },
        {
          title: "Servidores de jogos (hobby)",
          description:
            "Hospedagem e manutenção de servidores de jogos em VPS, com Portainer pra gestão dos containers e um bot de Telegram avisando uso e status em tempo real.",
          tags: ["Docker", "Portainer", "Telegram Bot API"],
          icon: <Gamepad2 className="h-4 w-4" />,
        },
      ]
    : [
        {
          title: "ScraperR",
          description:
            "Personal job-hunting tool: scrapes LinkedIn/Indeed/Gupy, generates AI application material and a custom dashboard. Polyglot architecture across 4 repos with RabbitMQ and Redis.",
          tags: ["Laravel", "Python", "Next.js", "RabbitMQ"],
          url: "https://github.com/DeJunior007/scraperr",
        },
        {
          title: "Wedding Platform",
          description:
            "Multi-tenant wedding platform: RSVP, gift registry with Mercado Pago payments and real-time WebSocket updates via a standalone VPS service.",
          tags: ["Next.js", "Supabase", "WebSocket", "Mercado Pago"],
          url: "https://github.com/DeJunior007/wedding-platform",
        },
        {
          title: "Retail loyalty & raffle platform",
          description:
            "Freelance: customers upload a receipt photo, QR Code parsing and automated scraping validate it and generate coupons, with a public live-raffle screen.",
          tags: ["NestJS", "Prisma", "Python"],
        },
        {
          title: "SaaS for photography studios",
          description:
            "Freelance: multi-tenant platform with a client portal, Keycloak authentication and a full contract, selection and delivery flow.",
          tags: ["NestJS", "Prisma", "Keycloak"],
        },
        {
          title: "Game servers (hobby)",
          description:
            "Hosting and maintaining game servers on a VPS, using Portainer to manage containers and a Telegram bot reporting usage and status in real time.",
          tags: ["Docker", "Portainer", "Telegram Bot API"],
          icon: <Gamepad2 className="h-4 w-4" />,
        },
      ];

  const experiences = ptBR
    ? [
        {
          company: "Sumé Tecnologia",
          role: "Desenvolvedor Full Stack",
          period: "Mar 2026 – atual",
          description:
            "Atuo em vários casos de uso: unifiquei APIs legadas em NestJS + Prisma (PostgreSQL) e otimizei automações de atendimento com LLMs, reduzindo o tempo de resposta em ~70%. Atualmente construindo um e-commerce em microsserviços, com integrações de checkout, mensageria entre serviços, idempotência e Redis para concorrência, com deploy via Kubernetes e GitOps (ArgoCD).",
          tags: ["NestJS", "TypeScript", "Prisma", "Redis", "Microsserviços", "Kubernetes", "LLMs"],
          highlight: "Automações com IA que cortaram ~70% do tempo de resposta",
        },
        {
          company: "NG Promotora",
          role: "Desenvolvedor Full Stack (Estágio → Pleno)",
          period: "Set 2024 – Dez 2025",
          description:
            "Comecei como estagiário e fui promovido a pleno. Projetei API central de integração com instituições financeiras, reestruturei simulações com Laravel Queues + Horizon e implementei WebSocket para resultados em tempo real. Automatizei atendimento no WhatsApp via n8n + Python, com OpenAI Vision para extrair dados de documentos.",
          tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "n8n", "OpenAI Vision"],
          highlight: "API central de integração financeira com WebSocket em produção",
        },
        {
          company: "MSI Soluções",
          role: "Desenvolvedor Back-End",
          period: "Mar 2024 – Set 2024",
          description:
            "APIs em PHP/Laravel para comunicação com ERP, rotinas em PL/pgSQL para regras de negócio críticas e manutenção do app mobile em Flutter para operações logísticas.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP", "Flutter"],
          highlight: "Integrações ERP com banco relacional complexo",
        },
        {
          company: "Assert Tech",
          role: "Desenvolvedor Front-End",
          period: "Fev 2023 – Ago 2023",
          description:
            "Apps em Next.js (SSR/SSG) focadas em SEO e conversão. Consumo de APIs REST para envio de leads a CRMs, com integrações documentadas em Postman.",
          tags: ["Next.js", "REST APIs", "Tailwind CSS", "Postman"],
          highlight: "Apps Next.js otimizadas para SEO e conversão",
        },
        {
          company: "Compass.uol",
          role: "Desenvolvedor Front-End",
          period: "Nov 2022 – Abr 2023 · Remoto",
          description:
            "Interfaces responsivas com React e TypeScript em um design system corporativo, com Styled Components. Metodologia Scrum com entregas contínuas e primeiro contato com AWS em projetos de grande porte.",
          tags: ["React", "TypeScript", "Styled Components", "Scrum", "AWS"],
          highlight: "Design system corporativo em projeto de grande porte",
        },
      ]
    : [
        {
          company: "Sumé Tecnologia",
          role: "Full Stack Developer",
          period: "Mar 2026 – present",
          description:
            "Working across several use cases: unified legacy APIs with NestJS + Prisma (PostgreSQL) and optimized support automations with LLMs, cutting response time by ~70%. Currently building an e-commerce in a microservices architecture, with checkout integrations, inter-service messaging, idempotency and Redis for concurrency, deployed via Kubernetes and GitOps (ArgoCD).",
          tags: ["NestJS", "TypeScript", "Prisma", "Redis", "Microservices", "Kubernetes", "LLMs"],
          highlight: "AI automations that cut response time by ~70%",
        },
        {
          company: "NG Promotora",
          role: "Full Stack Developer (Intern → Mid-level)",
          period: "Sep 2024 – Dec 2025",
          description:
            "Started as an intern and got promoted to mid-level. Designed a central integration API connecting financial institutions, rebuilt simulations with Laravel Queues + Horizon and implemented WebSocket for real-time results. Automated WhatsApp support via n8n + Python, with OpenAI Vision for document data extraction.",
          tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "n8n", "OpenAI Vision"],
          highlight: "Central financial integration API with WebSocket in production",
        },
        {
          company: "MSI Soluções",
          role: "Backend Developer",
          period: "Mar 2024 – Sep 2024",
          description:
            "PHP/Laravel APIs for ERP communication, PL/pgSQL routines for critical business rules, and maintenance of the Flutter mobile app for logistics operations.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP", "Flutter"],
          highlight: "ERP integrations with complex relational database",
        },
        {
          company: "Assert Tech",
          role: "Frontend Developer",
          period: "Feb 2023 – Aug 2023",
          description:
            "Next.js apps (SSR/SSG) focused on SEO and conversion. REST API consumption to send leads to CRMs, with integrations documented in Postman.",
          tags: ["Next.js", "REST APIs", "Tailwind CSS", "Postman"],
          highlight: "Next.js apps optimized for SEO and conversion",
        },
        {
          company: "Compass.uol",
          role: "Frontend Developer",
          period: "Nov 2022 – Apr 2023 · Remote",
          description:
            "Responsive interfaces with React and TypeScript in a corporate design system, using Styled Components. Scrum methodology with continuous delivery and first hands-on experience with AWS on large-scale projects.",
          tags: ["React", "TypeScript", "Styled Components", "Scrum", "AWS"],
          highlight: "Corporate design system on a large-scale project",
        },
      ];

  return (
    <section id="projects" className="relative py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/60 to-background" />
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="mx-auto w-full max-w-content px-4 space-y-24">

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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                <div className="glow-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-lg shadow-primary/10 p-8">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1 min-w-0 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-widest">
                          {project.type}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-muted-foreground">
                          {project.status}
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

                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex flex-col gap-3 md:w-48 shrink-0">
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {ptBR ? "Ver projeto" : "Live site"}
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {otherProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <div className="glow-card group h-full flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      {project.icon}
                      {project.title}
                    </h4>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                        aria-label={project.title}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
                <div className="glow-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-md shadow-primary/5 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-primary/15">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">

                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div className="min-w-0">
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

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="glow-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 md:px-12 backdrop-blur-2xl shadow-2xl shadow-primary/10 text-center md:text-left">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {ptBR ? "Disponível para contato" : "Open to opportunities"}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {ptBR
                    ? "Quer um sistema full stack que não trava?"
                    : "Need a full stack system that doesn't break?"}
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