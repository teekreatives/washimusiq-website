import React from "react";
import { Music, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-12 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-black overflow-hidden pt-24">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      {/* Hero content stacked */}
      <div className="relative z-30 w-full max-w-7xl flex flex-col items-center justify-center animate-fade-in">
        <img
          src="/washimusiq-hero.png"
          alt="WashiMusiq - Kenyan Afrohouse Producer"
          className="w-48 h-48 rounded-full object-cover border-4 border-gold-500 mb-6 shadow-2xl hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gold-600 dark:text-gold-400 mb-4 animate-slide-up">
          WashiMusiq
        </h1>
        <p className="mt-2 max-w-2xl text-lg leading-relaxed animate-slide-up-delay text-white dark:text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #fff' }}>
          Kenyan Producer, Singer, and DJ shaping the future of Afrohouse, Afrotech, and Amapiano with a soulful 3-Step sound. Based in Nairobi, WashiMusiq delivers emotionally rich, rhythm-driven music built for both introspection and the <span style={{ whiteSpace: 'nowrap' }}>dance floor</span>.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2 animate-slide-up-delay-2">
          {/* Animated arrow above the button */}
          <ArrowDown className="w-6 h-6 text-gold-500 mb-1 animate-bounce" style={{ animationDuration: '1.2s' }} />
          <a 
            href="#contact" 
            className="border-2 border-gold-500 text-gold-600 dark:text-gold-400 px-6 py-3 rounded-lg hover:bg-gold-500 hover:text-black transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
          >
            <Mail className="w-5 h-5" />
            Book Me
          </a>
        </div>
      </div>
      {/* Latest Release Card stacked below */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center mt-12 animate-slide-up-delay-2">
        <div className="flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-lg p-6 md:p-8 border border-gold-100 dark:border-zinc-800 max-w-xs w-full">
          <img
            src="/nairobi-nights-cover.png"
            alt="Nairobi Nights Cover"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-md border border-gold-400"
            loading="lazy"
          />
          <h2 className="text-2xl font-bold text-gold-600 dark:text-gold-400 mb-2">Nairobi Nights</h2>
          <p className="text-gray-700 dark:text-zinc-300 mb-4 text-sm">Latest Release</p>
          <a
            href="https://open.spotify.com/album/1h5QG0NpmBgq852UHETmCg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-black px-4 py-2 rounded-lg hover:bg-gold-400 flex items-center gap-2 font-semibold shadow btn-hover"
          >
            <Music className="w-5 h-5" />
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
} 