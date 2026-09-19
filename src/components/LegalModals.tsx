"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { TERMS_OF_USE, PRIVACY_POLICY } from "@/data/site-data";

interface LegalModalProps {
  type: "terms" | "privacy" | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const data = type === "terms" ? TERMS_OF_USE : PRIVACY_POLICY;
  const Icon = type === "terms" ? FileText : ShieldCheck;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] flex flex-col p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-elohim-green-50 text-elohim-green-700 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              {data.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto space-y-5 pr-2 text-sm text-stone-600 leading-relaxed">
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="font-semibold text-stone-900 text-sm">
                {section.title}
              </h4>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-stone-900 text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
