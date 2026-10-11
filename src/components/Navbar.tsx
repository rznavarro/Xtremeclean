import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_DATA, getWhatsAppUrl } from '../data/content';
import { m, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onQuoteClick?: () => void;
}

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cómo trabajamos', href: '#como-trabajamos' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Preguntas', href: '#preguntas' },
  ];

  return (
    <>
      {/* Hanging Navbar Container */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
        {/* Desktop Navbar */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 px-6 py-2.5 bg-[#0A0A0A]/90 backdrop-blur-md border-x border-b border-white/10 rounded-b-2xl shadow-2xl pointer-events-auto"
        >
          <a
            href="#"
            className="text-[13px] font-extrabold tracking-tight text-[#EFEBDD] mr-2 hover:opacity-80 transition-opacity"
          >
            XTREMECLEAN
          </a>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-[#EFEBDD]/80 hover:text-[#EFEBDD] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener"
            data-cta="navbar-cotizar"
            onClick={onQuoteClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#EFEBDD] text-[#0A0A0A] rounded-full text-[13px] font-bold tracking-tight hover:bg-white active:scale-95 transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Cotizar</span>
          </a>
        </nav>

        {/* Mobile Navbar Pill */}
        <div className="flex md:hidden items-center justify-between w-full max-w-sm px-4 py-2 bg-[#0A0A0A]/90 backdrop-blur-md border-x border-b border-white/10 rounded-b-2xl shadow-xl pointer-events-auto">
          <a
            href="#"
            className="text-[12px] font-extrabold tracking-tight text-[#EFEBDD]"
          >
            XTREMECLEAN
          </a>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener"
              data-cta="navbar-mobile-cotizar"
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#EFEBDD] text-[#0A0A0A] rounded-full text-[12px] font-bold tracking-tight hover:bg-white transition-colors"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>Cotizar</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
              className="p-1.5 text-[#EFEBDD] hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#EFEBDD] flex flex-col justify-between p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-extrabold tracking-tight text-[#EFEBDD]">
                XTREMECLEAN
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-2 text-[#EFEBDD]/80 hover:text-[#EFEBDD] transition-colors rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 my-auto py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-medium tracking-tight text-[#EFEBDD]/90 hover:text-[#EFEBDD] active:scale-95 transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener"
                data-cta="menu-mobile-whatsapp"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#EFEBDD] text-[#0A0A0A] rounded-full text-base font-bold shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Escríbenos por WhatsApp</span>
              </a>

              <a
                href={BUSINESS_DATA.phoneUrl}
                data-cta="menu-mobile-call"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1A1A1A] text-[#EFEBDD] border border-white/10 rounded-full text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar al {BUSINESS_DATA.phone}</span>
              </a>

              <p className="text-xs text-[#EFEBDD]/50 text-center mt-1">
                {BUSINESS_DATA.schedule}
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
