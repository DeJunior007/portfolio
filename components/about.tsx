"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Code, Briefcase, Users } from "lucide-react";

export function About() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      value: "3+ anos",
      label: language === "en-US" ? "Full stack & APIs" : "Full stack e APIs",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: "10+ entregas",
      label: language === "en-US" ? "SaaS & integrations" : "SaaS e integrações",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "Squads",
      label: language === "en-US" ? "Prod/Design/QA" : "Prod/Design/QA",
    },
  ];

  const copy =
    language === "en-US"
      ? {
          badge: "About me",
          title: "Who I am",
          intro:
            "I'm a full stack software engineer who builds the infrastructure that keeps products running, and delivers clean frontends so I don't create bottlenecks for other teams.",
          summaryTitle: "My background",
          summary:
            "I've spent the last few years building APIs, async pipelines and real-time systems with NestJS, Laravel/PHP and TypeScript/Node.js, plus AI-powered automations, from consuming LLM APIs to running local models with Ollama. I care deeply about system reliability: proper error handling, observability, predictable deploys and well-documented contracts.",
          case:
            "Most recent case: at my current job I optimized AI-driven support automations, cutting response time by ~70%, and built async workers to handle high-volume video uploads without blocking the main app flow.",
          helpTitle: "What you get when you hire me",
          helpBullets: [
            "APIs that are consistent, documented and easy to consume",
            "Async flows (queues, workers) that don't block your UX",
            "Real-time features via WebSocket done right",
            "AI automations done right, from LLM APIs to local models with Ollama",
            "A dev who talks to product and design, not just other devs",
          ],
        }
      : {
          badge: "Sobre mim",
          title: "Quem eu sou",
          intro:
            "Sou engenheiro de software full stack. Construo a infraestrutura que sustenta o produto e entrego interfaces funcionais para não criar gargalo no time.",
          summaryTitle: "Minha trajetória",
          summary:
            "Nos últimos anos trabalhei com APIs, pipelines assíncronos e sistemas em tempo real usando NestJS, Laravel/PHP e TypeScript/Node.js, além de automações com IA, do consumo de APIs de LLM a modelos locais com Ollama. Me importo com confiabilidade: tratamento de erros, observabilidade, deploy previsível e contratos bem definidos.",
          case:
            "Case mais recente: no meu emprego atual, otimizei automações de atendimento com IA, reduzindo o tempo de resposta em ~70%, e construí workers assíncronos para upload de vídeos em grande volume sem travar o fluxo principal da aplicação.",
          helpTitle: "O que você ganha ao me contratar",
          helpBullets: [
            "APIs consistentes, documentadas e fáceis de consumir",
            "Fluxos assíncronos (filas, workers) que não bloqueiam o UX",
            "WebSocket feito do jeito certo para features em tempo real",
            "Automações de IA feitas direito, de APIs de LLM a modelos locais com Ollama",
            "Um dev que fala com produto e design, não só com outros devs",
          ],
        };

  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="mx-auto w-full max-w-content px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {copy.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">{copy.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{copy.intro}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80"
                  alt="Deilton working"
                  className="relative w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{copy.summaryTitle}</h3>
                <p className="text-muted-foreground leading-relaxed">{copy.summary}</p>
                <p className="text-muted-foreground leading-relaxed mt-3">{copy.case}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glow-card p-6 rounded-2xl border border-white/10 bg-white/5 text-center backdrop-blur-2xl shadow-lg shadow-primary/10 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="glow-card mt-2 rounded-2xl border border-primary/15 bg-primary/10 p-6 backdrop-blur-2xl shadow-lg shadow-primary/10">
                <h4 className="text-xl font-semibold mb-3">{copy.helpTitle}</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {copy.helpBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}