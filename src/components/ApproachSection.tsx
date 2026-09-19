import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { APPROACH_CARDS } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function ApproachSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-elohim-green-700 uppercase">
              NOSSA ABORDAGEM
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-stone-900 leading-tight">
              Soluções Cuidadosas para Cada Fase da Melhor Idade.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-normal">
              Do apoio às atividades cotidianas ao acompanhamento médico e reabilitação, nossa equipe está sempre presente para garantir qualidade de vida.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#servicos"
              className="inline-flex items-center space-x-2 bg-elohim-green-700 hover:bg-elohim-green-800 text-white text-sm font-medium px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              <span>Ver Todos os Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        {/* 3 Approach Cards with Rounded Top Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPROACH_CARDS.map((card, idx) => (
            <ScrollReveal
              key={card.title}
              variant="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1 h-full">
                {/* Card Image with soft rounded top */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-elohim-green-800 uppercase tracking-wider shadow-sm">
                      {card.kicker}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-elohim-green-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-elohim-green-700">
                    <span className="w-2 h-2 rounded-full bg-elohim-green-600 mr-2" />
                    <span>Diferencial Elohim em Itaboraí</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
