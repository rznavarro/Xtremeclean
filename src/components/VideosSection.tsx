import React, { useState } from 'react';
import { Play, Instagram } from 'lucide-react';
import { VIDEO_SHORTS, BUSINESS_DATA } from '../data/content';
import { m } from 'motion/react';

export function VideosSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section
      id="videos"
      aria-labelledby="videos-titulo"
      className="relative w-full py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#F5F2EA] text-[#121212] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-10 md:mb-14">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-bold text-[#5E5E5A] block mb-3">
            Demostración real
          </span>
          <h2
            id="videos-titulo"
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#121212]"
          >
            Míranos trabajar.
          </h2>
        </div>

        {/* 7 Vertical Cards Carousel (9:16) */}
        <div className="flex gap-4 md:gap-5 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {VIDEO_SHORTS.map((short, idx) => {
            const isPlaying = activeVideoId === short.id;

            return (
              <m.div
                key={short.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-[70vw] sm:w-[240px] md:w-[220px] aspect-[9/16] shrink-0 snap-start rounded-2xl md:rounded-3xl overflow-hidden bg-black relative border border-black/[0.08] shadow-md group"
              >
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${short.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`Video demostración de limpieza: ${short.label}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveVideoId(short.id)}
                    aria-label={`Reproducir video de ${short.label}`}
                    className="w-full h-full text-left relative block focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {/* YouTube High-Quality Thumbnail */}
                    <img
                      src={`https://i.ytimg.com/vi/${short.youtubeId}/hqdefault.jpg`}
                      alt={`Miniatura del video de limpieza de ${short.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-200">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Label Tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-sm font-bold text-white tracking-tight drop-shadow">
                        {short.label}
                      </span>
                      <span className="text-[11px] font-mono text-white/70 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        YouTube
                      </span>
                    </div>
                  </button>
                )}
              </m.div>
            );
          })}
        </div>

        {/* Bottom Instagram Link */}
        <div className="mt-8 pt-4 flex items-center justify-center">
          <a
            href={BUSINESS_DATA.socials.instagram}
            target="_blank"
            rel="noopener"
            data-cta="videos-instagram"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5E5E5A] hover:text-[#121212] transition-colors py-2 px-4 rounded-full border border-black/10 hover:border-black/30 bg-white"
          >
            <Instagram className="w-4 h-4 text-[#121212]" />
            <span>Más en Instagram @xtremeclean.cl</span>
          </a>
        </div>
      </div>
    </section>
  );
}
