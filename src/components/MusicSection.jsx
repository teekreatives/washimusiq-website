import React from "react";
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud, FaGlobe } from "react-icons/fa";

export default function MusicSection() {
  const platforms = [
    { name: "Spotify", icon: <FaSpotify className="w-10 h-10 text-green-500" />, url: "https://open.spotify.com/artist/4Au2yhyanwO6XxD0cY3CDr", color: "bg-green-600" },
    { name: "Apple Music", icon: <FaApple className="w-10 h-10 text-pink-500" />, url: "https://music.apple.com/ke/artist/washimusiq/1804492402", color: "bg-pink-600" },
    { name: "WashiMusiq", icon: <FaYoutube className="w-10 h-10 text-red-500" />, url: "https://youtube.com/@washimusiq", color: "bg-red-600" },
    { name: "Washi’s House", icon: <FaYoutube className="w-10 h-10 text-red-700" />, url: "https://youtube.com/@washishouse", color: "bg-red-700" },
    { name: "SoundCloud", icon: <FaSoundcloud className="w-10 h-10 text-orange-500" />, url: "https://soundcloud.com/washis-house", color: "bg-orange-500" },
    { name: "All Links", icon: <FaGlobe className="w-10 h-10 text-blue-500" />, url: "https://linktr.ee/washimusiq", color: "bg-blue-600" }
  ];

  return (
    <section id="music" className="py-16 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-8 text-center">
          Featured Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-zinc-800 p-6 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-zinc-700 transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-zinc-700 hover:border-gold-500 shadow-sm hover:shadow-md"
            >
              <div className={`w-14 h-14 ${platform.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                style={{ background: 'rgba(0,0,0,0.08)' }}>
                {platform.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                {platform.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 