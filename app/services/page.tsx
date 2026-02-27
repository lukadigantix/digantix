"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { motion } from "motion/react";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { Scene } from "@/components/ui/neon-raymarcher";

export default function ServicesPage() {
  const [isDark, setIsDark] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [openProcessIndex, setOpenProcessIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section");
      const contactSectionRect = contactSection?.getBoundingClientRect();

      // If contact section is at or near the top, switch to dark mode
      if (contactSectionRect && contactSectionRect.top <= 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      label: "WEBSITES AND PLATFORMS",
      title: "Fast and responsive websites",
      description: "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience."
    },
    {
      label: "MOBILE APPLICATIONS",
      title: "Perfectly suited mobile apps",
      description: "Digantix doesn't do cookie-cutter solutions. Every mobile app involves stages of target audience research and prototype testing."
    },
    {
      label: "STRATEGY AND BRANDING",
      title: "Get your brand noticed",
      description: "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products."
    },
    {
      label: "MOTION DESIGN",
      title: "Engaging animations",
      description: "We bring your brand to life with captivating motion graphics and animations that tell your story in a dynamic way."
    },
    {
      label: "CONTENT CONSULTING",
      title: "Strategic content planning",
      description: "We help you develop your audience and drive meaningful interactions with your brand."
    },
    {
      label: "VIDEO EDITING",
      title: "Professional video production",
      description: "From concept to final edit, we create high-quality video content that captures attention and delivers your message effectively."
    }
  ];

  const processes = [
    {
      step: "Step 1",
      title: "Research and Planning",
      description: "Defining requirements, conducting market research, identifying target users, and creating a foundational strategy for the project."
    },
    {
      step: "Step 2",
      title: "Design and Prototyping",
      description: "Creating user interface (UI) and user experience (UX) designs through sketches, wireframes, and interactive prototypes to visualize the application."
    },
    {
      step: "Step 3",
      title: "Development",
      description: "Building the application using programming languages and frameworks, implementing both frontend and backend functionality."
    },
    {
      step: "Step 4",
      title: "Testing and QA",
      description: "Conducting thorough testing to identify and fix bugs, ensure functionality, and optimize performance across all platforms."
    },
    {
      step: "Step 5",
      title: "Launch and Support",
      description: "Deploying the application to production, monitoring performance, and providing ongoing maintenance and updates."
    }
  ];

  return (
    <>
      <Header dark={isDark} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] pt-24 sm:pt-32 pb-12 sm:pb-16" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">
            {/* Left Side - Text Content */}
            <div>
              <motion.p
                className="text-gray-400 text-sm sm:text-sm mb-4 sm:mb-6"
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 0 100%)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0 0 0%)",
                }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                Our services
              </motion.p>

              <motion.h1
                className="font-normal leading-tight mb-8 sm:mb-12 text-black text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]"
                style={{ letterSpacing: "-0.05em" }}
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 0 100%)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0 0 0%)",
                }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
              >
                Transforming ideas into exceptional digital experiences.
              </motion.h1>

              {/* Mobile 3D Element - Below heading on mobile only */}
              <div className="lg:hidden flex items-center justify-center h-96 mb-2 -mx-4 w-screen relative left-1/2 -translate-x-1/2">
                <div className="w-full h-full">
                  <Scene />
                </div>
              </div>
            </div>

            {/* Right Side - 3D Element (Desktop only) */}
            <div className="hidden lg:flex items-center justify-center lg:h-125">
              <div className="w-full h-full">
                <Scene />
              </div>
            </div>
          </div>
        </div>
        {" "}
        {/* Our Services Section */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-0">
            {/* Left Side - Sticky Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-6 sm:mb-8 text-black text-[44px] sm:text-4xl lg:text-5xl xl:text-[55px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Our services.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg"
              >
                We deliver comprehensive digital solutions tailored to your
                unique needs, from concept to execution.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg"
              >
                Each service is designed to elevate your brand and create
                meaningful connections with your audience.
              </p>
            </div>

            {/* Mobile Accordion View */}
            <div className="sm:hidden space-y-0">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenServiceIndex(openServiceIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-normal text-black pr-4">
                      {service.title}
                    </h3>
                    <span className="text-2xl text-black shrink-0">
                      {openServiceIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openServiceIndex === index ? 'auto' : 0,
                      opacity: openServiceIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline View */}
            <div className="hidden sm:block relative space-y-16 sm:space-y-24 lg:space-y-32">
              {/* Continuous Timeline Line */}
              <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-200"></div>

              {services.map((service, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-2 z-10">
                    <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                    {service.label}
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Development Process Section */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-0">
            {/* Left Side - Sticky Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-6 sm:mb-8 text-black text-[44px] sm:text-4xl lg:text-5xl xl:text-[55px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Development process.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg"
              >
                Our approach combines creativity and technical expertise to help
                clients evolve, stand out, and redefine themselves within the
                market and society.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg"
              >
                Our greatest strength is the confidence our clients place in us.
                Our real accomplishment is seeing them thrive.
              </p>
            </div>

            {/* Mobile Accordion View */}
            <div className="sm:hidden space-y-0">
              {processes.map((process, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenProcessIndex(openProcessIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-normal text-black pr-4">
                      {process.title}
                    </h3>
                    <span className="text-2xl text-black shrink-0">
                      {openProcessIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openProcessIndex === index ? 'auto' : 0,
                      opacity: openProcessIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Desktop Timeline View */}
            <div className="hidden sm:block relative space-y-16 sm:space-y-24 lg:space-y-32">
              {/* Continuous Timeline Line */}
              <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-200"></div>

              {processes.map((process, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-2 z-10">
                    <div className="w-4 h-4 rounded-full border-2 border-[#C388F8] bg-black shadow-[0_0_10px_rgba(195,136,248,0.6)]" style={{ boxShadow: '0 0 15px rgba(195, 136, 248, 0.7), 0 0 5px rgba(195, 136, 248, 0.5)' }}></div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{process.step}</p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-3 sm:mb-4 text-black">
                    {process.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-0">
            {/* Left Side - Sticky Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-6 sm:mb-8 text-black text-[44px] sm:text-4xl lg:text-5xl xl:text-[55px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Get in touch.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg"
              >
                Ready to start your project? Let&apos;s discuss your ideas and
                create something amazing together.
              </p>
              <p
                className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg"
              >
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <form className="space-y-12">
                {/* Interests Section */}
                <div>
                  <h3 className="text-2xl font-normal mb-6 text-black">
                    I&apos;m interested in...
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Site from scratch
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      UX/UI design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Product design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Webflow site
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Motion design
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Branding
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Mobile development
                    </button>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Budget Section */}
                <div>
                  <h3 className="text-xl font-normal mb-6 text-black">
                    Project budget (USD)
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      10-20k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      30-40k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      40-50k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      50-100k
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      &gt;100k
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="min-h-screen bg-black text-white">
        <LetsWorkTogether />
      </div>
    </>
  );
}
