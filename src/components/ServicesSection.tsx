"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, X, Stethoscope, Sparkles } from "lucide-react";
import { SERVICES_DATA, ServiceItem, SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#f5f2eb] border-t border-b border-stone-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
            <Stethoscope className="w-4 h-4 text-elohim-red-600" />
            <span>O QUE FAZEMOS POR VOCÊ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight">
            Assistência Médica e Cuidados Multidisciplinares
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Oferecemos uma estrutura de saúde integrada para promover longevidade, reabilitação motora e conforto contínuo em Itaboraí.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              variant="fade-up"
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1 h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-elohim-green-800 shadow-sm">
                    {service.id}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-elohim-green-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center text-xs font-semibold text-elohim-green-700 hover:text-elohim-green-800 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>

                    <span className="text-[11px] font-medium text-stone-400">
                      Elohim Itaboraí
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="bg-white rounded-[2rem] max-w-xl w-full shadow-2xl relative flex flex-col"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-10 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable content area */}
              <div className="overflow-y-auto rounded-[2rem]">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-[2rem] bg-stone-100 flex-shrink-0">
                  <Image
                    src={selectedService.img}
                    alt={selectedService.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-elohim-green-700 uppercase tracking-wider">
                      Serviço Especializado Elohim
                    </span>
                    <h3 className="text-2xl font-serif font-semibold text-stone-900 mt-1">
                      {selectedService.name}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2.5">
                      O que inclui:
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feat, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-stone-700">
                          <Check className="w-4 h-4 text-elohim-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/${SITE_INFO.phoneRaw}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(selectedService.name)}%20em%20Itabora%C3%AD.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 bg-elohim-green-600 hover:bg-elohim-green-700 text-white font-medium text-sm py-3 px-5 rounded-full shadow-sm hover:shadow transition-all text-center"
                    >
                      <span>Tirar Dúvidas no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-3 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
