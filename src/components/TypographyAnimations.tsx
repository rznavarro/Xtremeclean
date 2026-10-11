import React, { useRef, useEffect, useState } from 'react';
import { m, useInView, useScroll, useTransform } from 'motion/react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  asterisk?: boolean;
  onAsteriskClick?: () => void;
}

export function WordsPullUp({
  text,
  className = '',
  asterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const words = text.split(' ');

  if (reducedMotion) {
    return (
      <div className={className}>
        {text}
        {asterisk && (
          <sup className="text-[0.6em] ml-0.5 select-none text-[#EFEBDD]/70">*</sup>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.25em] ${className}`}
    >
      {words.map((word, index) => {
        const isLast = index === words.length - 1;
        return (
          <span key={index} className="inline-block overflow-hidden py-1">
            <m.span
              className="inline-block"
              initial={{ y: 24, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {isLast && asterisk && (
                <sup className="text-[0.6em] ml-0.5 select-none text-[#EFEBDD]/70">*</sup>
              )}
            </m.span>
          </span>
        );
      })}
    </div>
  );
}

interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  let cumulativeIndex = 0;

  if (reducedMotion) {
    return (
      <div className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.className}>
            {seg.text}{' '}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.25em] ${className}`}
    >
      {segments.map((seg, segIdx) => {
        const words = seg.text.split(' ').filter(Boolean);
        return words.map((word, wordIdx) => {
          const currentIndex = cumulativeIndex++;
          return (
            <span key={`${segIdx}-${wordIdx}`} className="inline-block overflow-hidden py-0.5">
              <m.span
                className={`inline-block ${seg.className || ''}`}
                initial={{ y: 24, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{
                  duration: 0.65,
                  delay: currentIndex * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </m.span>
            </span>
          );
        });
      })}
    </div>
  );
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  if (reducedMotion) {
    return <p className={className}>{text}</p>;
  }

  // Mobile: words. Desktop: characters
  const tokens = isMobile ? text.split(' ') : text.split('');
  const totalTokens = tokens.length;

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {tokens.map((token, index) => {
        const start = (index / totalTokens) * 0.8;
        const end = start + 0.15;
        return (
          <TokenReveal
            key={index}
            token={token}
            progress={scrollYProgress}
            range={[start, end]}
            isWord={isMobile}
          />
        );
      })}
    </p>
  );
}

function TokenReveal({
  token,
  progress,
  range,
  isWord,
}: {
  token: string;
  progress: any;
  range: [number, number];
  isWord: boolean;
}) {
  const opacity = useTransform(progress, [range[0], range[1]], [0.2, 1]);

  return (
    <m.span style={{ opacity }} className="inline">
      {token}
      {isWord ? ' ' : ''}
    </m.span>
  );
}
