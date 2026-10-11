import React from 'react';
import { ShieldCheck, CreditCard, Clock, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

export function TrustStrip() {
  const items = [
    {
      icon: ShieldCheck,
      text: 'Garantía de 3 días',
    },
    {
      icon: CreditCard,
      text: 'Aceptamos todas las tarjetas',
    },
    {
      icon: Clock,
      text: BUSINESS_DATA.schedule,
    },
    {
      icon: MapPin,
      text: 'Av. Apoquindo 6410, Las Condes',
      href: BUSINESS_DATA.mapUrl,
    },
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#0E0E0E] py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-6 md:gap-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-2.5 whitespace-nowrap text-[13px] text-[#EFEBDD]/80 font-medium shrink-0">
              <Icon className="w-4 h-4 text-[#EFEBDD] shrink-0" />
              <span>{item.text}</span>
            </div>
          );

          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block w-px h-4 bg-white/10 shrink-0"
                />
              )}
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#EFEBDD] transition-colors focus-visible:rounded"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
