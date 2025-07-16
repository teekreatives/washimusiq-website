import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialFeed() {
  return (
    <section id="social" className="py-16 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-8">Social Feed</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* YouTube Embed */}
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
              <FaYoutube className="text-red-500 w-6 h-6" /> Latest on YouTube
            </h3>
            <div className="w-full aspect-video max-w-md mx-auto">
              <iframe
                width="100%"
                height="225"
                src="https://www.youtube.com/embed/o3ElTPSXmiw"
                title="WashiMusiq Latest Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://youtube.com/@washimusiq?si=TY9hkEYlO-F4npoW"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-gold-600 dark:text-gold-400 hover:underline font-semibold"
            >
              Visit YouTube Channel
            </a>
          </div>
          {/* Instagram Link */}
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
              <FaInstagram className="text-pink-500 w-6 h-6" /> Instagram
            </h3>
            <a
              href="https://www.instagram.com/washimusiq?igsh=cmptZzYzeWZmd2h5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 dark:text-gold-400 hover:underline font-semibold text-lg"
            >
              @washimusiq
            </a>
            <p className="mt-2 text-gray-500 dark:text-zinc-400 text-sm">Follow for behind-the-scenes, music updates, and more!</p>
          </div>
        </div>
      </div>
    </section>
  );
} 