"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ExternalLink, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const easing = [0.16, 1, 0.3, 1];

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: easing, delay } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: easing, delay } },
});

export function Hero() {
  const { t, language } = useLanguage();

  const copy = {
    "pt-BR": {
      role: "Engenheiro de Software Full Stack",
      description:
        "Do banco de dados ao componente React: APIs REST, filas assíncronas, WebSocket em tempo real e automações com IA, do consumo de LLMs em produção a modelos locais com Ollama.",
      result: "Sistemas que escalam. Times que entregam mais rápido.",
      pills: [
        "React · Next.js · TypeScript",
        "NestJS · Laravel · Node.js",
        "LLMs · n8n · Ollama",
        "Disponível full-time",
      ],
      casesCta: "Ver projetos",
      badge: "Full Stack",
      available: "Disponível para contratação",
    },
    "en-US": {
      role: "Full Stack Software Engineer",
      description:
        "From the database to the React component: REST APIs, async queues, real-time WebSocket and AI-powered automations, from LLMs in production to local models with Ollama.",
      result: "Systems that scale. Teams that ship faster.",
      pills: [
        "React · Next.js · TypeScript",
        "NestJS · Laravel · Node.js",
        "LLMs · n8n · Ollama",
        "Open to full-time",
      ],
      casesCta: "See projects",
      badge: "Full Stack",
      available: "Open to hire",
    },
  } as const;

  const current = copy[language];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

      <div className="mx-auto w-full max-w-content px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-8">

            <motion.div
              className="flex items-center gap-3 flex-wrap"
              variants={fadeLeft(0)}
              initial="hidden"
              animate="show"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {current.badge}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {current.available}
              </div>
            </motion.div>

            <motion.div
              className="space-y-3"
              variants={fadeLeft(0.08)}
              initial="hidden"
              animate="show"
            >
              <p className="text-base md:text-lg font-medium text-primary">
                {t("hero.greeting")}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                Deilton
                <br />
                <span className="text-primary">Pedro</span> Junior
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                {current.role}
              </h2>
            </motion.div>

            <motion.div
              className="space-y-3"
              variants={fadeLeft(0.16)}
              initial="hidden"
              animate="show"
            >
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {current.description}
              </p>
              <p className="text-base font-semibold text-foreground">
                {current.result}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              variants={fadeLeft(0.22)}
              initial="hidden"
              animate="show"
            >
              {current.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeLeft(0.28)}
              initial="hidden"
              animate="show"
            >
              <Button size="lg" className="h-12 px-6" asChild>
                <a href="#contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                <a href="#projects">{current.casesCta}</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-6 border border-white/10 bg-white/5 backdrop-blur"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/deilton-pedro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            variants={fadeRight(0.1)}
            initial="hidden"
            animate="show"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 via-primary/5 to-secondary/20 blur-2xl" />

              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10" />
                <Image
                  width={320}
                  height={320}
                  src="https://i.ibb.co/4Z3B3tGN/Deilton.jpg"
                  alt="Deilton Pedro Junior"
                  className="absolute inset-3 rounded-full object-cover border-2 border-white/10 shadow-2xl"
                  priority
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-2 md:-right-10 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.45 }}
              >
                <Terminal className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold leading-none">NestJS · Laravel</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">React · Next.js</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-2 md:-left-10 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.85, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.5 }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <p className="text-xs font-semibold text-emerald-400">
                  {current.available}
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}