import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { NoiseOverlay } from './NoiseOverlay';
import { PrimaryButton, SecondaryLink } from './Buttons';
import { BUSINESS_DATA, getWhatsAppUrl } from '../data/content';
import { m } from 'motion/react';

interface HeroProps {
  onAsteriskClick?: () => void;
}

export function Hero({ onAsteriskClick }: HeroProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section
      id="inicio"
      aria-label="Portada de Xtremeclean"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1100px] p-3 sm:p-4 md:p-6 flex flex-col justify-between"
    >
      {/* Inset Rounded Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden bg-[#0A0A0A] flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-14 shadow-2xl">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {!reducedMotion ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/video/hero-poster.webp"
              className="w-full h-full object-cover object-center scale-[1.02]"
            >
              <source src="/video/hero.webm" type="video/webm" />
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          ) : (
            <img
              src="/video/hero-poster.webp"
              alt="Xtremeclean equipo realizando limpieza profunda con maquinaria especializada"
              className="w-full h-full object-cover object-center"
            />
          )}

          {/* SVG Noise Texture Overlay */}
          <NoiseOverlay opacity={0.55} />

          {/* Vertical Contrast Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/85 z-10 pointer-events-none" />
        </div>

        {/* Content Grid (12 cols on desktop) */}
        <div className="relative z-20 w-full flex flex-col justify-end">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full">
            {/* Right Column in DOM for mobile order:
                In mobile, H1 + chip + buttons appear ABOVE the giant wordmark.
                In desktop, wordmark takes 8 cols left, text + CTA takes 4 cols right. */}

            {/* Mobile View: Text block first */}
            <div className="lg:hidden flex flex-col gap-3">
              <m.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl font-medium text-[#EFEBDD] leading-snug tracking-[-0.02em]"
              >
                Limpieza profunda a domicilio en Las Condes y el sector oriente.
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[14px] text-[#EFEBDD]/70 leading-relaxed"
              >
                Sofás, colchones, alfombras, piso flotante, cocinas y limpieza pre y post mudanza. Personal calificado, maquinaria industrial y atención de su dueño.
              </m.p>

              {/* Social proof chip */}
              <m.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-2 pt-1"
              >
                <a
                  href={BUSINESS_DATA.mapUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EFEBDD] hover:underline"
                >
                  <span className="flex items-center text-[#EFEBDD]" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#EFEBDD]" />
                    ))}
                  </span>
                  <span className="tracking-wide">119 reseñas en Google</span>
                </a>
              </m.div>

              {/* CTAs */}
              <m.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
              >
                <PrimaryButton
                  href={getWhatsAppUrl('general')}
                  data-cta="hero-whatsapp"
                  className="w-full sm:w-auto justify-center"
                >
                  Cotizar por WhatsApp
                </PrimaryButton>
                <SecondaryLink
                  href="#servicios"
                  data-cta="hero-precios"
                  className="justify-center sm:justify-start"
                >
                  Ver precios
                </SecondaryLink>
              </m.div>
            </div>

            {/* Desktop Left (8 Cols): Giant Viewport Wordmark */}
            <div className="lg:col-span-8 flex items-baseline overflow-hidden select-none">
              <div
                aria-hidden="true"
                className="w-full text-[13.5vw] lg:text-[10.8vw] xl:text-[11.2vw] font-extrabold tracking-[-0.06em] leading-[0.82] text-[#EFEBDD] uppercase whitespace-nowrap overflow-visible drop-shadow-md"
              >
                <span>XTREMECLEAN</span>
                <button
                  type="button"
                  onClick={onAsteriskClick}
                  aria-label="Ver garantía de 3 días post secado"
                  className="text-[0.55em] font-light text-[#EFEBDD]/70 hover:text-[#EFEBDD] ml-0.5 align-super cursor-pointer transition-colors"
                >
                  *
                </button>
              </div>
            </div>

            {/* Desktop Right (4 Cols): H1, Text, Review Chip, CTAs */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 pb-2">
              <m.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[20px] xl:text-[22px] font-medium text-[#EFEBDD] leading-[1.3] tracking-[-0.02em]"
              >
                Limpieza profunda a domicilio en Las Condes y el sector oriente.
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[15px] text-[#EFEBDD]/70 leading-relaxed"
              >
                Sofás, colchones, alfombras, piso flotante, cocinas y limpieza pre y post mudanza. Personal calificado, maquinaria industrial y atención de su dueño.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <a
                  href={BUSINESS_DATA.mapUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#EFEBDD] hover:underline"
                >
                  <span className="flex items-center text-[#EFEBDD]" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#EFEBDD]" />
                    ))}
                  </span>
                  <span>119 reseñas en Google</span>
                </a>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-5 pt-1"
              >
                <PrimaryButton
                  href={getWhatsAppUrl('general')}
                  data-cta="hero-whatsapp"
                >
                  Cotizar por WhatsApp
                </PrimaryButton>
                <SecondaryLink href="#servicios" data-cta="hero-precios">
                  Ver precios
                </SecondaryLink>
              </m.div>
            </div>
          </div>
        </div>
      </div>

      {/* Asterisk note outside rounded container */}
      <div className="pt-2 px-2 text-center sm:text-left">
        <p className="text-[12px] text-[#EFEBDD]/60 tracking-normal">
          *Garantía de 3 días post secado: si la mancha reaparece, volvemos sin costo.
        </p>
      </div>
    </section>
  );
}
