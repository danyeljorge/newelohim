"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function FacilitiesGallery() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev! === 0 ? GALLERY_PHOTOS.length - 1 : prev! - 1));
  }, [activePhotoIdx]);

  const handleNext = useCallback(() => {
    if (activePhotoIdx === null) return;
    setActivePhotoIdx((prev) => (prev! === GALLERY_PHOTOS.length - 1 ? 0 : prev! + 1));
  }, [activePhotoIdx]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIdx === null) return;
      if (e.key === "Escape") setActivePhotoIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIdx, handleNext, handlePrev]);

  return (
    <section id="instalacoes" className="py-20 md:py-28 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
            <Camera className="w-4 h-4 text-elohim-red-600" />
            <span>ESTRUTURA ACOLHEDORA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight">
            Nossas Instalações em Itaboraí
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Ambientes amplos, iluminados, arejados e planejados para o conforto, segurança e convivência tranquila dos nossos residentes.
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <ScrollReveal
              key={photo.id}
              variant="fade-up"
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div
                onClick={() => setActivePhotoIdx(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/70 bg-stone-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="self-end bg-white/20 backdrop-blur-md rounded-full p-2">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold">
                      Casa de Repouso Elohim
                    </span>
                    <h4 className="text-base font-serif font-medium mt-0.5">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhotoIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActivePhotoIdx(null)}
            role="dialog"
            aria-modal="true"
          >
            {/* Close */}
            <button
              onClick={() => setActivePhotoIdx(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Modal Image Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={GALLERY_PHOTOS[activePhotoIdx].src}
                  alt={GALLERY_PHOTOS[activePhotoIdx].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-4 text-center text-white/90">
                <p className="text-base font-serif font-medium">
                  {GALLERY_PHOTOS[activePhotoIdx].title}
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Foto {activePhotoIdx + 1} de {GALLERY_PHOTOS.length} • Unidade Itaboraí
                </p>
              </div>
            </div>

            {/* Navigation Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
