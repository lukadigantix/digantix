'use client';

import { Scene } from '@/components/ui/neon-raymarcher';
import Button from '@/components/ui/Button';

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function AboutSection({
  title = "We are committed to finding innovative and unconventional solutions. Pushing boundaries to exceed client goals.",
  subtitle = "Digantix doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.",
  ctaText = "What we do",
  ctaHref = "#services",
}: AboutSectionProps) {
  const industries = [
    "E-Learning",
    "Social Platforms",
    "Fintech",
    "Healthcare",
    "Web3",
    "Real Estate",
    "SaaS",
    "E-Commerce"
  ];

  const stats = [
    { value: "150+", label: "team members" },
    { value: "500+", label: "completed projects" },
    { value: "19 years", label: "in the business" }
  ];

  return (
    <section className="relative py-20 px-0 sm:px-4 lg:px-8 bg-white">
      <div className="mx-auto w-full lg:w-[90%] px-4 sm:px-0" style={{ maxWidth: '1700px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - 3D Visualization */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden hidden lg:block">
            <Scene />
          </div>

          {/* Right side - New Content */}
          <div className="flex flex-col justify-start space-y-12">
            {/* Title */}
            <h2 className="text-[30px] sm:text-3xl lg:text-4xl font-medium text-black leading-tight tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              {title}
            </h2>

            {/* Industries Tags */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 border-1 border-black rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {industry}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-4xl sm:text-5xl font-m text-black">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
