"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Check, HeartHandshake, ArrowRight } from "lucide-react";
import { ABOUT_ACCORDION, SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const [openItem, setOpenItem] = useState<string | null>("residencia");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="fade-up" delay={50}>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
                <HeartHandshake className="w-4 h-4 text-elohim-red-600" />
                <span>NOSSA HISTÓRIA E COMPROMISSO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight mt-3">
                Mais que uma Casa de Repouso, um Verdadeiro Lar.
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <p className="text-stone-600 text-base leading-relaxed">
                Na essência do nosso trabalho, está o compromisso de criar um ambiente onde a{" "}
                <strong className="text-stone-900 font-semibold">dignidade</strong>, o{" "}
                <strong className="text-stone-900 font-semibold">respeito</strong> e a{" "}
                <strong className="text-stone-900 font-semibold">alegria</strong> sejam vividos todos os dias. 
                Sabemos que escolher um lar para quem você ama é uma decisão cheia de significado.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={220}>
              <p className="text-stone-600 text-sm leading-relaxed">
                Por isso, nossa equipe multidisciplinar em Itaboraí vai muito além do básico: unimos acompanhamento médico constante, supervisão de enfermagem 24 horas, alimentação planejada por nutricionista e estímulos físicos e cognitivos que renovam a vontade de viver.
              </p>
            </ScrollReveal>

            {/* Interactive Accordion */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="pt-2 border-t border-stone-200/80 space-y-3">
                {ABOUT_ACCORDION.map((item) => {
                  const isOpen = openItem === item.id;
                  return (
                    <div
                      key={item.id}
                      className="border-b border-stone-200/80 pb-3 transition-colors"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between py-2 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg font-serif font-medium text-stone-900 group-hover:text-elohim-green-700 transition-colors">
                          {item.title}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-elohim-green-50 text-stone-600 group-hover:text-elohim-green-700 flex items-center justify-center flex-shrink-0 ml-3 transition-colors">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2 pb-2 text-sm text-stone-600 leading-relaxed animate-in fade-in duration-200">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* CTA button */}
            <ScrollReveal variant="fade-up" delay={380}>
              <div className="pt-4">
                <a
                  href={SITE_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-elohim-green-600 hover:bg-elohim-green-700 text-white font-medium text-sm px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  <span>Falar com Nossa Coordenadora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Image with Rounded Frame */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scale" duration={750} delay={180}>
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full max-w-lg mx-auto rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-stone-100">
                <Image
                  src="/images/services/service7.webp"
                  alt="Idoso recebendo carinho e acompanhamento profissional na Casa de Repouso Elohim"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* In-image quote badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-stone-100">
                  <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-1">
                    Atendimento em Itaboraí
                  </p>
                  <p className="text-sm font-serif italic text-stone-800">
                    &ldquo;Acreditamos que envelhecer é viver novas histórias e ter sempre alguém por perto para ouvir, acolher e compartilhar sorrisos.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
