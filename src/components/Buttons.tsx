import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'cream' | 'dark';
  children?: React.ReactNode;
  'data-cta': string;
  className?: string;
  showIcon?: boolean;
}

export function PrimaryButton({
  href,
  variant = 'cream',
  children = 'Cotizar por WhatsApp',
  'data-cta': dataCta,
  className = '',
  showIcon = true,
  ...props
}: PrimaryButtonProps) {
  const isDark = variant === 'dark';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      data-cta={dataCta}
      className={`group inline-flex items-center justify-between min-h-[48px] rounded-full pl-6 pr-1.5 py-1.5 text-[15px] font-bold tracking-tight transition-all duration-200 hover:pr-2.5 active:scale-[0.98] ${
        isDark
          ? 'bg-[#121212] text-[#EFEBDD] hover:bg-black border border-white/10'
          : 'bg-[#EFEBDD] text-[#0A0A0A] hover:bg-white'
      } ${className}`}
      {...props}
    >
      <span className="mr-3 whitespace-nowrap">{children}</span>
      {showIcon && (
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-200 group-hover:scale-110 shrink-0 ${
            isDark ? 'bg-[#EFEBDD] text-[#121212]' : 'bg-[#0A0A0A] text-[#EFEBDD]'
          }`}
        >
          <WhatsAppIcon className="w-5 h-5" />
        </span>
      )}
    </a>
  );
}

interface SecondaryLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  'data-cta'?: string;
  className?: string;
  variant?: 'cream' | 'ink';
}

export function SecondaryLink({
  href,
  children,
  'data-cta': dataCta,
  className = '',
  variant = 'cream',
  ...props
}: SecondaryLinkProps) {
  const colorClass =
    variant === 'cream'
      ? 'text-[#EFEBDD]/80 hover:text-[#EFEBDD] decoration-[#EFEBDD]/40 hover:decoration-[#EFEBDD]'
      : 'text-[#121212]/80 hover:text-[#121212] decoration-[#121212]/30 hover:decoration-[#121212]';

  return (
    <a
      href={href}
      data-cta={dataCta}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-medium underline underline-offset-4 transition-colors min-h-[44px] ${colorClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
