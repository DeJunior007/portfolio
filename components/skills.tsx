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
      icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
      title: t('skills.frontend'),
      skills: [
        { name: 'HTML5', level: 85 },
        { name: 'CSS3/SASS', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'React Native', level: 70 },
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'APIs RESTful', level: 80 },
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: t('skills.tools'),
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Figma', level: 65 },
        { name: 'Agile/Scrum', level: 80 },
      ]
    }
  ];
  

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
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
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <motion.div 
                        className="bg-primary h-2.5 rounded-full"
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