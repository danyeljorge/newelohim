import React from "react";
import { Users, HeartPulse, ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";
import { INTRO_CARDS } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  Users: Users,
  HeartPulse: HeartPulse,
  ShieldCheck: ShieldCheck,
  PhoneCall: PhoneCall,
};

export default function IntroCards() {
  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24 border-t border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-elohim-green-700 uppercase">
            CONHEÇA A ELOHIM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-normal text-stone-900 leading-tight">
            Cuidado de excelência com toque pessoal, afeto e respeito.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Criamos uma rotina repleta de carinho, segurança e estímulo à autonomia para que cada residente viva dias felizes e tranquilos.
          </p>
        </ScrollReveal>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTRO_CARDS.map((card, idx) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Users;
            return (
              <ScrollReveal
                key={card.title}
                variant="fade-up"
                delay={idx * 120}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/70 flex flex-col justify-between group hover:-translate-y-1 h-full">
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-elohim-green-50 text-elohim-green-700 flex items-center justify-center mb-5 group-hover:bg-elohim-green-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-medium text-stone-900 mb-2.5">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stone-600 leading-relaxed font-normal mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Arrow Link */}
                  <a
                    href={card.href}
                    className="inline-flex items-center text-xs font-semibold text-elohim-green-700 hover:text-elohim-green-800 tracking-wide uppercase group-hover:translate-x-1 transition-transform"
                  >
                    <span>{card.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
