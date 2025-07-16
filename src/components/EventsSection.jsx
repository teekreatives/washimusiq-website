import React from "react";
import { Calendar } from "lucide-react";

export default function EventsSection() {
  return (
    <section id="events" className="py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <Calendar className="w-10 h-10 text-gold-500 mb-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-2">Upcoming Events</h2>
        </div>
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <p className="text-xl text-gray-700 dark:text-zinc-300 mb-4 font-semibold">
            Stay tuned for upcoming shows, DJ sets, and exclusive livestreams!
          </p>
          <p className="text-lg text-gray-500 dark:text-zinc-400">
            <span className="font-bold text-gold-600 dark:text-gold-400">More details coming soon!</span> Follow me on social media for the latest updates and announcements.
          </p>
        </div>
      </div>
    </section>
  );
} 