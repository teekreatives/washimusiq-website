import React, { useEffect, useState } from "react";
import OfflineNotice from "./OfflineNotice";

export default function FeaturedMedia() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <section id="featured-media" className="py-16 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-8 text-center">
          Featured Tracks & Video
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Nairobi Nights - Spotify Embed */}
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col items-center mb-8 md:mb-0">
            {isOnline ? (
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1IO7AEACeaVgrNJ6nL2HBF?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Nairobi Nights"></iframe>
            ) : (
              <OfflineNotice />
            )}
            <div className="w-full aspect-video max-w-md mx-auto mt-4">
              <iframe
                width="100%"
                height="225"
                src="https://www.youtube.com/embed/o3ElTPSXmiw"
                title="Nairobi Nights (Official Video)"
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
          {/* IRI IRUA - Spotify Embed */}
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col items-center">
            {isOnline ? (
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/0rwwMsummI84L55vnJGNtR?utm_source=generator" width="100%" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="IRI IRUA"></iframe>
            ) : (
              <OfflineNotice />
            )}
            <div className="w-full aspect-video max-w-md mx-auto mt-4">
              <iframe
                width="100%"
                height="225"
                src="https://www.youtube.com/embed/iUwOGwvwdec"
                title="IRI IRUA (Official Video)"
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
        </div>
      </div>
    </section>
  );
} 