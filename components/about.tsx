"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Code, Briefcase, Users } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { 
      icon: <Code className="h-8 w-8 text-primary" />,
      value: "3+", 
      label: t('about.experience')
    },
    { 
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: "30+", 
      label: t('about.projects')
    },
    { 
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "20+", 
      label: t('about.clients')
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Deilton working" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}