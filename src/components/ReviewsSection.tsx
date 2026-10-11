import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS, BUSINESS_DATA, getWhatsAppUrl } from '../data/content';
import { PrimaryButton, SecondaryLink } from './Buttons';
import { m } from 'motion/react';

export function ReviewsSection() {
  const [featuredReview, ...otherReviews] = REVIEWS;

  return (
    <section
      id="resenas"
      aria-labelledby="resenas-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#121212]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#5E5E5A] block mb-3">
              Opiniones reales
            </span>
            <h2
              id="resenas-titulo"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#121212]"
            >
              Lo que dicen nuestros clientes.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[#5E5E5A]">
              {BUSINESS_DATA.reviewCount}
            </span>
            <span aria-hidden="true" className="text-[#5E5E5A]">·</span>
            <SecondaryLink
              href={BUSINESS_DATA.mapUrl}
              target="_blank"
              rel="noopener"
              data-cta="resenas-google-maps"
              variant="ink"
              className="text-xs sm:text-sm"
            >
              Ver en Google Maps
            </SecondaryLink>
          </div>
        </div>

        {/* Featured Review (Omar) */}
        <m.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl md:rounded-3xl p-7 sm:p-10 md:p-12 bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.04)] mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-1.5 mb-6 text-[#121212]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#121212] mb-8">
            &ldquo;{featuredReview.text}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 border-t border-black/[0.06] pt-6">
            <div className="w-12 h-12 rounded-full bg-[#121212] text-[#EFEBDD] flex items-center justify-center font-bold text-sm tracking-wide shrink-0">
              {featuredReview.initials}
            </div>
            <div>
              <p className="font-bold text-base text-[#121212]">
                {featuredReview.name}
              </p>
              <p className="text-xs text-[#5E5E5A] font-mono">
                {featuredReview.date} · Reseña en Google
              </p>
            </div>
          </div>
        </m.article>

        {/* Other 5 Reviews: 2-column grid on desktop, scroll-snap carousel on mobile */}
        <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {otherReviews.map((rev, idx) => (
            <m.article
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center rounded-2xl md:rounded-3xl p-6 sm:p-7 bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#121212]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <blockquote className="text-[15px] sm:text-base text-[#121212] leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 border-t border-black/[0.06] pt-4 mt-auto">
                <div className="w-9 h-9 rounded-full bg-[#121212] text-[#EFEBDD] flex items-center justify-center font-bold text-xs shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#121212]">
                    {rev.name}
                  </p>
                  <p className="text-[11px] text-[#5E5E5A] font-mono">
                    {rev.date} · Google
                  </p>
                </div>
              </div>
            </m.article>
          ))}
        </div>

        {/* CTA after reviews */}
        <div className="mt-14 md:mt-16 text-center flex justify-center">
          <PrimaryButton
            href={getWhatsAppUrl('general')}
            data-cta="resenas-whatsapp"
            variant="dark"
          >
            Cotizar por WhatsApp
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
