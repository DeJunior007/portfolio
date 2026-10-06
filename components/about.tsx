"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Code, Briefcase, Award } from "lucide-react";

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
            "I work with microservices architecture, async processing and AI automation: TypeScript, React and Next.js on the front end; NestJS, Laravel and Node.js on the back end, with RabbitMQ messaging, Redis and deploys on Docker and Kubernetes. Before picking a technology, I find the bottleneck, and I use LLMs via API and local models (Ollama, Whisper) when they actually solve the problem.",
          case:
            "Most recent cases: at my current job I made Python image processing 6.9× faster with parallelism and cut n8n automation response time by ~70%. Before that, at NG Promotora, I took credit simulations from 5–16 min down to ~2 min with parallel queues and WebSocket.",
          credentials: [
            "AWS Certified AI Practitioner (AIF-C01)",
            "Associate in Information Technology · UniCesumar (expected 02/2027)",
            "Portuguese (native) · English (full professional proficiency)",
          ],
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
            "Trabalho com arquitetura de microsserviços, processamento assíncrono e automação com IA: TypeScript, React e Next.js no front-end; NestJS, Laravel e Node.js no back-end, com mensageria (RabbitMQ), Redis e deploy em Docker e Kubernetes. Antes de escolher a tecnologia, encontro o gargalo, e uso LLMs via API e modelos locais (Ollama, Whisper) quando eles resolvem o problema.",
          case:
            "Cases mais recentes: no meu emprego atual, tornei o processamento de imagens em Python 6,9× mais rápido com paralelismo e reduzi em ~70% o tempo de resposta das automações no n8n. Antes disso, na NG Promotora, levei simulações de crédito de 5–16 min para ~2 min com filas paralelas e WebSocket.",
          credentials: [
            "AWS Certified AI Practitioner (AIF-C01)",
            "CST em Tecnologia da Informação · UniCesumar (previsão 02/2027)",
            "Português (nativo) · Inglês (proficiência profissional completa)",
          ],
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

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glow-card min-w-0 p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/5 text-center backdrop-blur-2xl shadow-lg shadow-primary/10 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 break-words">{stat.value}</h3>
                    <p className="text-muted-foreground break-words">{stat.label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2">
                {copy.credentials.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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