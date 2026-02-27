'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';
import SideMenu from './SideMenu';

interface HeaderProps {
  dark?: boolean;
}

export default function Header({ dark = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out ${
        dark ? 'bg-black/80' : 'bg-white/80'
      }`}>
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-[90%]" style={{ maxWidth: '1700px' }}>
          <div className="flex items-center justify-between py-6">
            <Logo dark={dark} />
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group relative z-60 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span 
                className={`block h-0.5 w-6 transition-all duration-300 ease-in-out ${
                  dark ? 'bg-white' : 'bg-black'
                } ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 transition-all duration-300 ease-in-out ${
                  dark ? 'bg-white' : 'bg-black'
                } ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block h-0.5 w-6 transition-all duration-300 ease-in-out ${
                  dark ? 'bg-white' : 'bg-black'
                } ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
