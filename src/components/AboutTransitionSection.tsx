import React, { useRef, useState, useEffect } from 'react';
import { WordsPullUpMultiStyle, ScrollRevealText } from './TypographyAnimations';
import { SecondaryLink } from './Buttons';
import { getWhatsAppUrl } from '../data/content';
import { m, useScroll, useTransform } from 'motion/react';

interface AboutTransitionSectionProps {
  onBgColorChange?: (color: any) => void;
}

export function AboutTransitionSection({}: AboutTransitionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  // Background and color transforms
  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['#F5F2EA', '#F5F2EA'] : ['#0A0A0A', '#F5F2EA']
  );
  const cardBg = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['#FFFFFF', '#FFFFFF'] : ['#141414', '#FFFFFF']
  );
  const cardBorder = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion
      ? ['rgba(10,10,10,0.08)', 'rgba(10,10,10,0.08)']
      : ['rgba(255,255,255,0.05)', 'rgba(10,10,10,0.08)']
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['#121212', '#121212'] : ['#EFEBDD', '#121212']
  );
  const tagColor = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['#5E5E5A', '#5E5E5A'] : ['#8D8C86', '#5E5E5A']
  );

  return (
    <m.section
      id="quienes-somos"
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      aria-labelledby="quienes-somos-titulo"
      className="relative w-full py-24 md:py-40 px-4 sm:px-6 lg:px-8 transition-colors duration-150"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Central Card */}
        <m.div
          style={{
            backgroundColor: cardBg,
            borderColor: cardBorder,
          }}
          className="rounded-2xl md:rounded-[32px] p-8 sm:p-12 md:p-16 lg:p-20 border shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300"
        >
          {/* Label */}
          <m.span
            style={{ color: tagColor }}
            className="inline-block text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold mb-6"
          >
            Quiénes somos
          </m.span>

          {/* Multi-style Headline */}
          <m.h2
            id="quienes-somos-titulo"
            style={{ color: textColor }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium tracking-[-0.02em] leading-[1.18] mb-8"
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Somos especialistas en limpieza, ' },
                {
                  text: 'atendidos por su dueño ',
                  className: 'font-serif italic font-normal',
                },
                { text: 'y con maquinaria industrial para cada tarea.' },
              ]}
            />
          </m.h2>

          {/* Scroll Reveal Paragraph */}
          <div className="max-w-3xl mb-10">
            <ScrollRevealText
              text="Atendemos domicilios particulares, oficinas y locales comerciales. Nuestro equipo trabaja con máquinas industriales y productos nacionales e importados, se adapta a tu horario y se esfuerza por tu satisfacción en cada servicio."
              className="text-base sm:text-lg md:text-[20px] font-normal leading-[1.6] text-inherit"
            />
          </div>

          {/* Secondary CTA */}
          <div className="pt-2">
            <SecondaryLink
              href={getWhatsAppUrl('general')}
              data-cta="quienes-somos-whatsapp"
              variant="ink"
            >
              Escríbenos por WhatsApp
            </SecondaryLink>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}
