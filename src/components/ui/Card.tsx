import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[12px] border border-border-green/60 p-6 md:p-8 shadow-premium-green transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-primary-green hover:shadow-[0_15px_40px_rgba(0,106,47,0.12)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
