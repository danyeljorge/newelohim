"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mr-3 bg-white text-stone-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center space-x-2 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-medium text-stone-700">Dúvidas? Fale conosco!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-600 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={SITE_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento no WhatsApp da Casa de Repouso Elohim"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 whatsapp-pulse"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Status dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
}
