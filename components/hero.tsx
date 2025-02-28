"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
              {t("hero.greeting")}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Deilton Pedro Junior
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              {t("hero.title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">{t("projects.viewAll")}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse"></div>
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
