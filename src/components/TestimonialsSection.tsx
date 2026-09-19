import React from "react";
import { Star, MessageSquareQuote, Heart } from "lucide-react";
import { TESTIMONIALS, SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
            <Heart className="w-4 h-4 text-elohim-red-600 fill-elohim-red-600" />
            <span>PALAVRAS DE QUEM CONFIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight">
            O Que as Famílias Dizem Sobre a Elohim
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            A tranquilidade dos familiares e o sorriso dos nossos residentes são a nossa maior realização diária.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              variant="fade-up"
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  {/* Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(t.estrelas)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <MessageSquareQuote className="w-6 h-6 text-stone-300 group-hover:text-elohim-green-600 transition-colors" />
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h4 className="text-base font-serif font-semibold text-stone-900">
                      &ldquo;{t.titulo}&rdquo;
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal italic">
                      {t.depoimento}
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{t.nome}</p>
                    <p className="text-xs text-stone-500">{t.relacao}</p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 bg-emerald-50 text-elohim-green-700 rounded-full font-medium">
                    Verificado
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cicero Quote Banner */}
        <ScrollReveal variant="scale" duration={800} delay={150}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-elohim-green-800 to-elohim-green-900 rounded-[2rem] p-8 sm:p-12 text-white text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-0" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-3xl text-emerald-300 font-serif">“</span>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/95 leading-relaxed max-w-2xl mx-auto">
                {SITE_INFO.quote.text}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-emerald-200 font-semibold pt-2">
                — {SITE_INFO.quote.author}
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
