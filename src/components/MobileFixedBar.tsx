import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, getWhatsAppUrl } from '../data/content';
import { m, AnimatePresence } from 'motion/react';

interface MobileFixedBarProps {
  finalCtaInView?: boolean;
}

export function MobileFixedBar({ finalCtaInView = false }: MobileFixedBarProps) {
  const [heroOutOfView, setHeroOutOfView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 85% of window height (past the hero)
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.8;
      setHeroOutOfView(scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = heroOutOfView && !finalCtaInView;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden h-16 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 px-4 flex items-center justify-between gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.5)]"
        >
          {/* WhatsApp Primary Button */}
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener"
            data-cta="bar-mobile-whatsapp"
            className="flex-1 flex items-center justify-center gap-2 h-11 bg-[#EFEBDD] text-[#0A0A0A] rounded-full font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            {/* Dedicated 8px green dot indicator */}
            <span
              className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"
              aria-hidden="true"
            />
            <WhatsAppIcon className="w-4 h-4 text-[#0A0A0A]" />
            <span>WhatsApp</span>
          </a>

          {/* Call Secondary Button */}
          <a
            href={BUSINESS_DATA.phoneUrl}
            data-cta="bar-mobile-llamar"
            className="flex items-center justify-center gap-2 h-11 px-5 bg-[#1E1E1E] text-[#EFEBDD] border border-white/10 rounded-full font-semibold text-sm active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#EFEBDD]" />
            <span>Llamar</span>
          </a>
        </m.div>
      )}
    </AnimatePresence>
  );
}
