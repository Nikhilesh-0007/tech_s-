import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-heading font-semibold text-sm transition-all duration-300 rounded-[8px] px-6 py-3 cursor-pointer select-none active:scale-98 focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-green text-white hover:bg-deep-green shadow-sm",
    secondary: "bg-white text-primary-green border border-border-green hover:bg-light-green hover:border-primary-green",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
