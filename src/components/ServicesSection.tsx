import React, { useState, useEffect } from 'react';
import { NoiseOverlay } from './NoiseOverlay';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PrimaryButton, SecondaryLink } from './Buttons';
import { WordsPullUpMultiStyle } from './TypographyAnimations';
import { getWhatsAppUrl } from '../data/content';
import { Check, Play, ArrowUpRight } from 'lucide-react';
import { m } from 'motion/react';

export function ServicesSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  const cardVariants: Record<string, any> = {
    hidden: { opacity: 0, scale: reducedMotion ? 1 : 0.95, y: reducedMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: reducedMotion ? 0 : i * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-[#EFEBDD] overflow-hidden"
    >
      {/* Subtle Noise Texture */}
      <NoiseOverlay opacity={0.12} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 id="servicios-titulo" className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Precios claros, ', className: 'text-[#EFEBDD]' },
                { text: 'sin sorpresas.', className: 'font-serif italic text-[#EFEBDD]' },
              ]}
            />
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#8D8C86]">
            Elige tu servicio y cotiza directo por WhatsApp.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Card Video: spans 2 rows on desktop */}
          <m.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#141414] border border-white/5 flex flex-col justify-between min-h-[360px] lg:min-h-[640px] p-6 group"
          >
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center filter saturate-90 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/video/card.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#EFEBDD]">
                <Play className="w-3 h-3 fill-current" />
                <span>En acción</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <p className="text-2xl font-semibold tracking-tight text-[#EFEBDD]">
                Tu casa, como nueva.
              </p>
              <a
                href="#videos"
                data-cta="servicios-ver-videos"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#EFEBDD]/90 hover:text-white underline underline-offset-4 transition-colors"
              >
                <span>Ver cómo trabajamos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </m.div>

          {/* Card 01: Tapices */}
          <m.article
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className="rounded-2xl md:rounded-3xl p-6 md:p-7 bg-[#1E1E1E] hover:bg-[#232323] transition-colors border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <img
                  src="/photos/sofa.webp"
                  alt="Limpieza de sofá profesional"
                  className="w-12 h-12 rounded-full object-cover border border-white/10 saturate-90"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <span className="text-sm font-mono text-[#8D8C86]">01</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#EFEBDD] mb-4">
                Tapices
              </h3>

              <div className="space-y-4 text-[14px]">
                {/* Sofá */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Sofá</span>
                    <a
                      href={getWhatsAppUrl('sofa')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-sofa"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <p className="text-xs text-[#8D8C86] mb-1.5">
                    Tratamiento de manchas y desinfección
                  </p>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5">
                    <div className="flex justify-between">
                      <span>1 cuerpo</span>
                      <span className="tabular-nums font-semibold">$40.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 cuerpos</span>
                      <span className="tabular-nums font-semibold">$50.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3 cuerpos</span>
                      <span className="tabular-nums font-semibold">$55.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>En L</span>
                      <span className="tabular-nums font-semibold">desde $65.000</span>
                    </div>
                  </div>
                </div>

                {/* Colchón */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Colchón</span>
                    <a
                      href={getWhatsAppUrl('colchon')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-colchon"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <p className="text-xs text-[#8D8C86] mb-1.5">
                    Cara principal y laterales
                  </p>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5">
                    <div className="flex justify-between">
                      <span>1 y 1,5 plazas</span>
                      <span className="tabular-nums font-semibold">$35.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 plazas</span>
                      <span className="tabular-nums font-semibold">$40.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>King</span>
                      <span className="tabular-nums font-semibold">$45.000</span>
                    </div>
                  </div>
                </div>

                {/* Sillas */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Sillas</span>
                    <a
                      href={getWhatsAppUrl('sillas')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-sillas"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <p className="text-xs text-[#8D8C86] mb-1.5">
                    Limpieza y desinfección
                  </p>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5">
                    <div className="flex justify-between">
                      <span>Con respaldo</span>
                      <span className="tabular-nums font-semibold">$10.000 c/u</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sin respaldo</span>
                      <span className="tabular-nums font-semibold">$9.000 c/u</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.article>

          {/* Card 02: Alfombras y Pisos */}
          <m.article
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className="rounded-2xl md:rounded-3xl p-6 md:p-7 bg-[#1E1E1E] hover:bg-[#232323] transition-colors border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <img
                  src="/photos/alfombras.webp"
                  alt="Limpieza de alfombras y decapado"
                  className="w-12 h-12 rounded-full object-cover border border-white/10 saturate-90"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <span className="text-sm font-mono text-[#8D8C86]">02</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#EFEBDD] mb-4">
                Alfombras y pisos
              </h3>

              <div className="space-y-4 text-[14px]">
                {/* Alfombra muro a muro */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Alfombra muro a muro</span>
                    <a
                      href={getWhatsAppUrl('alfombras')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-alfombras"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <p className="text-xs text-[#8D8C86] mb-1.5">
                    Shampoo especial, quitamanchas y aspirado industrial (hasta 15 m² por hab.)
                  </p>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5">
                    <div className="flex justify-between">
                      <span>1 habitación</span>
                      <span className="tabular-nums font-semibold">$50.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2 habitaciones</span>
                      <span className="tabular-nums font-semibold">$80.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3 habitaciones</span>
                      <span className="tabular-nums font-semibold">$110.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4 habitaciones</span>
                      <span className="tabular-nums font-semibold">$140.000</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#8D8C86] mt-1">
                    1ª hab. $50.000 · siguientes $30.000 c/u
                  </p>
                </div>

                {/* Decapado */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Decapado de piso flotante</span>
                    <a
                      href={getWhatsAppUrl('decapado')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-decapado"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5">
                    <div className="flex justify-between">
                      <span>Mantenimiento</span>
                      <span className="tabular-nums font-semibold">$4.500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tráfico moderado</span>
                      <span className="tabular-nums font-semibold">$5.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Muy sucio</span>
                      <span className="tabular-nums font-semibold">$5.500</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#8D8C86] mt-1.5 leading-snug">
                    Tarifa según nivel de suciedad · mínimo 25 m². El decapado es una técnica de limpieza, no de reparación. Envía una foto del sector más sucio y te damos el valor exacto.
                  </p>
                </div>

                {/* Alfombras decorativas */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Alfombras decorativas</span>
                    <a
                      href={getWhatsAppUrl('alfombrasDecorativas')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-alfombras-decorativas"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <p className="text-xs text-[#8D8C86]">
                    Valor según medidas: el cliente envía las medidas para cotizar.
                  </p>
                </div>
              </div>
            </div>
          </m.article>

          {/* Card 03: Cocina */}
          <m.article
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className="rounded-2xl md:rounded-3xl p-6 md:p-7 bg-[#1E1E1E] hover:bg-[#232323] transition-colors border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <img
                  src="/photos/cocina.webp"
                  alt="Limpieza de cocina y desengrasado de horno"
                  className="w-12 h-12 rounded-full object-cover border border-white/10 saturate-90"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <span className="text-sm font-mono text-[#8D8C86]">03</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#EFEBDD] mb-4">
                Cocina
              </h3>

              <div className="space-y-4 text-[14px]">
                {/* Cocina Full Desocupada */}
                <div className="border-b border-white/5 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Cocina full desocupada</span>
                    <a
                      href={getWhatsAppUrl('cocina')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-cocina"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <div className="text-xs text-[#EFEBDD]/90 space-y-0.5 mb-2">
                    <div className="flex justify-between">
                      <span>Tipo americana</span>
                      <span className="tabular-nums font-semibold">$90.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cocina cerrada</span>
                      <span className="tabular-nums font-semibold">$120.000</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#8D8C86] font-medium mb-1">Incluye:</p>
                  <ul className="text-[11px] text-[#EFEBDD]/75 space-y-0.5">
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#EFEBDD] shrink-0" />
                      <span>Horno, campana y encimera</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#EFEBDD] shrink-0" />
                      <span>Muebles por dentro y por fuera</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#EFEBDD] shrink-0" />
                      <span>Cerámica y limpieza básica de piso</span>
                    </li>
                  </ul>
                </div>

                {/* Horno y Campana */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[#EFEBDD]">Horno y campana</span>
                    <a
                      href={getWhatsAppUrl('horno')}
                      target="_blank"
                      rel="noopener"
                      data-cta="servicio-horno"
                      className="text-xs text-[#EFEBDD]/70 hover:text-[#EFEBDD] underline underline-offset-2 flex items-center gap-1"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                  <div className="flex justify-between text-xs text-[#EFEBDD]/90 mb-1.5">
                    <span>Desengrasado completo</span>
                    <span className="tabular-nums font-semibold">$65.000</span>
                  </div>
                  <p className="text-[11px] text-[#8D8C86] leading-snug">
                    Cajón del horno, bandeja negra, tapa del horno, filtros y exterior de campana (no incluye rejilla tipo parrilla).
                  </p>
                </div>
              </div>
            </div>
          </m.article>

          {/* Card 04: Pre y Post Mudanza (spans 3 cols on desktop) */}
          <m.article
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-3 rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#1E1E1E] hover:bg-[#232323] transition-colors border border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            <div className="w-full md:w-44 h-40 md:h-full shrink-0 overflow-hidden rounded-xl md:rounded-2xl border border-white/10">
              <img
                src="/photos/mudanza.webp"
                alt="Limpieza profunda de departamento pre y post mudanza"
                className="w-full h-full object-cover saturate-90"
                width={176}
                height={160}
                loading="lazy"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#EFEBDD]">
                    Pre y post mudanza
                  </h3>
                  <span className="text-sm font-mono text-[#8D8C86]">04</span>
                </div>

                <p className="text-[15px] font-semibold text-[#EFEBDD] mb-2">
                  Cotización a medida
                </p>

                <p className="text-xs sm:text-[13px] text-[#8D8C86] mb-3 leading-relaxed">
                  Para cotizar necesitamos: cantidad de habitaciones, cantidad de baños (y si tienen showerdoor), fotos o video del inmueble.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/5 text-xs text-[#EFEBDD]/80">
                  <Check className="w-3.5 h-3.5 text-[#EFEBDD]" />
                  <span>Trabajamos en inmuebles desocupados</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 flex items-center justify-end">
              <PrimaryButton
                href={getWhatsAppUrl('mudanza')}
                data-cta="servicio-mudanza"
                className="w-full md:w-auto justify-center"
              >
                Cotizar mudanza
              </PrimaryButton>
            </div>
          </m.article>
        </div>

        {/* Section Footnote */}
        <div className="mt-8 pt-4 border-t border-white/5 text-center sm:text-left">
          <p className="text-[13px] text-[#8D8C86]">
            Inmuebles y cocinas ocupados tienen un valor extra por mover muebles y dejarlos en su lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
