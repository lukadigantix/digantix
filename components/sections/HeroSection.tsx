'use client';

import Button from '@/components/ui/Button';
import { Waves } from '@/components/ui/wave-background';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref = '#contact',
}: HeroSectionProps) {
  return (
    <section className="relative px-0 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="mx-auto w-full px-4 sm:px-0 sm:w-[90%] lg:w-[85%]" style={{ maxWidth: '1500px' }}>
        {/* Content Container */}
        <div className="flex flex-col items-start max-w-4xl my-12 sm:my-20 lg:my-30">
          {/* Main Heading */}
          <motion.h1 
            className="font-normal leading-tight tracking-tight text-black mb-4 sm:mb-6 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]" 
            style={{ letterSpacing:'-0.05em', maxWidth: '100%' }}
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-lg leading-relaxed mb-10 sm:mb-8 max-w-2xl font-light" 
            style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="w-full sm:w-auto"
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => {
                if (ctaHref.startsWith('#')) {
                  const element = document.querySelector(ctaHref);
                  element?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = ctaHref;
                }
              }}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave Background - Full Width Container */}
      <div className="mx-auto mt-8 sm:mt-12 lg:mt-20 relative w-full sm:w-[95%] lg:w-[90%] pointer-events-none sm:pointer-events-auto" style={{ maxWidth: '1700px', height: 'clamp(300px, 50vw, 500px)' }}>
        <Waves className="h-full w-full rounded-none sm:rounded-2xl lg:rounded-3xl" />
      </div>
    </section>
  );
}
