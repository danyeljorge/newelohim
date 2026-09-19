import React from "react";
import { Briefcase, ArrowRight, FileText } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function WorkWithUsBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="bg-[#f5f2eb] rounded-[2.5rem] p-8 sm:p-12 border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-elohim-green-700 uppercase">
                <Briefcase className="w-4 h-4 text-elohim-green-700" />
                <span>OPORTUNIDADE DE CARREIRA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900 leading-snug">
                Faça Parte da Nossa Equipe na Elohim
              </h3>
              <p className="text-sm sm:text-base text-stone-600 font-normal">
                Você é enfermeiro(a), técnico(a) de enfermagem, cuidador(a) ou profissional da saúde e ama cuidar de pessoas? Envie seu currículo e venha transformar vidas conosco em Itaboraí.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href={SITE_INFO.social.whatsappWork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 bg-elohim-green-700 hover:bg-elohim-green-800 text-white font-medium text-sm px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4" />
                <span>Enviar Meu Currículo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
