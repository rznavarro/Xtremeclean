import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { NoiseOverlay } from './NoiseOverlay';
import { PrimaryButton } from './Buttons';
import { WordsPullUpMultiStyle } from './TypographyAnimations';
import { BUSINESS_DATA, getWhatsAppUrl } from '../data/content';

interface FinalCtaSectionProps {
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

export function FinalCtaSection({ sectionRef }: FinalCtaSectionProps) {
  return (
    <section
      ref={sectionRef}
      id="contacto"
      aria-labelledby="cta-final-titulo"
      className="relative w-full p-3 sm:p-4 md:p-6 bg-[#0A0A0A]"
    >
      {/* Inset Rounded Container like Hero */}
      <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden bg-[#0A0A0A] p-8 sm:p-12 md:p-16 lg:p-20 text-[#EFEBDD] shadow-2xl border border-white/5 flex flex-col justify-between min-h-[460px] md:min-h-[520px]">
        {/* Poster Background at 25% Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="/video/hero-poster.webp"
            alt="Xtremeclean terminación de limpieza"
            className="w-full h-full object-cover object-center opacity-25 filter grayscale"
            loading="lazy"
          />
          <NoiseOverlay opacity={0.6} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#8D8C86] block mb-4">
            Reserva tu fecha
          </span>

          <h2
            id="cta-final-titulo"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-[#EFEBDD] mb-6 leading-[1.08]"
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Cotiza ', className: 'text-[#EFEBDD]' },
                { text: 'hoy.', className: 'font-serif italic text-[#EFEBDD]' },
              ]}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#EFEBDD]/80 leading-relaxed mb-10 max-w-2xl">
            Reserva con anticipación. {BUSINESS_DATA.ownerNote}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
            <PrimaryButton
              href={getWhatsAppUrl('general')}
              data-cta="final-whatsapp"
              className="w-full sm:w-auto justify-center"
            >
              Cotizar por WhatsApp
            </PrimaryButton>

            <a
              href={BUSINESS_DATA.phoneUrl}
              data-cta="final-llamar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#EFEBDD] text-[15px] font-semibold border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#EFEBDD]" />
              <span>Llamar al {BUSINESS_DATA.phone}</span>
            </a>

            <a
              href={BUSINESS_DATA.emailUrl}
              data-cta="final-email"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-[#EFEBDD]/80 hover:text-[#EFEBDD] text-[15px] font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{BUSINESS_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Small Bottom Indicator */}
        <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8D8C86]">
          <span>{BUSINESS_DATA.guaranteeText}</span>
          <span>{BUSINESS_DATA.schedule}</span>
        </div>
      </div>
    </section>
  );
}
