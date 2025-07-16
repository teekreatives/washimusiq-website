import React from "react";
import { Instagram, Facebook, Youtube, Music, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center bg-gray-100 dark:bg-zinc-950 text-gray-600 dark:text-zinc-500 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="https://instagram.com/washimusiq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com/share/1HgcemqFSe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow on Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://youtube.com/@washimusiq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Subscribe on YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a 
            href="https://open.spotify.com/artist/4Au2yhyanwO6XxD0cY3CDr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 transform hover:scale-110"
            aria-label="Listen on Spotify"
          >
            <Music className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm mb-2">
          © {currentYear} WashiMusiq. All rights reserved.
        </p>
        
        <p className="text-xs text-gray-500 dark:text-zinc-600 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in Nairobi, Kenya
        </p>
      </div>
    </footer>
  );
} 