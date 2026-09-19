import React from "react";
import Image from "next/image";
import { UserCheck, Award } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/site-data";
import ScrollReveal from "./ScrollReveal";

export default function TeamSection() {
  return (
    <section id="equipe" className="py-20 md:py-28 bg-[#f5f2eb] border-t border-b border-stone-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-elohim-green-700 uppercase">
            <UserCheck className="w-4 h-4 text-elohim-red-600" />
            <span>CORPO TÉCNICO MULTIDISCIPLINAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-normal text-stone-900 leading-tight">
            Nossa Equipe de Especialistas
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Profissionais dedicados, experientes e devidamente registrados em seus conselhos de classe, cuidando com rigor técnico e carinho incondicional.
          </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <ScrollReveal
              key={member.id}
              variant="fade-up"
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1 h-full">
                {/* Photo */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={member.foto}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Professional Registry Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-elohim-green-800 tracking-tight">
                      {member.badge}
                    </span>
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-elohim-green-700">
                      {member.cargo}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-stone-900">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal pt-1">
                      {member.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 text-[11px] font-medium text-stone-400">
                    Casa de Repouso Elohim • Itaboraí
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
