"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Server, Database, Wrench, Layout, Bot } from "lucide-react";

const easing = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing, delay } },
});

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export function Skills() {
  const { language } = useLanguage();
  const ptBR = language === "pt-BR";

  const categories = [
    {
      icon: <Server className="h-5 w-5 text-primary" />,
      title: ptBR ? "Back-end" : "Backend",
      color: "from-primary/20 to-primary/5",
      tags: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "PHP",
        "Laravel",
        "REST APIs",
        "GraphQL",
        "WebSocket",
        "Queues / Horizon",
        "RabbitMQ",
        "Webhooks",
        "Python",
        "Jest",
      ],
    },
    {
      icon: <Database className="h-5 w-5 text-primary" />,
      title: ptBR ? "Dados & integração" : "Data & integration",
      color: "from-secondary/20 to-secondary/5",
      tags: [
        "PostgreSQL",
        "MySQL",
        "PL/pgSQL",
        "Prisma ORM",
        "Redis",
        "MongoDB",
        "Supabase",
        "Schema design",
        "Migrations",
      ],
    },
    {
      icon: <Layout className="h-5 w-5 text-primary" />,
      title: "Front-end",
      color: "from-primary/15 to-secondary/10",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
        "Flutter (Dart)",
      ],
    },
    {
      icon: <Bot className="h-5 w-5 text-primary" />,
      title: ptBR ? "IA & automação" : "AI & automation",
      color: "from-primary/20 to-secondary/10",
      tags: [
        "n8n",
        "LLMs em produção",
        "Ollama",
        "LLMs locais",
        "OpenAI API",
        "OpenAI Vision",
        "RPA",
      ],
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary" />,
      title: ptBR ? "Infra & ops" : "Infra & ops",
      color: "from-secondary/15 to-primary/5",
      tags: [
        "Docker",
        "Kubernetes",
        "GitOps (ArgoCD)",
        "Git / GitHub",
        "CI/CD",
        "AWS",
        "Linux",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-cyber-dots opacity-[0.5]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

      <div className="mx-auto w-full max-w-content px-4">

        <motion.div
          className="text-center mb-14 space-y-3"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {ptBR ? "Stack principal" : "Core stack"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {ptBR ? "Competências técnicas" : "Technical skills"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {ptBR
              ? "Full stack de ponta a ponta, com automações de IA quando fazem sentido."
              : "End-to-end full stack, with AI automations when they make sense."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={i === categories.length - 1 ? "sm:col-span-2" : undefined}
              variants={fadeUp(i * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="glow-card h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-md shadow-primary/5 p-6 space-y-4 transition-all duration-300 hover:border-primary/20 hover:shadow-primary/10">

                <div className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} border border-white/10`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-base">{cat.title}</h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {cat.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}