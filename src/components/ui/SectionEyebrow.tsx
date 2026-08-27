import React from 'react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionEyebrow({ children, className = '', dark = false }: SectionEyebrowProps) {
  return (
    <span className={`inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 ${dark ? 'text-fresh-green' : 'text-primary-green'} ${className}`}>
      {children}
    </span>
  );
}
