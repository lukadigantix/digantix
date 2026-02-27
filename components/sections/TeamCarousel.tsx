'use client';

import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aleksandar Djordjevic",
    role: "Creative Director",
    image: "/avatars/Aleksandar-Djordjevic-Image.png"
  },
  {
    id: 2,
    name: "Aleksandar Veljkovic",
    role: "Lead Developer",
    image: "/avatars/Aleksandar-Veljkovic-Image.png"
  },
  {
    id: 3,
    name: "Branimir",
    role: "UX Designer",
    image: "/avatars/Branimir-Digantix.jpg"
  },
  {
    id: 4,
    name: "Emir",
    role: "Project Manager",
    image: "/avatars/Emir-Digantix.jpg"
  },
  {
    id: 5,
    name: "Aca",
    role: "Brand Strategist",
    image: "/avatars/image-aca.png"
  },
  {
    id: 6,
    name: "Stefan",
    role: "Full Stack Developer",
    image: "/avatars/stefan2 (1).png"
  }
];

export default function TeamCarousel() {
  return (
    <section id="team-section" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%]" style={{ maxWidth: '1500px' }}>
        <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-regular text-black">
            Our team
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-black max-w-2xl font-light">
            Meet the talented people behind our success
          </p>
        </div>

        {/* Grid Layout - 4 po redu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="cursor-pointer group"
            >
              {/* Avatar Image Container */}
              <div className="relative w-full aspect-[390/480] rounded-[5px] overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Below Image */}
              <div className="px-1 sm:px-2">
                <p className="text-sm sm:text-base text-black">
                  <span className="font-semibold">{member.name}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="font-light text-gray-600">{member.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
