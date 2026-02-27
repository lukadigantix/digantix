'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import { Scene } from '@/components/ui/neon-raymarcher';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LetsWorkTogether } from '@/components/ui/lets-work-section';
import TeamCarousel from '@/components/sections/TeamCarousel';
import { motion } from 'motion/react';

export default function AboutUsPage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const whiteSection = document.getElementById('white-section');
      const teamSection = document.getElementById('team-section');
      const blackSection = document.getElementById('black-section');
      
      const whiteSectionRect = whiteSection?.getBoundingClientRect();
      const teamSectionRect = teamSection?.getBoundingClientRect();
      const blackSectionRect = blackSection?.getBoundingClientRect();
      
      // If black section (Contact Us) is at or near the top, switch to dark mode
      if (blackSectionRect && blackSectionRect.top <= 100) {
        setIsDark(true);
      }
      // If white section or team section is visible, keep light mode
      else if (
        (whiteSectionRect && whiteSectionRect.top <= 100 && whiteSectionRect.bottom > 100) ||
        (teamSectionRect && teamSectionRect.top <= 100 && teamSectionRect.bottom > 100)
      ) {
        setIsDark(false);
      }
      // For the first black section at the top
      else {
        setIsDark(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header dark={isDark} />
      
      <div className="relative min-h-[85vh] sm:min-h-0 bg-black text-white overflow-hidden">
        <WebGLShader />
        
        <div className="relative mx-auto w-full px-0 sm:px-6 lg:w-[85%] pt-24 sm:pt-32 pb-16 sm:pb-20" style={{ maxWidth: '1500px' }}>
          <div className="my-12 sm:my-20 lg:my-30">
            {/* About us label */}
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 px-4 sm:px-0"
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
              About us
            </motion.p>
            
            {/* Main heading */}
            <motion.h1 
              className="font-normal leading-tight mb-8 sm:mb-12 max-w-5xl text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] px-4 sm:px-0" 
              style={{ letterSpacing: '-0.05em' }}
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
            We are <span className="text-[#C388F8]">Digantix</span>. A digital design and development company
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-gray-300 max-w-3xl mb-16 sm:mb-24 leading-relaxed font-light text-sm sm:text-base lg:text-lg px-4 sm:px-0"
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
            We help our clients build their brand identity, and design, develop, launch, and support their 
            digital products. Working with startups and enterprises from all over the world.
          </motion.p>
          
          {/* Statistics */}
          <motion.div 
            className="hidden sm:flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-0"
            initial={{ 
              opacity: 0,
              clipPath: 'inset(0 0 0 100%)'
            }}
            animate={{ 
              opacity: 1,
              clipPath: 'inset(0 0 0 0%)'
            }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.45 }}
          >
            <div>
              <div className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-4">150+</div>
              <p className="text-gray-400 text-sm sm:text-base">team members</p>
            </div>
            <div>
              <div className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-4">500+</div>
              <p className="text-gray-400 text-sm sm:text-base">completed projects</p>
            </div>
            <div>
              <div className="text-2xl sm:text-5xl font-bold mb-3 sm:mb-4">19 years</div>
              <p className="text-gray-400 text-sm sm:text-base">in the business</p>
            </div>
          </motion.div>
          </div>
        </div>
      </div>

      {/* White Section - Companies hire us */}
      <div id="white-section" className="min-h-screen bg-white text-black">
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: '1500px' }}>
          {/* Label */}
          <p className="text-gray-500 text-lg sm:text-xl lg:text-[22px] mb-2 px-4 sm:px-0">Companies hire us</p>
          
          {/* Section Title */}
          <h2 className="font-normal leading-tight mb-16 sm:mb-24 text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] px-4 sm:px-0" style={{ letterSpacing: '-0.05em' }}>
            When it's time for a key change
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-0">
            {/* Left Side - Text Content */}
            <div className="space-y-8 sm:space-y-12">
              {/* Reinvention */}
              <div>
                <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4">Reinvention</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  When businesses outgrow their markets and need to scale, we provide solutions for this growth and expansion. Our team brings expertise in technical infrastructure, user experience optimization, and strategic planning to ensure your digital presence grows alongside your ambitions.
                </p>
              </div>

              {/* Transformation */}
              <div>
                <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4">Transformation</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  When established brands search for ways to reinvent themselves for the modern internet culture while maintaining their personality. We modernize your digital touchpoints while preserving the core identity that made your brand successful, balancing innovation with brand heritage.
                </p>
              </div>

              {/* Breakthrough */}
              <div>
                <h3 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-4">Breakthrough</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  We help startup first-timers design and build their product, roll it out, and get funded. From initial concept to market launch, we provide end-to-end support including product strategy, development, and investor-ready presentations.
                </p>
              </div>
            </div>

            {/* Right Side - 3D Element */}
            <div className="flex items-center justify-center hidden lg:flex">
              <div className="w-full max-w-[400px] sm:max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px]">
                <Scene />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Carousel Section */}
      <TeamCarousel />

      {/* Black Section - Let's Work Together */}
      <div id="black-section" className="min-h-screen bg-black text-white">
        <LetsWorkTogether />
      </div>
    </>
  );
}
