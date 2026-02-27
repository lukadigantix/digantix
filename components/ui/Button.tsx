'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  if (variant === 'primary') {
    return (
      <button 
        className={`group relative flex items-center gap-1 overflow-hidden rounded-[100px] bg-black ${sizes[size]} font-medium text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95] ${className}`}
        {...props}
      >
        {/* Left arrow */}
        <ArrowRight 
          className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
        />

        {/* Text */}
        <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
          {children}
        </span>

        {/* Circle with purple color on hover */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#C388F8] rounded-[50%] opacity-0 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

        {/* Right arrow */}
        <ArrowRight 
          className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
        />
      </button>
    );
  }

  // Fallback for other variants
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-900',
    secondary: 'bg-white text-black border border-black hover:bg-gray-50 focus:ring-gray-900',
    outline: 'bg-transparent text-black border border-gray-300 hover:border-black focus:ring-gray-900',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
