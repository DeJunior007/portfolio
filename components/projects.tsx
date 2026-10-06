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

type FeaturedProject = {
  title: string;
  type: string;
  status?: string;
  description: string;
  tags: string[];
  highlight: string;
  liveUrl?: string;
  githubUrl?: string;
};

type OtherProject = {
  title: string;
  description: string;
  tags: string[];
  icon?: React.ReactNode;
  url?: string;
  liveUrl?: string;
};

export function Projects() {
  const { t, language } = useLanguage();
  const ptBR = language === "pt-BR";

  const projects: FeaturedProject[] = ptBR
    ? [
        {
          title: "Ouri Joias",
          type: "Sistema de gestão",
          description:
            "Sistema de gestão para fábrica de joias: clientes, pedidos, controle de ouro, fechamento mensal, comissões e rankings. Arquitetura em dois serviços (auth e API), permissões granulares com trilha de auditoria, Redis, filas com RabbitMQ e componentes documentados em Storybook.",
          tags: ["NestJS", "TypeScript", "RabbitMQ", "Redis", "PostgreSQL", "Storybook"],
          highlight: "Permissões granulares com trilha de auditoria completa",
        },
        {
          title: "MultiVideos",
          type: "Case pessoal",
          status: "Uso pessoal em produção",
          description:
            "Transcrição, legendagem e publicação de vídeos em várias Páginas do Facebook, 100% self-hosted (Whisper + Ollama num modelo local), sem depender de API paga de LLM. Fila de mensageria com RabbitMQ e workers assíncronos para transcodificação e publicação.",
          tags: ["Laravel", "RabbitMQ", "Ollama", "Whisper", "Redis", "Next.js", "Docker"],
          highlight: "IA local com Ollama: zero custo de API por vídeo processado",
        },
        {
          title: "SmartCal",
          type: "Case pessoal",
          description:
            "Atendimento via WhatsApp automatizado com LLM e visão computacional: lê fotos e textos e responde em segundos. Backend com webhooks, filas assíncronas e Supabase para histórico de conversas.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "Resposta de IA em segundos direto no WhatsApp",
          githubUrl: "https://github.com/DeJunior007",
        },
      ]
    : [
        {
          title: "Ouri Joias",
          type: "Management system",
          description:
            "Management system for a jewelry factory: customers, orders, gold control, monthly closing, commissions and rankings. Two-service architecture (auth and API), granular permissions with an audit trail, Redis, RabbitMQ queues and components documented in Storybook.",
          tags: ["NestJS", "TypeScript", "RabbitMQ", "Redis", "PostgreSQL", "Storybook"],
          highlight: "Granular permissions with a full audit trail",
        },
        {
          title: "MultiVideos",
          type: "Personal project",
          status: "Personal use, in production",
          description:
            "Transcription, captioning and publishing of videos across multiple Facebook Pages, fully self-hosted (Whisper + Ollama on a local model), no paid LLM API involved. Message queue with RabbitMQ and async workers for transcoding and publishing.",
          tags: ["Laravel", "RabbitMQ", "Ollama", "Whisper", "Redis", "Next.js", "Docker"],
          highlight: "Local AI with Ollama: zero API cost per video processed",
        },
        {
          title: "SmartCal",
          type: "Personal project",
          description:
            "WhatsApp support automated with an LLM and computer vision: reads photos and text and replies in seconds. Backend with webhooks, async queues and Supabase for conversation history.",
          tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
          highlight: "AI response in seconds straight to WhatsApp",
          githubUrl: "https://github.com/DeJunior007",
        },
      ];

  const otherProjects: OtherProject[] = ptBR
    ? [
        {
          title: "Performance Tracker",
          description:
            "PWA offline-first para registro de performance: dados no IndexedDB (Dexie), Service Workers e fila de sincronização que resolve conflitos por updatedAt + clientId. Backend Express + MongoDB com schemas Zod compartilhados.",
          tags: ["Next.js", "PWA", "IndexedDB", "Express", "MongoDB", "Zod"],
          url: "https://github.com/DeJunior007/perfomance-tracker",
        },
        {
          title: "Email Classifier",
          description:
            "Triagem de emails com IA: classifica como produtivo ou improdutivo e sugere resposta curta. Aceita texto, .txt ou .pdf e mostra tokens consumidos e tempo de resposta.",
          tags: ["Python", "FastAPI", "OpenAI GPT-4o mini"],
          url: "https://github.com/DeJunior007/Email-Classifier",
        },
        {
          title: "RPG Anime Modpack",
          description:
            "Página de download do modpack do meu servidor (Forge, 76 mods) com wiki interativa dos mods (receitas, tutoriais, itens) servida do Supabase, e instalador em Python.",
          tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase", "Python"],
          url: "https://github.com/DeJunior007/aotmine",
        },
        {
          title: "ScraperR",
          description:
            "Ferramenta pessoal de busca de vagas: scraping de LinkedIn/Indeed/Gupy, geração de material de candidatura com IA e dashboard próprio. Arquitetura poliglota em 4 repositórios com RabbitMQ e Redis.",
          tags: ["Laravel", "Python", "Next.js", "RabbitMQ"],
        },
        {
          title: "Wedding Platform",
          description:
            "Plataforma de casamento multi-tenant: RSVP, lista de presentes com pagamento via Mercado Pago e atualização em tempo real por WebSocket num serviço à parte na VPS.",
          tags: ["Next.js", "Supabase", "WebSocket", "Mercado Pago"],
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
          title: "Performance Tracker",
          description:
            "Offline-first PWA for logging performance data: IndexedDB storage (Dexie), Service Workers and a sync queue that resolves conflicts via updatedAt + clientId. Express + MongoDB backend with shared Zod schemas.",
          tags: ["Next.js", "PWA", "IndexedDB", "Express", "MongoDB", "Zod"],
          url: "https://github.com/DeJunior007/perfomance-tracker",
        },
        {
          title: "Email Classifier",
          description:
            "AI email triage: classifies emails as productive or unproductive and suggests a short reply. Accepts pasted text, .txt or .pdf and shows tokens used and response time.",
          tags: ["Python", "FastAPI", "OpenAI GPT-4o mini"],
          url: "https://github.com/DeJunior007/Email-Classifier",
        },
        {
          title: "RPG Anime Modpack",
          description:
            "Download page for my server's modpack (Forge, 76 mods) with an interactive mod wiki (recipes, tutorials, items) served from Supabase, plus a Python installer.",
          tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase", "Python"],
          url: "https://github.com/DeJunior007/aotmine",
        },
        {
          title: "ScraperR",
          description:
            "Personal job-hunting tool: scrapes LinkedIn/Indeed/Gupy, generates AI application material and a custom dashboard. Polyglot architecture across 4 repos with RabbitMQ and Redis.",
          tags: ["Laravel", "Python", "Next.js", "RabbitMQ"],
        },
        {
          title: "Wedding Platform",
          description:
            "Multi-tenant wedding platform: RSVP, gift registry with Mercado Pago payments and real-time WebSocket updates via a standalone VPS service.",
          tags: ["Next.js", "Supabase", "WebSocket", "Mercado Pago"],
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
            "Tornei o processamento de imagens em Python 6,9× mais rápido com paralelismo e reduzi em ~70% o tempo de resposta das automações no n8n, cortando também consumo de tokens de LLM. Desenvolvi e-commerce em microsserviços com mensageria, idempotência e concorrência via Redis, redesenhei o upload em lote para eliminar estouros de memória, implementei Keycloak/OIDC e pagamentos via Mercado Pago. Entreguei uma plataforma de sorteios com validação automática de notas na SEFAZ e um CRM com contratos, financeiro e entrega de arquivos. Testes E2E com Jest e Playwright e CI/CD com Docker, Kubernetes e ArgoCD.",
          tags: ["NestJS", "TypeScript", "React", "Next.js", "Python", "Redis", "Keycloak", "Kubernetes", "ArgoCD"],
          highlight: "Processamento de imagens 6,9× mais rápido e automações ~70% mais rápidas",
        },
        {
          company: "NG Promotora",
          role: "Desenvolvedor Full Stack",
          period: "Jan 2025 – Dez 2025",
          description:
            "Identifiquei o gargalo das simulações: consultas a 8 bancos rodando de forma síncrona e sequencial. Projetei uma API central unificada com filas paralelas (Laravel Queues + Horizon) e resultados em tempo real via WebSocket. Automatizei o atendimento no WhatsApp com n8n e Python (qualificação, simulação e proposta), com OpenAI Vision para extrair dados de documentos. Dashboards analíticos em SQL e telas em TypeScript e Next.js.",
          tags: ["Laravel/PHP", "Horizon", "WebSocket", "Next.js", "TypeScript", "n8n", "Python", "OpenAI Vision"],
          highlight: "Simulações caíram de 5–16 min para até ~2 min",
        },
        {
          company: "NG Promotora",
          role: "Desenvolvedor Full Stack (Estágio)",
          period: "Set 2024 – Dez 2024",
          description:
            "Automatizei com RPA a geração de contratos em um sistema bancário sem API pública. Desenvolvi funcionalidades do sistema interno em Laravel e Vue.js + Vuetify e mantive integrações com APIs REST externas.",
          tags: ["RPA", "Laravel", "Vue.js", "Vuetify", "REST APIs"],
          highlight: "15–20 min de trabalho manual eliminados por contrato, para 20 operadoras",
        },
        {
          company: "MSI Soluções",
          role: "Desenvolvedor Back-End (Estágio)",
          period: "Mar 2024 – Set 2024",
          description:
            "Integrei diversas plataformas externas ao ERP via APIs em Laravel/PHP, com fluxos ponta a ponta e consistência dos dados. Rotinas em PL/pgSQL no PostgreSQL para regras de negócio críticas e manutenção do app Flutter para logística em campo.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP", "Flutter"],
          highlight: "Integrações ERP ponta a ponta com consistência de dados",
        },
        {
          company: "Assert Tech",
          role: "Desenvolvedor Front-End (Estágio)",
          period: "Fev 2023 – Ago 2023",
          description:
            "Sites e landing pages em Next.js (SSR/SSG) focados em SEO e conversão, com envio automático de leads para CRMs.",
          tags: ["Next.js", "SSR/SSG", "SEO", "REST APIs", "Tailwind CSS"],
          highlight: "Mais de 15 sites e landing pages entregues",
        },
        {
          company: "Compass.uol",
          role: "Desenvolvedor Front-End (Estágio)",
          period: "Nov 2022 – Abr 2023 · Remoto",
          description:
            "Programa de estágio em front-end no contexto AWS: interfaces em React (Hooks, Redux) e TypeScript com Styled Components e AWS Amplify, em time ágil (Scrum).",
          tags: ["React", "Redux", "TypeScript", "Styled Components", "AWS Amplify", "Scrum"],
          highlight: "Front-end React no ecossistema AWS",
        },
      ]
    : [
        {
          company: "Sumé Tecnologia",
          role: "Full Stack Developer",
          period: "Mar 2026 – present",
          description:
            "Made Python image processing 6.9× faster through parallelism and cut n8n automation response time by ~70%, also reducing LLM token usage. Built a microservices e-commerce with messaging, idempotency and Redis-based concurrency control, redesigned batch upload to eliminate memory overflows, and implemented Keycloak/OIDC plus Mercado Pago payments. Shipped a raffle platform with automatic invoice validation against SEFAZ and a CRM with contracts, finance and file delivery. E2E tests with Jest and Playwright and CI/CD with Docker, Kubernetes and ArgoCD.",
          tags: ["NestJS", "TypeScript", "React", "Next.js", "Python", "Redis", "Keycloak", "Kubernetes", "ArgoCD"],
          highlight: "6.9× faster image processing and ~70% faster automations",
        },
        {
          company: "NG Promotora",
          role: "Full Stack Developer",
          period: "Jan 2025 – Dec 2025",
          description:
            "Found the simulation bottleneck: queries to 8 banks running synchronously and sequentially. Designed a unified central API with parallel queues (Laravel Queues + Horizon) and real-time results via WebSocket. Automated WhatsApp support with n8n and Python (qualification, simulation and proposal), using OpenAI Vision for document data extraction. Analytical SQL dashboards and full screens in TypeScript and Next.js.",
          tags: ["Laravel/PHP", "Horizon", "WebSocket", "Next.js", "TypeScript", "n8n", "Python", "OpenAI Vision"],
          highlight: "Simulations dropped from 5–16 min to ~2 min",
        },
        {
          company: "NG Promotora",
          role: "Full Stack Developer (Intern)",
          period: "Sep 2024 – Dec 2024",
          description:
            "Automated contract generation with RPA on a banking system with no public API. Built features for the internal system in Laravel and Vue.js + Vuetify and maintained integrations with external REST APIs.",
          tags: ["RPA", "Laravel", "Vue.js", "Vuetify", "REST APIs"],
          highlight: "15–20 min of manual work removed per contract, for 20 operators",
        },
        {
          company: "MSI Soluções",
          role: "Backend Developer (Intern)",
          period: "Mar 2024 – Sep 2024",
          description:
            "Integrated several external platforms into the ERP through Laravel/PHP APIs, with end-to-end flows and data consistency. PL/pgSQL routines in PostgreSQL for critical business rules and maintenance of the Flutter app for field logistics.",
          tags: ["PHP/Laravel", "PostgreSQL", "PL/pgSQL", "ERP", "Flutter"],
          highlight: "End-to-end ERP integrations with data consistency",
        },
        {
          company: "Assert Tech",
          role: "Frontend Developer (Intern)",
          period: "Feb 2023 – Aug 2023",
          description:
            "Websites and landing pages in Next.js (SSR/SSG) focused on SEO and conversion, with automatic lead delivery to CRMs.",
          tags: ["Next.js", "SSR/SSG", "SEO", "REST APIs", "Tailwind CSS"],
          highlight: "15+ websites and landing pages shipped",
        },
        {
          company: "Compass.uol",
          role: "Frontend Developer (Intern)",
          period: "Nov 2022 – Apr 2023 · Remote",
          description:
            "Front-end internship program in an AWS context: React (Hooks, Redux) and TypeScript interfaces with Styled Components and AWS Amplify, in an agile Scrum team.",
          tags: ["React", "Redux", "TypeScript", "Styled Components", "AWS Amplify", "Scrum"],
          highlight: "React front-end in the AWS ecosystem",
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
                        {project.status && (
                          <>
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-muted-foreground">
                              {project.status}
                            </span>
                          </>
                        )}
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
                    <div className="flex shrink-0 items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${project.title} (site)`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${project.title} (GitHub)`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
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