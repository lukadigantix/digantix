"use client";

import { useState, useEffect, use, useRef } from "react";
import Header from "@/components/layout/Header";
import { motion, useScroll, useTransform } from "motion/react";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import Image from "next/image";
import Link from "next/link";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiFramer, SiSupabase, SiVercel, 
  SiGreensock, SiFigma, SiAdobeaftereffects, SiThreedotjs, SiAdobe, 
  SiShopify, SiStripe, SiApple, SiAndroid, SiFirebase, SiExpo, 
  SiTwilio, SiStorybook, SiTailwindcss, SiWordpress, SiCloudinary, 
  SiHubspot, SiGoogleanalytics, SiMeta, SiGoogleads, SiHtml5, 
  SiInstagram, SiAdobecreativecloud, SiWix, SiExpress, SiNodedotjs, SiMongodb
} from "react-icons/si";
import { IconType } from "react-icons";
import { Shield, Globe, Palette, BarChart3, Users, Sparkles, Target, Smartphone, Search } from "lucide-react";

// Tech Stack icon mapping
const getTechIcon = (tech: string): IconType | null => {
  const iconMap: { [key: string]: IconType } = {
    "Next.js": SiNextdotjs,
    "React": SiReact,
    "React Native": SiReact,
    "TypeScript": SiTypescript,
    "Framer Motion": SiFramer,
    "Supabase": SiSupabase,
    "Vercel": SiVercel,
    "GSAP": SiGreensock,
    "Figma": SiFigma,
    "After Effects": SiAdobeaftereffects,
    "Three.js": SiThreedotjs,
    "Adobe Creative Suite": SiAdobecreativecloud,
    "Shopify": SiShopify,
    "Stripe": SiStripe,
    "iOS": SiApple,
    "Android": SiAndroid,
    "Firebase": SiFirebase,
    "Expo": SiExpo,
    "Twilio": SiTwilio,
    "Storybook": SiStorybook,
    "Design Tokens": SiFigma,
    "Tailwind CSS": SiTailwindcss,
    "WordPress": SiWordpress,
    "Cloudinary": SiCloudinary,
    "HubSpot": SiHubspot,
    "Google Analytics": SiGoogleanalytics,
    "Meta Ads": SiMeta,
    "Google Ads": SiGoogleads,
    "Wix": SiWix,
    "Wix CMS": SiWix,
    "ContextAPI": SiReact,
    "Adobe Photoshop": SiAdobecreativecloud,
    "Express": SiExpress,
    "Node.js": SiNodedotjs,
    "MongoDB": SiMongodb,
  };
  return iconMap[tech] || null;
};

// Tech Stack brand colors
const getTechColor = (tech: string): string => {
  const colorMap: { [key: string]: string } = {
    "Next.js": "#000000",
    "React": "#61DAFB",
    "React Native": "#61DAFB",
    "TypeScript": "#3178C6",
    "Framer Motion": "#0055FF",
    "Supabase": "#3ECF8E",
    "Vercel": "#000000",
    "GSAP": "#88CE02",
    "Figma": "#F24E1E",
    "After Effects": "#9999FF",
    "Three.js": "#000000",
    "Adobe Creative Suite": "#FF0000",
    "Shopify": "#96BF48",
    "Stripe": "#635BFF",
    "iOS": "#000000",
    "Android": "#3DDC84",
    "Firebase": "#FFCA28",
    "Expo": "#000020",
    "Twilio": "#F22F46",
    "Storybook": "#FF4785",
    "Design Tokens": "#F24E1E",
    "Tailwind CSS": "#06B6D4",
    "WordPress": "#21759B",
    "Cloudinary": "#3448C5",
    "HubSpot": "#FF7A59",
    "Google Analytics": "#E37400",
    "Meta Ads": "#0081FB",
    "Google Ads": "#4285F4",
    "Wix": "#0C6EFC",
    "Wix CMS": "#0C6EFC",
    "ContextAPI": "#61DAFB",
    "Adobe Photoshop": "#31A8FF",
    "Express": "#000000",
    "Node.js": "#339933",
    "MongoDB": "#47A248",
  };
  return colorMap[tech] || "#000000";
};

// Services icon mapping
const getServiceIcon = (service: string): IconType | null => {
  const iconMap: { [key: string]: IconType } = {
    "Web Development": SiHtml5,
    "UI/UX Design": SiFigma,
    "Brand Strategy": Target,
    "Branding": SiAdobe,
    "Motion Design": SiAdobeaftereffects,
    "Digital Strategy": BarChart3,
    "E-commerce": SiShopify,
    "UX Research": Users,
    "Mobile Development": Smartphone,
    "Product Strategy": Sparkles,
    "HIPAA Compliance": Shield,
    "Patient Portal": Globe,
    "Design System": SiStorybook,
    "Web Design": SiFigma,
    "Content Strategy": Palette,
    "Marketing": SiGoogleads,
    "Mobile App": Smartphone,
    "Cloud Infrastructure": Globe,
    "Digital Marketing": SiMeta,
    "Social Media": SiInstagram,
    "Content Creation": Palette,
    "SEO": Search,
    "Responsive": Smartphone,
    "Photography": Palette,
  };
  return iconMap[service] || null;
};

// Services brand colors
const getServiceColor = (service: string): string => {
  const colorMap: { [key: string]: string } = {
    "Web Development": "#E34F26",
    "UI/UX Design": "#F24E1E",
    "Brand Strategy": "#FF6B6B",
    "Branding": "#FF0000",
    "Motion Design": "#9999FF",
    "Digital Strategy": "#8B5CF6",
    "E-commerce": "#96BF48",
    "UX Research": "#3B82F6",
    "Mobile Development": "#3DDC84",
    "Product Strategy": "#F59E0B",
    "HIPAA Compliance": "#10B981",
    "Patient Portal": "#06B6D4",
    "Design System": "#FF4785",
    "Web Design": "#F24E1E",
    "Content Strategy": "#EC4899",
    "Marketing": "#4285F4",
    "Mobile App": "#000000",
    "Cloud Infrastructure": "#0EA5E9",
    "Digital Marketing": "#0081FB",
    "Social Media": "#E4405F",
    "Content Creation": "#A855F7",
    "SEO": "#10B981",
    "Responsive": "#3DDC84",
    "Photography": "#EC4899",
  };
  return colorMap[service] || "#FFFFFF";
};

// Parallax Image Component
const ParallaxImage = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  style = {},
  priority = false
}: { 
  src: string; 
  alt: string; 
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={containerClassName} style={style}>
      <motion.div style={{ y }} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          priority={priority}
        />
      </motion.div>
    </div>
  );
};

// Project data structure - Centralized for easy maintenance
const projectsData: { [key: string]: any } = {
  propus: {
    title: "Propus",
    subtitle: "Web Development",
    client: "Propus - Switzerland",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Photography"],
    launchType: "web",
    websiteUrl: "https://propus.ch/",
    heroImage: "/projects/propus/propus1.jpg",
    description:
      "Professional web platform for an award-winning real estate photography company from Zug, Switzerland, specializing in luxury properties.",
    challenge:
      "Creating an elegant web presence that reflects the premium quality of photography services in the demanding Swiss real estate market.",
    solution:
      "We designed a modern, visually impressive website showcasing the portfolio of professional real estate photography, with intuitive navigation and responsive design optimized for international markets.",
    images: [
      "/projects/propus/propus2.jpg",
      "/projects/propus/propus3.jpg",
      "/projects/propus/propus4.jpg",
    ],
    techStack: [
      "WordPress",
      "Figma",
      "Adobe Photoshop",
    ],
    results: [
      { metric: "300%", label: "Increase in inquiries" },
      { metric: "95%", label: "Client satisfaction" },
      { metric: "50%", label: "International clients" },
    ],
    nextProject: {
      slug: "modular",
      title: "Modular Houses",
      category: "Web Development",
    },
  },
  modular: {
    title: "Modular Houses",
    subtitle: "Web Development",
    client: "Modular Houses",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Digital Strategy", "SEO"],
    launchType: "web",
    websiteUrl: "https://modularhouses.rs/",
    heroImage: "/projects/modular/mod5.jpg",
    description:
      "Modern web platform for showcasing innovative modular housing solutions, combining contemporary design with sustainable architecture.",
    challenge:
      "Creating a digital presence that effectively communicates the advantages of modular construction while showcasing the quality and innovation of their designs.",
    solution:
      "We developed an elegant, modern website highlighting modular house designs through impressive visual displays, detailed specifications, and intuitive user experience.",
    images: [
      "/projects/modular/Plan-1.svg",
      "/projects/modular/mod1.JPG",
      "/projects/modular/plan2.svg",
    ],
    techStack: [
      "WordPress",
      "Figma",
    ],
    results: [
      { metric: "200%", label: "Increase in inquiries" },
      { metric: "85%", label: "User engagement rate" },
      { metric: "50%", label: "Longer session time" },
    ],
    nextProject: {
      slug: "modularcrm",
      title: "Modular Houses CRM",
      category: "CRM System",
    },
  },
  modularcrm: {
    title: "Modular Houses CRM",
    subtitle: "CRM System",
    client: "Modular Houses",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Cloud Infrastructure", "Digital Strategy"],
    launchType: "web",
    websiteUrl: "#",
    heroImage: "/projects/modularcrm/modu3.jpg",
    description:
      "Custom CRM system developed for Modular Houses, enabling complete management of clients, projects, and sales processes. The system optimizes business operations through a centralized platform tracking all aspects of modular house operations.",
    challenge:
      "Modular Houses needed a specialized CRM to solve unique challenges in the modular construction industry - from tracking complex projects, managing quotes and house specifications, to coordinating between design team, production, and clients.",
    solution:
      "We created a custom CRM solution using React for dynamic frontend, Node.js and Express for robust backend, and MongoDB for flexible data storage. The system enables tracking the complete project lifecycle, from first client contact to construction finalization, with automated workflows, real-time notifications, and detailed analytics.",
    images: [
      "/projects/modularcrm/modu2.jpg",

      "/projects/modularcrm/modu1.jpg",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Figma",
    ],
    results: [
      { metric: "65%", label: "Faster sales process" },
      { metric: "90%", label: "Better project organization" },
      { metric: "50+", label: "Active projects" },
    ],
    nextProject: {
      slug: "alexzlatara",
      title: "Zlatara Alex",
      category: "E-commerce Website",
    },
  },
  alexzlatara: {
    title: "Zlatara Alex",
    subtitle: "E-commerce Website",
    client: "Zlatara Alex",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "SEO", "Responsive"],
    launchType: "web",
    websiteUrl: "https://www.alexzlatara.com",
    heroImage: "/projects/alex/alex1.jpg",
    description:
      "Modern online store for selling jewelry and precious items, allowing users to easily browse and order products online.",
    challenge:
      "Creating a reliable and elegant e-commerce platform that reflects the quality and luxury of jewelry products, with a secure online ordering system.",
    solution:
      "We created an elegant web platform with intuitive product display, shopping cart, and secure online ordering system, optimized for mobile devices.",
    images: [
      "/projects/alex/ban1.webp",
      "/projects/alex/alex4.jpg",
      "/projects/alex/ban3.webp",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Wix CMS",
      "Figma",
      "Framer Motion",
      "ContextAPI",
    ],
    results: [
      { metric: "250%", label: "Increase in online sales" },
      { metric: "90%", label: "User satisfaction" },
      { metric: "60%", label: "More mobile orders" },
    ],
    nextProject: {
      slug: "grid",
      title: "Grid",
      category: "Social Network & Booking",
    },
  },
  grid: {
    title: "Grid",
    subtitle: "Social Network & Booking",
    client: "Grid App",
    year: "2025",
    services: ["Mobile App", "Web Development", "UI/UX Design", "Social Media"],
    launchType: "mobile",
    appStoreUrl: "#",
    playStoreUrl: "#",
    heroImage: "/projects/grid/grid.jpg",
    description:
      "Social network and court booking application for padel. Grid connects players, enables court reservations and tracking of padel community activities.",
    challenge:
      "Padel enthusiasts had difficulties finding playing partners and available courts. A modern platform was needed to simply connect players and enable easy booking.",
    solution:
      "We developed an intuitive mobile and web application with social features, court booking system, player profiles, and the ability to organize groups and tournaments.",
    images: [
      "/projects/grid/grid.jpg",
      "/projects/grid/grid.jpg",
      "/projects/grid/grid.jpg",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Next.js",
      "Supabase",
      "Expo",
      "Tailwind CSS",
    ],
    results: [
      { metric: "1000+", label: "Active users" },
      { metric: "500+", label: "Booked sessions" },
      { metric: "4.8★", label: "User rating" },
    ],
    nextProject: {
      slug: "ulnaris",
      title: "Ulnaris",
      category: "Healthcare & CRM",
    },
  },
  ulnaris: {
    title: "Ulnaris",
    subtitle: "Healthcare & CRM",
    client: "Ulnaris Fizioterapija",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Cloud Infrastructure"],
    launchType: "web",
    websiteUrl: "#",
    heroImage: "/projects/ulnaris/ulnaris-logo.jpg",
    description:
      "Modern web platform and CRM system for Ulnaris physiotherapy clinic, enabling easy appointment booking, patient management, and treatment records.",
    challenge:
      "The clinic needed a digital solution to facilitate the booking process, patient management, and treatment record keeping, with online access for patients.",
    solution:
      "We developed a complete web system with CRM functionalities, online booking, patient database, treatment history, and automatic notifications.",
    images: [
      "/projects/ulnaris/ulnaris-logo.jpg",
      "/projects/ulnaris/ulnaris-logo.jpg",
      "/projects/ulnaris/ulnaris-logo.jpg",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Figma",
      "Vercel",
      "Supabase",
    ],
    results: [
      { metric: "400+", label: "Monthly appointments" },
      { metric: "95%", label: "Patient satisfaction" },
      { metric: "60%", label: "Reduced administrative work" },
    ],
    nextProject: {
      slug: "rad",
      title: "Rad Namestaj",
      category: "Web Design & Branding",
    },
  },
  rad: {
    title: "Rad Namestaj",
    subtitle: "Web Design & Branding",
    client: "Rad Namestaj",
    year: "2025",
    services: ["Web Design", "UI/UX Design", "SEO", "Photography"],
    launchType: "web",
    websiteUrl: "#",
    heroImage: "/projects/rad/rad1.jpg",
    description:
      "Complete digital solution for quality furniture manufacturer Rad Namestaj, including website design, branding strategy, and professional product photography.",
    challenge:
      "Creating a modern digital identity that effectively showcases the quality and craftsmanship of their furniture, with the need for professional product presentation through high-quality photography.",
    solution:
      "We developed an elegant WordPress site with a complete branding strategy designed in Figma. We executed a professional photography session highlighting furniture details and quality, while SEO optimization enabled better market visibility.",
    images: [
      "/projects/rad/rad2.jpg",
      "/projects/rad/rad3.jpg",
      "/projects/rad/rad4.jpg",
    ],
    techStack: [
      "WordPress",
      "Figma",
      "Adobe Photoshop",
      "Google Analytics",
    ],
    results: [
      { metric: "180%", label: "Increase in inquiries" },
      { metric: "90%", label: "Client satisfaction" },
      { metric: "4x", label: "More organic traffic" },
    ],
    nextProject: {
      slug: "axonmed",
      title: "Axonmed",
      category: "Healthcare Application",
    },
  },
  axonmed: {
    title: "Axonmed",
    subtitle: "Healthcare Application",
    client: "Axonmed",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Cloud Infrastructure"],
    launchType: "web",
    websiteUrl: "#",
    heroImage: "/projects/axon/axon1.jpg",
    description:
      "Advanced web application for medical data entry and management, developed as a custom solution for a private client in the medical field. Axonmed enables efficient tracking of patients and medical data.",
    challenge:
      "The client needed a secure and intuitive platform for simple medical data management, respecting all privacy standards and efficiently handling large amounts of information.",
    solution:
      "We developed a complete web application using Next.js for a fast and responsive user interface frontend, MongoDB for a scalable database, and Node.js backend. The design was created in Figma with a focus on simplicity and efficiency in data entry.",
    images: [
      "/projects/axon/axon2.jpg",
      "/projects/axon/axon3.jpg",
      "/projects/axon/axon4.jpg",
    ],
    techStack: [
      "Next.js",
      "MongoDB",
      "Node.js",
      "Figma",
      "TypeScript",
    ],
    results: [
      { metric: "70%", label: "Faster data entry" },
      { metric: "100%", label: "Client satisfaction" },
      { metric: "500+", label: "Patients in system" },
    ],
    nextProject: {
      slug: "idcom",
      title: "ID&COM",
      category: "Service Management CRM",
    },
  },
  idcom: {
    title: "ID&COM",
    subtitle: "Service Management CRM",
    client: "ID&COM",
    year: "2025",
    services: ["Web Development", "UI/UX Design", "Cloud Infrastructure", "Digital Strategy"],
    launchType: "web",
    websiteUrl: "#",
    heroImage: "/projects/idcom/i3.jpg",
    description:
      "Specialized CRM system for managing service requests and tickets, developed for ID&COM company specializing in computer, monitor, printer, and hardware servicing. The system enables efficient tracking of malfunctions, service orders, and complete workflow from intake to problem resolution.",
    challenge:
      "ID&COM faced the challenge of managing a large number of daily service requests, requiring a centralized system for tracking tickets, malfunction history, assigned technicians, repair status, and client communication - all in one place with quick search and reporting capabilities.",
    solution:
      "We developed a fully customized CRM system using React for responsive and intuitive frontend, Node.js and Express for backend with real processes, MongoDB for flexible database, with design created in Figma enabling quick ticket entry. The system includes a dashboard with statistics, notification system, repair status tracking, parts inventory, and automatic report generation.",
    images: [
      "/projects/idcom/i1.jpg",
      "/projects/idcom/i2.jpg",
      "/projects/idcom/i4.jpg",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Figma",
    ],
    results: [
      { metric: "80%", label: "Faster ticket resolution" },
      { metric: "95%", label: "Better service work organization" },
      { metric: "200+", label: "Monthly tickets" },
    ],
    nextProject: {
      slug: "propus",
      title: "Propus",
      category: "Web Development",
    },
  },
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isDark, setIsDark] = useState(false);
  const project = projectsData[slug] || projectsData.propus;

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact-section");
      const contactSectionRect = contactSection?.getBoundingClientRect();

      if (contactSectionRect && contactSectionRect.top <= 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header dark={isDark} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] pt-24 sm:pt-32 pb-12 sm:pb-16" style={{ maxWidth: "1500px" }}>
          <motion.p
            className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {project.subtitle}
          </motion.p>

          <motion.h1
            className="font-normal leading-tight mb-8 sm:mb-12 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]"
            style={{ letterSpacing: "-0.05em" }}
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.15 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-gray-600 font-light leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Hero Image */}
          <motion.div
            className="relative w-full h-64 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden"
            style={project.heroImage.endsWith('.svg') ? { backgroundColor: '#0a0a0a' } : {}}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ParallaxImage
              src={project.heroImage}
              alt={project.title}
              className={project.heroImage.endsWith('.svg') ? 'object-contain p-12 sm:p-16 lg:p-24' : 'object-cover'}
              containerClassName="relative w-full h-full"
              priority={true}
            />
          </motion.div>
        </div>

        {/* Project Info Grid */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-16 sm:py-16 lg:py-24" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
            <div>
              <p className="text-sm sm:text-sm xl:text-base text-gray-400 mb-3 sm:mb-3">CLIENT</p>
              <p className="text-xl sm:text-lg lg:text-xl xl:text-2xl text-black font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-sm sm:text-sm xl:text-base text-gray-400 mb-3 sm:mb-3">YEAR</p>
              <p className="text-xl sm:text-lg lg:text-xl xl:text-2xl text-black font-light">{project.year}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm sm:text-sm xl:text-base text-gray-400 mb-4 sm:mb-3">SERVICES</p>
              <div className="flex flex-wrap gap-3 sm:gap-2">
                {project.services.map((service: string, index: number) => {
                  const Icon = getServiceIcon(service);
                  return (
                    <span
                      key={index}
                      className="px-5 py-2.5 sm:px-4 sm:py-2 bg-black rounded-full text-base sm:text-sm xl:text-base text-white flex items-center gap-2.5 sm:gap-2"
                    >
                      {Icon && <Icon className="w-5 h-5 sm:w-4 sm:h-4" />}
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Launch Project Section */}
        {(project.launchType === "web" || project.launchType === "mobile") && (
          <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-8 sm:py-12" style={{ maxWidth: "1500px" }}>
            <div className="border-t border-gray-200 pt-8 sm:pt-12">
              <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 uppercase tracking-wider">View Live Project</p>
              
              {project.launchType === "web" && project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-[#C388F8] transition-all duration-300 text-sm sm:text-base font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Website
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
              
              {project.launchType === "mobile" && (
                <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-[#C388F8] transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-[#C388F8] transition-all duration-300 text-sm sm:text-base font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Challenge & Solution Section */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: "1500px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Sticky Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2
                className="font-normal leading-tight mb-6 sm:mb-8 text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[55px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                The challenge.
              </h2>
              <p
                className="text-gray-600 font-light leading-relaxed text-sm sm:text-base lg:text-lg"
              >
                {project.challenge}
              </p>
            </div>

            {/* Right Side - Content */}
            <div>
              <h3
                className="font-normal leading-tight mb-6 sm:mb-8 text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[40px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Our solution.
              </h3>
              <p
                className="text-gray-600 font-light leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg"
              >
                {project.solution}
              </p>

              {/* Tech Stack */}
              <div className="mt-12 sm:mt-16">
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">TECHNOLOGY STACK</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech: string, index: number) => {
                    const Icon = getTechIcon(tech);
                    const color = getTechColor(tech);
                    return (
                      <span
                        key={index}
                        className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm text-black font-light flex items-center gap-2.5"
                      >
                        {Icon && <Icon className="w-4 h-4" style={{ color }} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-12 sm:py-16" style={{ maxWidth: "1500px" }}>
          <div className="space-y-6 sm:space-y-8">
            {project.images.map((image: string, index: number) => {
              // Special layout for first image in modular project
              if (slug === 'modular' && index === 0) {
                return (
                  <motion.div
                    key={index}
                    className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{ backgroundColor: '#1a1a1a' }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      {/* Left side - Text content */}
                      <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8">
                          MODULAR UNIT<br />
                          <span className="font-black">FOREST</span>
                        </h2>

                        {/* Dimensions */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6v12M18 6v12" />
                            </svg>
                          </div>
                          <div className="text-white">
                            <p className="text-base sm:text-lg">
                              Dimensions <span className="font-bold">12.10 x 5.00</span> m
                            </p>
                          </div>
                        </div>

                        {/* Area */}
                        <div className="flex items-start gap-3 mb-6 sm:mb-8">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="text-white">
                            <p className="text-base sm:text-lg">
                              Total area <span className="font-bold">60.5</span> m²
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                          Designed as an ideal solution for modern lifestyle – mobile, 
                          energy-efficient, and aesthetically exceptional.
                        </p>
                      </div>

                      {/* Right side - Floor plan */}
                      <div className="lg:col-span-3 relative h-64 sm:h-96 lg:h-[600px] flex items-center justify-center p-6 lg:p-8">
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt="Modular House Floor Plan"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Special layout for third image in modular project (LEAF)
              if (slug === 'modular' && index === 2) {
                return (
                  <motion.div
                    key={index}
                    className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{ backgroundColor: '#1a1a1a' }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      {/* Left side - Text content */}
                      <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8">
                          MODULAR UNIT<br />
                          <span className="font-black">LEAF</span>
                        </h2>

                        {/* Dimensions */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6v12M18 6v12" />
                            </svg>
                          </div>
                          <div className="text-white">
                            <p className="text-base sm:text-lg">
                              Dimensions <span className="font-bold">5.5 x 3.75</span> m
                            </p>
                          </div>
                        </div>

                        {/* Area */}
                        <div className="flex items-start gap-3 mb-6 sm:mb-8">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="text-white">
                            <p className="text-base sm:text-lg">
                              Total area <span className="font-bold">20.5</span> m²
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                          Designed as an ideal solution for modern lifestyle – mobile, 
                          energy-efficient, and aesthetically exceptional.
                        </p>
                      </div>

                      {/* Right side - Floor plan */}
                      <div className="lg:col-span-3 relative h-64 sm:h-96 lg:h-[600px] flex items-center justify-center p-6 lg:p-8">
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt="Modular House Floor Plan LEAF"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Regular image display for other images
              return (
                <motion.div
                  key={index}
                  className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden"
                  style={image.endsWith('.svg') ? { backgroundColor: '#0a0a0a' } : {}}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <ParallaxImage
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={image.endsWith('.svg') ? 'object-contain p-12 sm:p-16 lg:p-24' : 'object-cover'}
                    containerClassName="relative w-full h-full"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Results Section */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32" style={{ maxWidth: "1500px" }}>
          <h2
            className="font-normal leading-tight mb-12 sm:mb-16 text-black text-center text-3xl sm:text-4xl lg:text-5xl xl:text-[55px]"
            style={{ letterSpacing: "-0.05em" }}
          >
            Impact & results.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
            {project.results.map((result: any, index: number) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className="font-normal mb-4 bg-gradient-to-r from-[#C388F8] to-[#9b59b6] bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl xl:text-[72px]"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  {result.metric}
                </div>
                <p className="text-gray-600 text-base sm:text-lg font-light">
                  {result.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Project CTA */}
        <div className="mx-auto w-full px-4 sm:px-6 lg:w-[85%] py-16 sm:py-24 lg:py-32 border-t border-gray-200" style={{ maxWidth: "1500px" }}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">NEXT PROJECT</p>
              <h3
                className="font-normal leading-tight text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[48px]"
                style={{ letterSpacing: "-0.05em" }}
              >
                {project.nextProject.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mt-2">
                {project.nextProject.category}
              </p>
            </div>
            <Link
              href={`/projects/${project.nextProject.slug}`}
              className="group flex items-center gap-3 sm:gap-4"
            >
              <span className="text-base sm:text-lg text-black font-light group-hover:text-[#C388F8] transition-colors duration-300">
                View project
              </span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-black group-hover:border-[#C388F8] group-hover:bg-[#C388F8] flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
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
