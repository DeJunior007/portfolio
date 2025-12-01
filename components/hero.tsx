"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { t, language } = useLanguage();

  const copy = {
    "pt-BR": {
      role: "Desenvolvedor de Software (Fullstack)",
      description:
        "Entrego APIs e front alinhados. TypeScript/Node.js e Laravel/PHP no back; React/Next no front; integracoes com webhooks/filas e WebSocket. Case: API financeira com simulacoes em background e retorno em tempo real.",
      pills: [
        "Fullstack (React/Next + Node/PHP)",
        "APIs, Webhooks, WebSocket",
        "Filas (Horizon) e automacoes",
        "Disponivel full-time",
      ],
      casesCta: "Ver projetos",
      badge: "Candidato fullstack",
    },
    "en-US": {
      role: "Software Engineer (Fullstack)",
      description:
        "Aligned APIs and frontend. TypeScript/Node.js and Laravel/PHP on backend; React/Next on frontend; webhooks/queues and WebSocket. Case: financial integration API with background simulations and real-time updates.",
      pills: [
        "Fullstack (React/Next + Node/PHP)",
        "APIs, Webhooks, WebSocket",
        "Queues (Horizon) and automation",
        "Open to full-time",
      ],
      casesCta: "See projects",
      badge: "Fullstack candidate",
    },
  } as const;

  const current = copy[language];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute -top-24 right-6 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-xl shadow-primary/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="flex items-center gap-2 mb-4 relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="h-4 w-4" />
                  {current.badge}
                </div>
                <span className="hidden md:inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-2 relative">
                {t("hero.greeting")}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                Deilton Pedro Junior
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 relative">
                {current.role}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl relative">
                {current.description}
              </p>
              <div className="flex flex-wrap gap-4 relative">
                <Button size="lg" asChild>
                  <a href="#contact">
                    {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">{current.casesCta}</a>
                </Button>
                <Button size="lg" variant="ghost" asChild className="backdrop-blur border border-white/10 bg-white/5">
                  <a
                    href="https://www.linkedin.com/in/deilton-pedro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground relative">
                {current.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/10" />
              <Image
                width={300}
                height={300}
                src="https://i.ibb.co/4Z3B3tGN/Deilton.jpg" // Caminho relativo a pasta public
                alt="Deilton Pedro Junior"
                className="absolute inset-4 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}
