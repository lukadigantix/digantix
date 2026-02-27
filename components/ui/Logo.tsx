import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className = '', dark = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center relative ${className} cursor-pointer`}>
      {/* Light logo (for dark background) */}
      <Image
        src="/logo/logo-light.png"
        alt="Digantix Logo"
        width={150}
        height={50}
        priority
        className={`transition-opacity duration-300 ease-in-out ${
          dark ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ position: dark ? 'relative' : 'absolute' }}
      />
      {/* Dark logo (for light background) */}
      <Image
        src="/logo/logo-main.png"
        alt="Digantix Logo"
        width={150}
        height={50}
        priority
        className={`transition-opacity duration-300 ease-in-out ${
          dark ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ position: dark ? 'absolute' : 'relative' }}
      />
    </Link>
  );
}
