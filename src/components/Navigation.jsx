import React, { useState } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Music } from "lucide-react";
import InstallAppButton from "./InstallAppButton";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - always left */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors">
              WashiMusiq
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#music" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors">
                Music
              </a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          {/* Social Icons & Install App - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/washimusiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@washimusiq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://open.spotify.com/artist/4Au2yhyanwO6XxD0cY3CDr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" />
            </a>
            {/* Install App Button - Desktop */}
            <InstallAppButton navPosition />
            {/* ThemeToggle - right side on desktop */}
            <ThemeToggle />
          </div>
          {/* Mobile menu and mode buttons - right side on mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 focus:outline-none focus:text-gold-600 dark:focus:text-gold-400 bg-white/80 dark:bg-black/80 rounded-full p-1 border border-gray-200 dark:border-zinc-700 shadow"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <ThemeToggle inline />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors">
              Home
            </a>
            <a href="#music" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors">
              Music
            </a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors">
              Contact
            </a>
            
            {/* Social Icons - Mobile */}
            <div className="flex space-x-4 px-3 py-2">
              <a 
                href="https://instagram.com/washimusiq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@washimusiq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://open.spotify.com/artist/4Au2yhyanwO6XxD0cY3CDr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                aria-label="Spotify"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
            {/* Install App Button - Mobile */}
            <div className="px-3 py-2">
              <InstallAppButton navPosition />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 