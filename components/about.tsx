"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Code, Briefcase, Users } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { 
      icon: <Code className="h-8 w-8 text-primary" />,
      value: "2+ anos", 
      label: "Backend e APIs"
    },
    { 
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: "10+ entregas", 
      label: "SaaS e integracoes"
    },
    { 
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "Squads", 
      label: "Prod/Design/QA"
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Curriculo interativo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Quem eu sou</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Engenheiro de software focado em backend, APIs bem modeladas e confiabilidade. Trabalho perto de produto, cuidando de filas, webhooks, WebSocket e bancos relacionais para manter operacao estavel.
          </p>
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
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
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
                <h3 className="text-xl font-semibold mb-3">Resumo profissional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Especializado em TypeScript/Node.js e Laravel/PHP, do design das APIs ao monitoramento em producao. Experiencia com bancos relacionais, mensageria (queues/Horizon), WebSocket, autenticacao e cloud. Comunicacao clara com produto e stakeholders tecnicos.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Case recente: API central de integracao com instituicoes financeiras, simulacoes rodando em background e notificacao em tempo real via WebSocket. Reduziu alternancia entre sistemas e acelerou atendimento.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center backdrop-blur-2xl shadow-lg shadow-primary/10 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2 rounded-2xl border border-primary/15 bg-primary/10 p-6 backdrop-blur-2xl shadow-lg shadow-primary/10">
                <h4 className="text-xl font-semibold mb-3">Como ajudo</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Modelo dominos de negocio e desenho APIs consistentes</li>
                  <li>Cuido de logs, observabilidade e rollout seguro</li>
                  <li>Faco pairing com frontend para contratos claros</li>
                  <li>Deixo deploy e pipelines previsiveis</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
