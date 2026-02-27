'use client';

import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Button from '@/components/ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modular Houses",
    category: "Web Development",
    image: "/projects/modular/modular-logo.svg",
    link: "/projects/modular"
  },
  {
    id: 2,
    title: "Modular Houses CRM",
    category: "CRM System",
    image: "/projects/modularcrm/modu1.jpg",
    link: "/projects/modularcrm"
  },
  {
    id: 3,
    title: "Propus Photography",
    category: "Web Development",
    image: "/projects/propus/propus-front.jpg",
    link: "/projects/propus"
  },
  {
    id: 4,
    title: "Zlatara Alex",
    category: "E-commerce Website",
    image: "/projects/alex/alex-logo.jpg",
    link: "/projects/alexzlatara"
  },
  {
    id: 5,
    title: "Grid",
    category: "Social Network & Booking",
    image: "/projects/grid/grid.jpg",
    link: "/projects/grid"
  },
  {
    id: 6,
    title: "Rad Namestaj",
    category: "Web Design & Branding",
    image: "/projects/rad/rad2.jpg",
    link: "/projects/rad"
  },
  {
    id: 7,
    title: "Axonmed",
    category: "Healthcare Application",
    image: "/projects/axon/axon5.jpg",
    link: "/projects/axonmed"
  },
  {
    id: 8,
    title: "ID&COM",
    category: "Service Management CRM",
    image: "/projects/idcom/i2.jpg",
    link: "/projects/idcom"
  }
];

export default function ProjectsSectionAutoScroll() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      const speed = 1; // pixels per frame
      const cardWidth = 392; // 390 + 2 (card width + gap)
      const setWidth = cardWidth * projects.length;
      
      // Continuously move left
      const currentX = x.get() - speed;
      
      // Wrap seamlessly when we've scrolled one full set
      const wrappedX = currentX <= -setWidth ? currentX + setWidth : currentX;
      
      x.set(wrappedX);
    }
  });

  return (
    <section className="py-12 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto w-[100%] lg:w-[85%] mb-8 sm:mb-16 px-0 sm:px-4 lg:px-8" style={{ maxWidth: '1500px' }}>
        <div className="flex flex-col gap-4 px-4 sm:px-0">
          <h2 className="text-5xl sm:text-6xl font-regular text-black">
            Our projects
          </h2>
          <p className="text-[16px] leading-relaxed text-black max-w-2xl font-light">
            Discover our latest work and creative solutions
          </p>
          <div className="mt-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => {
                window.location.href = '/projects';
              }}
            >
              View all projects
            </Button>
          </div>
        </div>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative" ref={containerRef}>
        <motion.div
          className="flex gap-2"
          style={{ x }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedProjects.map((project, index) => (
            <a
              key={`${project.id}-${index}`}
              href={project.link}
              className="flex-shrink-0 w-[390px] cursor-pointer group"
            >
              {/* Project Image Container */}
              <div 
                className="relative w-[390px] h-[576px] sm:h-[480px] rounded-[5px] overflow-hidden mb-4 flex items-center justify-center"
                style={project.image.endsWith('.svg') ? { backgroundColor: '#0a0a0a' } : {}}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={project.image.endsWith('.svg') ? 'object-contain p-12' : 'object-cover'}
                />

                {/* Hover Overlay - belkasti/sivi */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Below Image */}
              <div className="px-2">
                <p className="text-base text-black">
                  <span className="font-semibold">{project.title}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="font-light text-gray-600">{project.category}</span>
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
