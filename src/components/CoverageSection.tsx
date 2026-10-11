import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Building2 } from 'lucide-react';
import { BUSINESS_DATA, CLIENT_LOGOS } from '../data/content';
import { m } from 'motion/react';

export function CoverageSection() {
  return (
    <section
      id="cobertura"
      aria-labelledby="cobertura-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#121212] border-t border-black/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Comunas & Contact Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#5E5E5A] block mb-3">
                Zona de atención
              </span>
              <h2
                id="cobertura-titulo"
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#121212] leading-tight"
              >
                Atendemos el sector oriente y más.
              </h2>
            </div>

            {/* Comunas List */}
            <div>
              <p className="text-xs font-semibold text-[#5E5E5A] uppercase tracking-wider mb-3">
                Comunas cubiertas a domicilio:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {BUSINESS_DATA.comunas.map((comuna, idx) => (
                  <span
                    key={comuna}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-black/[0.08] text-sm font-semibold text-[#121212] shadow-xs"
                  >
                    {comuna}
                    {idx < BUSINESS_DATA.comunas.length - 1 && (
                      <span className="sr-only">,</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Address and schedule box */}
            <div className="rounded-2xl p-6 bg-white border border-black/[0.08] shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#121212] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-[#5E5E5A]">
                    Base operativa
                  </p>
                  <p className="text-sm font-semibold text-[#121212]">
                    {BUSINESS_DATA.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-black/[0.06] pt-3.5">
                <Clock className="w-5 h-5 text-[#121212] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-[#5E5E5A]">
                    Horario de atención
                  </p>
                  <p className="text-sm text-[#121212]">
                    {BUSINESS_DATA.scheduleDetail.weekdays}
                  </p>
                  <p className="text-sm text-[#121212]">
                    {BUSINESS_DATA.scheduleDetail.saturday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-black/[0.06] pt-3.5">
                <Phone className="w-5 h-5 text-[#121212] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-[#5E5E5A]">
                    Teléfono directo
                  </p>
                  <a
                    href={BUSINESS_DATA.phoneUrl}
                    className="text-sm font-semibold text-[#121212] hover:underline"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Styled Map Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#EAE5D8] border border-black/[0.08] shadow-lg aspect-square sm:aspect-[4/3] lg:aspect-square flex flex-col justify-between p-6">
              {/* Stylized vector map graphic */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full text-black/[0.07] stroke-current fill-none pointer-events-none"
              >
                {/* Arterial grid / Apoquindo corridor */}
                <path d="M-20,120 L420,160" strokeWidth="16" className="text-white/60 stroke-current" />
                <path d="M-20,120 L420,160" strokeWidth="4" className="text-black/10 stroke-current" />
                <path d="M80,-20 L160,420" strokeWidth="8" className="text-white/40 stroke-current" />
                <path d="M220,-20 L180,420" strokeWidth="10" className="text-white/50 stroke-current" />
                <path d="M300,-20 L340,420" strokeWidth="6" className="text-white/40 stroke-current" />
                <path d="M-20,280 L420,240" strokeWidth="10" className="text-white/50 stroke-current" />
                <path d="M-20,50 L420,30" strokeWidth="6" className="text-white/30 stroke-current" />

                {/* Secondary streets */}
                <path d="M20,20 L380,380" strokeWidth="2" strokeDasharray="4 4" className="text-black/10 stroke-current" />
                <path d="M380,20 L20,380" strokeWidth="2" strokeDasharray="4 4" className="text-black/10 stroke-current" />
              </svg>

              {/* Top Map Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 text-xs font-semibold text-[#121212]">
                  <span className="w-2 h-2 rounded-full bg-[#121212] animate-pulse" />
                  <span>Las Condes, Santiago</span>
                </span>
              </div>

              {/* Center Location Pin with Ripple */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-16 h-16 rounded-full bg-black/10 animate-ping" />
                  <div className="w-12 h-12 rounded-full bg-[#121212] text-[#EFEBDD] flex items-center justify-center shadow-2xl z-10">
                    <MapPin className="w-6 h-6 fill-current text-[#EFEBDD]" />
                  </div>
                </div>

                <div className="mt-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-black/10 shadow-sm text-center">
                  <p className="text-xs font-bold text-[#121212]">
                    Av. Apoquindo 6410
                  </p>
                  <p className="text-[10px] text-[#5E5E5A]">
                    Sector Manquehue · Las Condes
                  </p>
                </div>
              </div>

              {/* Bottom "Cómo llegar" action button */}
              <div className="relative z-10 pt-4">
                <a
                  href={BUSINESS_DATA.mapUrl}
                  target="_blank"
                  rel="noopener"
                  data-cta="mapa-como-llegar"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#121212] hover:bg-black text-[#EFEBDD] rounded-full text-sm font-bold shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* B2B / Corporate cleaning row */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-black/[0.08]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-center md:text-left">
              <Building2 className="w-5 h-5 text-[#121212] shrink-0" />
              <p className="text-base sm:text-lg font-semibold text-[#121212]">
                También limpiamos oficinas y locales comerciales.
              </p>
            </div>

            {/* 3 verified client logos */}
            <div className="flex items-center gap-8 sm:gap-12 flex-wrap justify-center">
              {CLIENT_LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="h-10 sm:h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={`Logo empresa cliente ${logo.name}`}
                    className="max-h-full max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
