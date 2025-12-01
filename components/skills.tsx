"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { 
  MonitorSmartphone, 
  Server, 
  Wrench 
} from 'lucide-react';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Core",
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'PHP / Laravel', level: 85 },
        { name: 'APIs REST/GraphQL', level: 85 },
        { name: 'Autenticacao/Autorizacao', level: 80 },
        { name: 'Testing (Jest/Integration)', level: 80 },
      ]
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
      title: "Dados e integracao",
      skills: [
        { name: 'PostgreSQL/MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis/Cache', level: 75 },
        { name: 'Mensageria/Queues', level: 70 },
        { name: 'Design de schemas', level: 80 },
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Confiabilidade e ops",
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Observabilidade (logs/metrics)', level: 75 },
        { name: 'AWS/Cloud', level: 70 },
        { name: 'Infra as code basica', level: 65 },
      ]
    }
  ];
  

  return (
    <section id="skills" className="relative py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Stack principal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Competencias tecnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foco em backend robusto, dados consistentes e confiabilidade em producao.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-lg shadow-primary/10 transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-primary/10 rounded-full ring-1 ring-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 backdrop-blur">
                      <motion.div 
                        className="h-2.5 rounded-full bg-primary/80"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
