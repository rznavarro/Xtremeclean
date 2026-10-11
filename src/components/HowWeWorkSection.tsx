import React, { useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { getWhatsAppUrl } from '../data/content';
import { m, useScroll, useTransform } from 'motion/react';

export function HowWeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      num: '01',
      title: 'Escríbenos',
      desc: 'Cuéntanos qué necesitas limpiar por WhatsApp. Si nos envías fotos o medidas, te damos un valor exacto.',
    },
    {
      num: '02',
      title: 'Recibe tu cotización',
      desc: 'Te confirmamos el precio y lo que incluye. La limpieza es focalizada: solo lo cotizado, y puedes sumar ítems previo acuerdo.',
    },
    {
      num: '03',
      title: 'Agendamos',
      desc: 'Coordinamos el día y la hora que te acomode. Te pedimos tener el área despejada: nuestros operarios no mueven muebles ni objetos pesados.',
    },
    {
      num: '04',
      title: 'Limpiamos con garantía',
      desc: 'Trabajamos con maquinaria industrial. Si una mancha reaparece dentro de 3 días post secado, volvemos sin costo.',
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'center center'],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="como-trabajamos"
      ref={containerRef}
      aria-labelledby="como-trabajamos-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#121212]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-14 md:mb-20">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#5E5E5A] block mb-3">
            Cómo trabajamos
          </span>
          <h2
            id="como-trabajamos-titulo"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#121212]"
          >
            Así de simple.
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="relative mb-20">
          {/* Scroll-linked progress line in desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-px bg-black/10 z-0">
            <m.div
              style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
              className="h-full bg-black/40"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
            {steps.map((step, idx) => (
              <m.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-serif italic text-[#121212] select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#121212] mb-2">
                  {step.title}
                </h3>

                <p className="text-[14px] text-[#5E5E5A] leading-relaxed">
                  {step.desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Prominent Guarantee Block */}
        <m.div
          id="garantia"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl md:rounded-3xl bg-[#121212] text-[#EFEBDD] p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-black"
        >
          <div className="flex items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
              <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#EFEBDD]" />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8D8C86] mb-1">
                Garantía oficial
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#EFEBDD] mb-1.5">
                Garantía de 3 días post secado
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#EFEBDD]/70 max-w-xl">
                Si la mancha reaparece, vamos nuevamente a limpiarla sin costo.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex items-center justify-start md:justify-end">
            <PrimaryButton
              href={getWhatsAppUrl('general')}
              data-cta="garantia-whatsapp"
              className="w-full md:w-auto justify-center"
            >
              Cotizar con garantía
            </PrimaryButton>
          </div>
        </m.div>
      </div>
    </section>
  );
}
