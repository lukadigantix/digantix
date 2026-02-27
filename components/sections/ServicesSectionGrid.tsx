"use client";

import {
  Globe,
  Smartphone,
  Palette,
  Film,
  FileText,
  Video,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import Button from '@/components/ui/Button';

interface Service {
  label: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  area: string;
}

interface ServicesSectionGridProps {
  title?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    label: "WEBSITES AND PLATFORMS",
    title: "Fast and responsive websites",
    description:
      "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience.",
    href: "#websites",
    icon: <Globe className="h-4 w-4" />,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    label: "MOBILE APPLICATIONS",
    title: "Perfectly suited mobile apps",
    description:
      "Digantix doesn't do cookie-cutter solutions. Every mobile app involves stages of target audience research and prototype testing.",
    href: "#mobile",
    icon: <Smartphone className="h-4 w-4" />,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    label: "STRATEGY AND BRANDING",
    title: "Get your brand noticed",
    description:
      "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products.",
    href: "#branding",
    icon: <Palette className="h-4 w-4" />,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    label: "MOTION DESIGN",
    title: "Engaging animations",
    description:
      "We bring your brand to life with captivating motion graphics and animations that tell your story in a dynamic way.",
    href: "#motion-design",
    icon: <Film className="h-4 w-4" />,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/15]",
  },
  {
    label: "CONTENT CONSULTING",
    title: "Strategic content planning",
    description:
      "We help you develop your audience and drive meaningful interactions with your brand.",
    href: "#content-consulting",
    icon: <FileText className="h-4 w-4" />,
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
  },
  {
    label: "VIDEO EDITING",
    title: "Professional video production",
    description:
      "From concept to final edit, we create high-quality video content that captures attention and delivers your message effectively.",
    href: "#video-editing",
    icon: <Video className="h-4 w-4" />,
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/15]",
  },
];

export default function ServicesSectionGrid({
  title = "Our solutions",
  services = defaultServices,
}: ServicesSectionGridProps) {
  return (
    <section className="relative py-20 px-0 sm:px-6 lg:px-8 bg-white">
      <div
        className="mx-auto w-[100%]  lg:w-[85%] px-4 sm:px-0"
        style={{ maxWidth: "1500px" }}
      >
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-5xl sm:text-6xl font-regular text-black">
            {title}
          </h2>
          <p className="text-[16px] leading-relaxed text-black max-w-2xl font-light">
            Comprehensive digital solutions tailored to your needs
          </p>
          <div className="mt-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center"
              onClick={() => {
                window.location.href = '/services';
              }}
            >
              Explore our services
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-cols-14 xl:grid-rows-2">
          {services.map((service, index) => (
            <GridItem
              key={index}
              area={service.area}
              icon={service.icon}
              label={service.label}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: React.ReactNode;
  href: string;
}

const GridItem = ({
  area,
  icon,
  label,
  title,
  description,
  href,
}: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <a href={href} className="block h-full group">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] bg-white p-5 shadow-sm md:p-6 group-hover:shadow-md transition-all duration-600 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#C388F8]/5 before:to-[#C388F8]/2 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300">
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#C388F8]">{icon}</span>
                <span className="text-xs md:text-[10px] font-semibold tracking-wider text-gray-500 uppercase">
                  {label}
                </span>
              </div>
              <h3 className="text-2xl md:text-xl leading-tight font-semibold font-sans tracking-tight text-balance text-black">
                {title}
              </h3>
              <p className="font-sans text-sm md:text-sm leading-relaxed text-gray-600 line-clamp-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
