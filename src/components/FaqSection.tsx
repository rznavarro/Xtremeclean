import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';
import { m, AnimatePresence } from 'motion/react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas"
      aria-labelledby="faq-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#121212] border-t border-black/[0.06]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16 text-center sm:text-left">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#5E5E5A] block mb-3">
            Dudas comunes
          </span>
          <h2
            id="faq-titulo"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#121212]"
          >
            Preguntas frecuentes.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5E5E5A]">
            Condiciones de servicio claras y transparentes.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={index} className="py-2">
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 flex items-center justify-between text-left text-base sm:text-lg font-semibold text-[#121212] hover:text-black transition-colors focus-visible:outline-2 focus-visible:outline-[#121212] focus-visible:outline-offset-4 rounded-sm"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5E5E5A] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#121212]' : ''
                      }`}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pt-1 text-[15px] sm:text-base text-[#5E5E5A] leading-relaxed">
                        {faq.answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
