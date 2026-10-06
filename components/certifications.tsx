"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Clock } from "lucide-react";

const easing = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing, delay } },
});

export function Certifications() {
  const { language } = useLanguage();
  const ptBR = language === "pt-BR";

  return (
    <div className="mt-14">
      <motion.h3
        className="text-center text-xl font-bold mb-6"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {ptBR ? "Certificações" : "Certifications"}
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="glow-card h-full flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-md shadow-primary/5 p-6">
            <img
              src="/certificates/aws-ai-practitioner.png"
              alt="AWS Certified AI Practitioner badge"
              width={112}
              height={112}
              className="h-28 w-28 shrink-0"
            />
            <div className="min-w-0 space-y-2 text-center sm:text-left">
              <h4 className="font-bold leading-tight">AWS Certified AI Practitioner</h4>
              <p className="text-xs text-muted-foreground">
                AIF-C01 · {ptBR ? "Emitido em set/2026 · válido até set/2029" : "Issued Sep 2026 · valid until Sep 2029"}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-1 text-xs font-medium">
                <a
                  href="/certificates/aws-ai-practitioner.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  <FileText className="h-3.5 w-3.5" />
                  {ptBR ? "Ver certificado" : "View certificate"}
                </a>
                <a
                  href="https://aws.amazon.com/verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
                  title="a7e605c83d61425a817f7fc0b32a98f2"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {ptBR ? "Verificar na AWS" : "Verify on AWS"}
                </a>
              </div>
              <p className="text-[10px] text-muted-foreground/80 break-all">
                {ptBR ? "Código de validação" : "Validation number"}: a7e605c83d61425a817f7fc0b32a98f2
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="h-full flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-full w-full text-white/15" aria-hidden="true">
                <polygon
                  points="50,4 92,27 92,73 50,96 8,73 8,27"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="6 5"
                />
              </svg>
              <Clock className="absolute h-8 w-8 text-muted-foreground" />
            </div>
            <div className="min-w-0 space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {ptBR ? "Em breve" : "Coming soon"}
              </span>
              <h4 className="font-bold leading-tight">AWS Certified Cloud Practitioner</h4>
              <p className="text-xs text-muted-foreground">
                CLF-C02 · {ptBR ? "Prova prevista para o fim de outubro de 2026" : "Exam scheduled for late October 2026"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
