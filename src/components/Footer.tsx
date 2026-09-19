"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { SITE_INFO, NAV_LINKS } from "@/data/site-data";
import LegalModals from "./LegalModals";

export default function Footer() {
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <footer className="bg-[#153a1b] text-white/90 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top CTA Banner: "Vamos Conversar?" */}
        <div className="bg-[#1b4e24] rounded-3xl p-8 sm:p-10 mb-16 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Vamos <span className="text-emerald-300 italic">Conversar</span>?
            </h3>
            <p className="text-sm text-white/80 font-normal">
              Nossa equipe está à disposição para tirar dúvidas e acolher sua família com carinho.
            </p>
          </div>

          <a
            href={SITE_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-[#0c2512] font-semibold text-sm px-7 py-3.5 rounded-full shadow-md transition-all transform hover:scale-105 flex-shrink-0"
          >
            <span>Falar Conosco no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-sm">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-14 w-56">
              <Image
                src="/images/logo-white.png"
                alt="Casa de Repouso Elohim"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm">
              Na Casa de Repouso Elohim, priorizamos dignidade, respeito e alegria em cada detalhe, oferecendo conforto, segurança e qualidade de vida à melhor idade em Itaboraí.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#0c2512] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Elohim"
              >
                {/* Instagram SVG */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#0c2512] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook da Elohim"
              >
                {/* Facebook SVG */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SITE_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-[#0c2512] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Elohim"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Navegação
            </h4>
            <ul className="space-y-2 text-white/75">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center space-x-1.5"
                  >
                    <span>•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Atendimento e Localização
            </h4>
            <div className="space-y-3 text-white/75 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{SITE_INFO.address.full}</span>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href={SITE_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.phoneDisplay} (WhatsApp)
                </a>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-white/60 text-xs">
                CNPJ: {SITE_INFO.cnpj}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>
              © {new Date().getFullYear()} {SITE_INFO.name}. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-elohim-red-600 fill-elohim-red-600" />
            <span>por</span>
            <a
              href={SITE_INFO.authorCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white font-semibold underline-offset-2 hover:underline ml-0.5"
            >
              {SITE_INFO.authorCredit.text}
            </a>
          </div>
        </div>

      </div>

      {/* Modals */}
      <LegalModals type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
}
