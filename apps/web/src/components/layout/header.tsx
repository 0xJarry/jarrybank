'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 0);
      }, 10); // Debounce scroll events
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      } ${className || ''}`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JarryBank
              </span>
            </Link>
          </div>

          <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              aria-label="Navigate to home page"
            >
              Home
            </Link>
            <button 
              disabled
              className="text-gray-400 cursor-not-allowed font-medium"
              aria-disabled="true"
              aria-describedby="dashboard-help"
            >
              Dashboard
            </button>
            <div id="dashboard-help" className="sr-only">
              Connect wallet to access Dashboard
            </div>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              aria-label="Navigate to about page"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}