import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, Heart, Star } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function TrustBanner() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#edf4ed] rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-emerald-900/10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image of consultation / caregiving */}
            <div className="lg:col-span-6">
              <ScrollReveal variant="scale" duration={700} delay={100}>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-stone-200">
                  <Image
                    src="/images/services/service6.webp"
                    alt="Acompanhamento profissional dedicado e conversa acolhedora com família"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Copy, Buttons & Trust Indicators */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal variant="fade-up" delay={50}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/80 text-elohim-green-800 text-xs font-semibold tracking-wider uppercase border border-emerald-900/10">
                  <Heart className="w-3.5 h-3.5 text-elohim-red-600 fill-elohim-red-600" />
                  <span>PARCERIA E CONFIANÇA</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-stone-900 leading-snug mt-3">
                  Mais do Que Cuidado — Uma Parceria de Amor e Confiança.
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={150}>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Trabalhamos lado a lado com as famílias para criar planos de acolhimento personalizados, garantindo conforto contínuo, dignidade e a certeza de que seu ente querido está em mãos seguras e amorosas.
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal variant="fade-up" delay={250}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center space-x-2 bg-elohim-green-700 hover:bg-elohim-green-800 text-white font-medium text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>Agendar uma Visita</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 font-medium text-sm px-6 py-3 rounded-full shadow-sm transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Social Proof & Metrics */}
              <ScrollReveal variant="fade-up" delay={350}>
                <div className="pt-6 border-t border-emerald-900/10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {/* Avatar stack */}
                    <div className="flex -space-x-2 overflow-hidden">
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden relative bg-stone-300">
                        <Image src="/images/team/fotouser_marcelo.jpg" alt="Equipe Elohim" fill className="object-cover" />
                      </div>
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden relative bg-stone-300">
                        <Image src="/images/team/fotouser_enfermeira.jpg" alt="Equipe Elohim" fill className="object-cover" />
                      </div>
                      <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden relative bg-stone-300">
                        <Image src="/images/team/fotouser_tayna.webp" alt="Equipe Elohim" fill className="object-cover" />
                      </div>
                    </div>

                    <div className="text-xs text-stone-700 font-medium">
                      <div className="flex items-center space-x-1 text-amber-500 mb-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                      </div>
                      <span>Confiado e elogiado por mais de 100 famílias</span>
                    </div>
                  </div>

                  {/* 3 Key Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-2 text-left">
                    {SITE_INFO.stats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="bg-white/70 rounded-xl p-3 border border-emerald-900/5">
                        <p className="text-2xl sm:text-3xl font-serif font-bold text-elohim-green-800">
                          {stat.value}
                        </p>
                        <p className="text-xs font-semibold text-stone-800 mt-0.5 leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
