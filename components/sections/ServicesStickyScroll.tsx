'use client';

import { useEffect, useRef, useState } from 'react';

interface ServiceStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

interface ServicesStickyScrollProps {
  heading?: string;
  steps?: ServiceStep[];
}

const defaultSteps: ServiceStep[] = [
  {
    number: "01",
    label: "Websites and Platforms",
    title: "Fast and responsive websites",
    description: "In our team, developers work alongside designers from day one. This collaborative approach is crucial in creating fast, responsive websites that excite your audience and drive engagement. We build scalable platforms that grow with your business, ensuring exceptional performance and user experience across all devices."
  },
  {
    number: "02",
    label: "Mobile Applications",
    title: "Perfectly suited mobile apps",
    description: "Digantix doesn't do cookie-cutter solutions. Every mobile app we create involves comprehensive stages of target audience research, user testing, and prototype validation. The result? A product that's perfectly suited to your users' needs, delivering value from the first interaction and built to scale as your user base grows."
  },
  {
    number: "03",
    label: "Strategy and Branding",
    title: "Get your brand noticed",
    description: "We identify and amplify your brand by developing compelling logos, corporate identities, comprehensive user manuals, engaging mockups, and distinctive souvenir products. Whatever it takes to get your brand noticed and remembered. Our strategic approach ensures your brand stands out in crowded markets and resonates with your target audience."
  },
  {
    number: "04",
    label: "Motion Design",
    title: "Engaging animations that bring stories to life",
    description: "We bring your brand to life with captivating motion graphics and animations that tell your story in a dynamic, memorable way. From micro-interactions that delight users to full-scale brand films that inspire action, our motion design work adds depth and dimension to your digital presence."
  },
  {
    number: "05",
    label: "Content Consulting",
    title: "Strategic content planning for growth",
    description: "We help you develop your audience and drive meaningful interactions with your brand through strategic content planning and execution. Our data-driven approach ensures every piece of content serves a purpose, from building awareness to driving conversions, while maintaining authentic connections with your audience."
  },
  {
    number: "06",
    label: "Video Editing",
    title: "Professional video production from start to finish",
    description: "From initial concept to final edit, we create high-quality video content that captures attention and delivers your message effectively. Our production process combines creative storytelling with technical excellence, ensuring your videos stand out on any platform and resonate with your target audience."
  }
];

export default function ServicesStickyScroll({
  heading = "Design made simple — fast, flexible, and built for lasting momentum.",
  steps = defaultSteps
}: ServicesStickyScrollProps) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled through the container
      if (containerTop <= 0 && containerTop > -containerHeight + windowHeight) {
        const scrollProgress = Math.abs(containerTop) / (containerHeight - windowHeight);
        // Use Math.round for sharper transitions
        const newStep = Math.min(
          Math.round(scrollProgress * steps.length - 0.3),
          steps.length - 1
        );
        if (newStep >= 0) {
          setActiveStep(newStep);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black overflow-hidden pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Heading - Always visible */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-16 max-w-4xl">
            {heading}
          </h2>

          {/* Steps - All visible at once */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-opacity duration-150 ease-linear ${
                  activeStep === index
                    ? 'opacity-100'
                    : 'opacity-25'
                }`}
              >
                <div className="flex items-start gap-8">
                  {/* Label with bullet */}
                  <div className="flex items-center gap-3 min-w-50">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-150 ease-linear ${
                      activeStep === index ? 'bg-white' : 'bg-gray-600'
                    }`} />
                    <p className="text-sm font-medium text-white">
                      {step.label}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
