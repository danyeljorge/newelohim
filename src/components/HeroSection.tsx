"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate subtle, clampable parallax translations
  const videoTranslateY = Math.min(scrollY * 0.18, 90);
  const badgeTranslateY = Math.min(scrollY * 0.28, 110);
  const pillTranslateY = Math.min(scrollY * 0.10, 50);

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#faf9f6] pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            <ScrollReveal variant="fade-down" delay={50}>
              {/* Kicker badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-elohim-green-50 border border-elohim-green-200/80 text-elohim-green-800 text-xs font-semibold tracking-wide uppercase">
                <span className="flex h-2 w-2 rounded-full bg-elohim-green-600 animate-pulse" />
                <span>Residência para Idosos em Itaboraí</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal leading-[1.14] text-stone-900 tracking-tight">
                Cuidado Humanizado.{" "}
                <span className="text-elohim-green-700 italic font-serif">Paz de Espírito</span>{" "}
                para sua Família.
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              {/* Description Text */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
                {SITE_INFO.heroSubtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={320}>
              {/* Handwritten note accent */}
              <div className="flex items-center space-x-3 text-stone-700 pt-1">
                <div className="w-8 h-8 rounded-full bg-red-50 text-elohim-red-600 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-elohim-red-600" />
                </div>
                <span className="font-handwriting text-2xl sm:text-3xl text-elohim-green-800 rotate-[-1deg]">
                  {SITE_INFO.handwrittenNote}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={400}>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center space-x-2 bg-elohim-green-600 hover:bg-elohim-green-700 text-white font-medium text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span>Agendar uma Visita</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 font-medium text-base px-7 py-3.5 rounded-full shadow-sm hover:border-stone-400 transition-all text-center"
                >
                  <span>Conheça Nossa Casa</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={480}>
              {/* Mini Trust Badges */}
              <div className="pt-4 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-elohim-green-600 flex-shrink-0" />
                  <span>Enfermagem 24 Horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-elohim-green-600 flex-shrink-0" />
                  <span>Médico Geriatra Próprio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-elohim-green-600 flex-shrink-0" />
                  <span>Alimentação Balanceada</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Video with Organic Rounded Frame and Scroll Parallax */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal variant="scale" duration={800} delay={200}>
              {/* Background layered shape with parallax reaction */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-elohim-green-100 to-amber-100/60 rounded-[2.5rem] transform rotate-1 -z-10 transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: `translateY(${videoTranslateY * 0.5}px) rotate(1deg)`,
                }}
              />

              {/* Main Video Frame */}
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2.2rem] shadow-2xl border-4 border-white bg-stone-900 transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: `translateY(${videoTranslateY}px)`,
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                >
                  <source src="/video/hero_move.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Trust Badge with Differential Parallax */}
              <div
                className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-100 flex items-center space-x-3.5 max-w-[280px] z-10 transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: `translateY(${badgeTranslateY}px)`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-elohim-green-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Excelência e Confiança</p>
                  <p className="text-sm font-semibold text-stone-900 leading-snug">
                    +10 Anos acolhendo com carinho
                  </p>
                </div>
              </div>

              {/* Floating Rating Pill with Differential Parallax */}
              <div
                className="absolute -top-3 right-4 sm:right-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-stone-100 flex items-center space-x-2 text-xs font-semibold text-stone-800 z-10 transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: `translateY(${pillTranslateY}px)`,
                }}
              >
                <span className="text-amber-500">★★★★★</span>
                <span className="text-stone-500">|</span>
                <span>100% Humanizado</span>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
