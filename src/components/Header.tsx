"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, Clock, Calendar } from "lucide-react";
import { SITE_INFO, NAV_LINKS } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* TopBar - Informações Rápidas */}
      <div className="bg-[#1b4e24] text-white/90 text-xs py-2 px-4 sm:px-8 transition-all border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center space-x-6">
            <a
              href={SITE_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-medium">{SITE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300" />
              <span>{SITE_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>Centro, Itaboraí - RJ</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-white/75 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              Atendimento 24h
            </span>
            <span className="text-white/30">|</span>
            <div className="flex items-center space-x-3">
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram da Elohim"
              >
                {/* Instagram SVG */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook da Elohim"
              >
                {/* Facebook SVG */}
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-[#faf9f6] py-4 md:py-5 border-b border-stone-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center group">
            <div className="relative h-12 md:h-14 w-44 md:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logo-color.png"
                alt="Casa de Repouso Elohim"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-700 hover:text-elohim-green-700 font-medium text-[15px] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-elohim-green-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contato"
              className="inline-flex items-center space-x-2 bg-elohim-green-600 hover:bg-elohim-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-elohim-green-700 hover:bg-stone-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 mt-2 space-y-3 animate-in slide-in-from-top-3 duration-200 shadow-xl">
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-stone-700 hover:text-elohim-green-700 font-medium text-base border-b border-stone-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-3">
              <a
                href={SITE_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-2.5 border border-elohim-green-600 text-elohim-green-700 rounded-full font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {SITE_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-elohim-green-600 text-white rounded-full font-semibold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar uma Visita</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
