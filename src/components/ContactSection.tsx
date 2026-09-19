"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle2 } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const text = `Olá! Meu nome é ${name}${phone ? ` (${phone})` : ""}. Gostaria de agendar uma visita e obter informações sobre a Casa de Repouso Elohim em Itaboraí.${message ? ` Mensagem: ${message}` : ""}`;
    const url = `https://wa.me/${SITE_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
            <MapPin className="w-4 h-4 text-elohim-red-600" />
            <span>VENHA NOS CONHECER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight">
            Fale Conosco e Agende sua Visita
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Estamos de portas abertas em Itaboraí para acolher sua família, apresentar nossas instalações e tirar todas as suas dúvidas.
          </p>
        </ScrollReveal>

        {/* Top 2 Columns: Unit Info (Left) and Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Column 1: Unit Information Card */}
          <div className="lg:col-span-6 flex">
            <ScrollReveal variant="fade-up" delay={100} className="w-full">
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-stone-200/80 shadow-sm space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-elohim-green-700">
                        Unidade Exclusiva
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
                        Unidade Itaboraí - RJ
                      </h3>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-emerald-50 text-elohim-green-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-stone-700">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-elohim-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-stone-900">Endereço:</strong>
                        <span>{SITE_INFO.address.full}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-elohim-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-stone-900">Telefone / WhatsApp:</strong>
                        <a
                          href={SITE_INFO.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-elohim-green-700 hover:underline font-semibold"
                        >
                          {SITE_INFO.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-elohim-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-stone-900">E-mail:</strong>
                        <a href={`mailto:${SITE_INFO.email}`} className="text-stone-700 hover:underline">
                          {SITE_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-elohim-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-stone-900">Horário de Atendimento e Visitas:</strong>
                        <span>Plantão 24h para residentes • Visitas agendadas diariamente</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={SITE_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-elohim-green-600 hover:bg-elohim-green-700 text-white font-medium text-sm py-3.5 px-6 rounded-full shadow-sm hover:shadow transition-all text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Conversar Agora no WhatsApp</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2: Quick Visit Form (moved to the right column) */}
          <div className="lg:col-span-6 flex">
            <ScrollReveal variant="fade-up" delay={200} className="w-full">
              <div className="bg-[#f5f2eb] rounded-3xl p-7 sm:p-9 border border-stone-200/80 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-elohim-green-700">
                        Atendimento Rápido
                      </span>
                      <h4 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
                        Solicitar Contato / Agendar Visita
                      </h4>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-stone-200/70 text-stone-700 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mb-5">
                    Preencha os campos abaixo para iniciar um atendimento personalizado com nossa equipe.
                  </p>

                  {submitted ? (
                    <div className="p-5 rounded-2xl bg-emerald-100/80 text-elohim-green-900 flex items-center space-x-3 my-4">
                      <CheckCircle2 className="w-6 h-6 text-elohim-green-700 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Obrigado! Sua mensagem foi enviada. Responderemos em breve no WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-stone-700 mb-1">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Maria da Silva"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-elohim-green-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 mb-1">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ex: (21) 98888-7777"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-elohim-green-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-stone-700 mb-1">
                          Mensagem ou Dúvida (Opcional)
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Gostaria de saber valores, disponibilidade ou agendar uma visita..."
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-elohim-green-600 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-black text-white text-sm font-semibold py-3.5 rounded-full shadow-sm hover:shadow transition-all mt-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar e Abrir Conversa no WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Full-Width 100% Google Maps Embed (Spanning both columns) */}
        <ScrollReveal variant="scale" duration={750} delay={150}>
          <div className="w-full bg-white rounded-3xl p-3 sm:p-4 border border-stone-200/80 shadow-md overflow-hidden">
            <div className="relative w-full h-[380px] sm:h-[450px] md:h-[480px] rounded-2xl overflow-hidden bg-stone-100">
              <iframe
                title="Localização Casa de Repouso Elohim - Itaboraí"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.453298431279!2d-42.85982082574805!3d-22.748552932233064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99bff8ae4a63e1%3A0x7cd56041b9f8779f!2sCasa%20de%20Repouso%20Elohim!5e0!3m2!1spt-BR!2sbr!4v1748988070027!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-elohim-green-600 flex-shrink-0" />
                <span className="font-medium text-stone-900">
                  {SITE_INFO.address.full}
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Casa+de+Repouso+Elohim+Itaborai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-elohim-green-700 hover:text-elohim-green-800 hover:underline font-semibold"
              >
                <span>Ver rota no Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
