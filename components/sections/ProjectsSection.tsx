'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category?: string;
}

interface ProjectsSectionProps {
  title?: string;
  description?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "A scalable e-commerce solution built with Next.js and Stripe, featuring real-time inventory management, advanced product filtering, and seamless checkout experience.",
    href: "#project-1",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800",
    category: "E-commerce"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform connecting patients with doctors, featuring appointment scheduling, telemedicine capabilities, and secure medical record management.",
    href: "#project-2",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    category: "Healthcare"
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    description: "Real-time financial analytics platform with advanced data visualization, portfolio tracking, and AI-powered investment insights for modern investors.",
    href: "#project-3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    category: "FinTech"
  },
  {
    id: "social-platform",
    title: "Social Networking Platform",
    description: "Engaging social media platform with real-time messaging, content sharing, and community building features powered by cutting-edge technology.",
    href: "#project-4",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
    category: "Social Media"
  },
  {
    id: "education-portal",
    title: "Online Learning Platform",
    description: "Interactive e-learning platform featuring live classes, course management, progress tracking, and collaborative tools for students and educators.",
    href: "#project-5",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800",
    category: "Education"
  },
  {
    id: "logistics-system",
    title: "Supply Chain Management",
    description: "End-to-end logistics solution with real-time tracking, automated routing, inventory management, and predictive analytics for optimal efficiency.",
    href: "#project-6",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    category: "Logistics"
  }
];

export default function ProjectsSection({
  title = "Our projects",
  description = "Discover how we've helped leading companies transform their digital presence. Each project showcases our commitment to excellence, innovation, and delivering results that exceed expectations.",
  projects = defaultProjects
}: ProjectsSectionProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="relative py-12 sm:py-20 bg-white overflow-hidden">
      {/* Header - constrained width */}
      <div className="mx-auto w-[85%] px-0 sm:px-6 lg:px-8 mb-8 sm:mb-16" style={{ maxWidth: '1500px' }}>
        <div className="flex items-end justify-between px-4 sm:px-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl sm:text-6xl font-regular text-black">
              {title}
            </h2>
            <p className="text-[16px] leading-relaxed text-black max-w-2xl font-light " >
              {description}
            </p>
            <div className="mt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  window.location.href = '/projects';
                }}
              >
                View all projects
              </Button>
            </div>
          </div>
          {/* <div className="hidden md:flex shrink-0 gap-2">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div> */}
        </div>
      </div>

      {/* Carousel - full width, can overflow */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: false,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="pl-4 pr-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-[90%] sm:basis-[45%] md:basis-[32%] lg:basis-[25%]"
              >
                <a
                  href={project.href}
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] block transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {project.category && (
                      <span className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-3">
                        {project.category}
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90 line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-white">
                      Read more{" "}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-black w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
