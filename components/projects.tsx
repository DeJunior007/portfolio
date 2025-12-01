"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easing },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function Projects() {
  const { t, language } = useLanguage();

  const projects =
    language === "en-US"
      ? [
          {
            title: "NG Promotora — Software Developer",
            description:
              "Laravel/PHP and TypeScript (React/Next) APIs for internal systems, with queues (Horizon), webhooks and SQL dashboards. Simulations run in background and notify via WebSocket in real time.",
            image:
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
            tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "SQL"],
            liveUrl: "mailto:deiltonp74@gmail.com",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "Central integration API with background simulations and WebSocket updates.",
          },
          {
            title: "SmartCal — Personal case",
            description:
              "LLM + vision orchestration to read photos/text and reply via WhatsApp. Uses webhooks, queues and Supabase for history.",
            image:
              "https://www.smartcal.com.br/_next/static/media/whatsapp-screenshot.df6812ab.jpg",
            tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
            liveUrl: "https://www.smartcal.com.br/",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "Vision + LLM response in seconds.",
          },
          {
            title: "Previous experience",
            description:
              "MSI Solucoes (PHP/Laravel APIs, PL/pgSQL, ERP integrations) and Assert Tech (Next.js, Node.js, REST APIs). Internships focused on incremental delivery and stability.",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
            tags: ["PHP/Laravel", "PostgreSQL", "Node.js", "Next.js", "REST APIs"],
            liveUrl: "https://www.linkedin.com/in/deilton-pedro/",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "ERP integrations, PL/pgSQL and REST API consumption.",
          },
        ]
      : [
          {
            title: "NG Promotora — Desenvolvedor de Software",
            description:
              "APIs em Laravel/PHP e TypeScript (React/Next) para sistemas internos, com filas (Horizon), webhooks e dashboards em SQL. Fluxo de simulacoes em background e WebSocket para retorno em tempo real.",
            image:
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
            tags: ["Laravel/PHP", "TypeScript", "Queues/Horizon", "WebSocket", "SQL"],
            liveUrl: "mailto:deiltonp74@gmail.com",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "API central de integracao financeira com simulacoes em background.",
          },
          {
            title: "SmartCal — Case pessoal",
            description:
              "Orquestracao de LLM + visao para ler fotos/textos e responder via WhatsApp. Uso de webhooks, filas e Supabase para historico.",
            image:
              "https://www.smartcal.com.br/_next/static/media/whatsapp-screenshot.df6812ab.jpg",
            tags: ["Next.js", "TypeScript", "LLM", "Vision AI", "Supabase", "Webhooks"],
            liveUrl: "https://www.smartcal.com.br/",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "IA de visao + LLM com resposta em segundos.",
          },
          {
            title: "Experiencias anteriores",
            description:
              "MSI Solucoes (APIs em PHP/Laravel, PL/pgSQL, integracoes ERP) e Assert Tech (Next.js, Node.js, consumo de APIs REST). Estagios com foco em entregas incrementais e estabilidade.",
            image:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
            tags: ["PHP/Laravel", "PostgreSQL", "Node.js", "Next.js", "APIs REST"],
            liveUrl: "https://www.linkedin.com/in/deilton-pedro/",
            githubUrl: "https://github.com/DeJunior007",
            highlight: "Integracoes ERP, PL/pgSQL e consumo de APIs REST.",
          },
        ];

  return (
    <section id="projects" className="relative py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/60 to-background" />
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 space-y-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("about.projects")}
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("projects.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.995 }}
            >
              <Card className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-primary/10 backdrop-blur-2xl transition-transform duration-300">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-b-none rounded-t-3xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <motion.div
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    variants={tagVariants}
                  >
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    {project.highlight}
                  </motion.div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.div
                    className="flex flex-wrap gap-2 mt-1"
                    variants={listVariants}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        variants={tagVariants}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium backdrop-blur"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex w-full flex-col gap-2 sm:flex-row">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t("projects.sourceCode")}
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.viewProject")}
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10 backdrop-blur-2xl shadow-2xl shadow-primary/10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Para recrutadores
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Construo produtos completos, com UI polida e entregas rapidas.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Especialista em full-stack com foco em Next.js, integracoes e IA aplicada (SmartCal). Gosto de assumir ownership de ponta a ponta, da arquitetura ao refinamento visual, para acelerar time-to-hire e diminuir risco de entrega.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js + TypeScript", "Produtos AI-first", "UX e microinteracoes", "Disponivel para contato rapido"].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-foreground backdrop-blur"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/deilton-pedro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conversar no LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/DeJunior007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver portfolio no GitHub
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

