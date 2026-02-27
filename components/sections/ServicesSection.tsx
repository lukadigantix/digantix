'use client';

import Button from '../ui/Button';

interface Service {
  label: string;
  title: string;
  description: string;
  href: string;
}

interface ServicesSectionProps {
  title?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    label: "WEBSITES AND PLATFORMS",
    title: "Fast and responsive websites",
    description: "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience.",
    href: "#websites"
  },
  {
    label: "MOBILE APPLICATIONS",
    title: "Perfectly suited mobile apps",
    description: "Digantix doesn't do cookie-cutter solutions. Every mobile app involves stages of target audience research and prototype testing. The result? A product that's perfectly suited to your users.",
    href: "#mobile"
  },
  {
    label: "STRATEGY AND BRANDING",
    title: "Get your brand noticed",
    description: "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.",
    href: "#branding"
  },
  {
    label: "MOTION DESIGN",
    title: "Engaging animations",
    description: "We bring your brand to life with captivating motion graphics and animations that tell your story in a dynamic way.",
    href: "#motion-design"
  },
  {
    label: "CONTENT CONSULTING",
    title: "Strategic content planning",
    description: "We help you develop your audience and drive meaningful interactions with your brand.",
    href: "#content-consulting"
  },
  {
    label: "VIDEO EDITING",
    title: "Professional video production",
    description: "From concept to final edit, we create high-quality video content that captures attention and delivers your message effectively.",
    href: "#video-editing"
  }
];

export default function ServicesSection({
  title = "Our solutions",
  services = defaultServices
}: ServicesSectionProps) {
  return (
    <section className="relative py-20 px-0 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto w-[90%] px-4 sm:px-0" style={{ maxWidth: '1100px' }}>
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

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div key={index} className="border-t border-gray-200 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Label - Left side */}
                <div className="lg:col-span-3">
                  <p className="text-sm font-semibold tracking-wider text-black uppercase text-l">
                    {service.label}
                  </p>
                </div>

                {/* Content - Right side */}
                <div className="lg:col-span-9 space-y-6">
                  <p className="text-lg leading-relaxed text-black max-w-2xl">
                    {service.description}
                  </p>

                  <button
                    onClick={() => {
                      if (service.href.startsWith('#')) {
                        document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = service.href;
                      }
                    }}
                    className="px-8 py-3 border-2 border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
