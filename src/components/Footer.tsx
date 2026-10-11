import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { BUSINESS_DATA, getWhatsAppUrl } from '../data/content';

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 00-.86-.06 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34c3.4 0 6.18-2.68 6.33-6.04V8.69a8.18 8.18 0 004.78 1.52V6.76c-.34 0-.68-.02-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Servicios y Precios', href: '#servicios' },
    { name: 'Cómo trabajamos', href: '#como-trabajamos' },
    { name: 'Garantía', href: '#como-trabajamos' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Videos de trabajos', href: '#videos' },
    { name: 'Zona de cobertura', href: '#cobertura' },
    { name: 'Preguntas frecuentes', href: '#preguntas' },
  ];

  return (
    <footer
      aria-label="Pie de página"
      className="w-full bg-[#0A0A0A] text-[#EFEBDD] border-t border-white/10 pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Logo on Cream Surface */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="inline-flex items-center justify-center p-2.5 bg-[#EFEBDD] rounded-xl w-fit shadow-md">
              <img
                src="/logos/logo.png"
                alt="Xtremeclean Logotipo"
                className="h-9 w-auto object-contain"
                width={120}
                height={36}
              />
            </div>

            <p className="text-sm text-[#8D8C86] leading-relaxed max-w-sm mt-1">
              Limpieza profunda a domicilio en Las Condes y el sector oriente de Santiago. Especialistas en tapices, alfombras, decapado de piso flotante y cocinas.
            </p>

            <p className="text-xs text-[#EFEBDD]/70 font-medium">
              {BUSINESS_DATA.paymentText}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase font-mono tracking-wider text-[#8D8C86] mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-[#EFEBDD]/80 hover:text-[#EFEBDD] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <p className="text-xs uppercase font-mono tracking-wider text-[#8D8C86] mb-1">
              Contacto y atención
            </p>

            <div className="flex items-start gap-2.5 text-sm text-[#EFEBDD]/80">
              <MapPin className="w-4 h-4 text-[#EFEBDD] shrink-0 mt-0.5" />
              <a
                href={BUSINESS_DATA.mapUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                {BUSINESS_DATA.address}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-[#EFEBDD]/80">
              <Clock className="w-4 h-4 text-[#EFEBDD] shrink-0 mt-0.5" />
              <span>{BUSINESS_DATA.schedule}</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-[#EFEBDD]/80">
              <Phone className="w-4 h-4 text-[#EFEBDD] shrink-0" />
              <a href={BUSINESS_DATA.phoneUrl} className="hover:text-white">
                {BUSINESS_DATA.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-[#EFEBDD]/80">
              <Mail className="w-4 h-4 text-[#EFEBDD] shrink-0" />
              <a href={BUSINESS_DATA.emailUrl} className="hover:text-white">
                {BUSINESS_DATA.email}
              </a>
            </div>

            {/* Social Networks */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={BUSINESS_DATA.socials.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram de Xtremeclean"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#EFEBDD] hover:bg-white hover:text-black transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_DATA.socials.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook de Xtremeclean"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#EFEBDD] hover:bg-white hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_DATA.socials.youtube}
                target="_blank"
                rel="noopener"
                aria-label="YouTube de Xtremeclean"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#EFEBDD] hover:bg-white hover:text-black transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_DATA.socials.tiktok}
                target="_blank"
                rel="noopener"
                aria-label="TikTok de Xtremeclean"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#EFEBDD] hover:bg-white hover:text-black transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_DATA.socials.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn de Xtremeclean"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#EFEBDD] hover:bg-white hover:text-black transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D8C86]">
          <p>© {currentYear} Xtremeclean. Todos los derechos reservados.</p>
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener"
            className="hover:text-[#EFEBDD] transition-colors"
          >
            Cotizaciones directas por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
