import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <Mail className="w-10 h-10 text-gold-500 mb-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-2">Stay in the Loop</h2>
          <p className="text-gray-700 dark:text-zinc-300 mb-4">Sign up for updates on new music, events, and exclusive content.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors w-full md:w-1/3"
            required
            disabled={submitted}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-white dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors w-full md:w-1/3"
            required
            disabled={submitted}
          />
          <button
            type="submit"
            className="bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-gold-400 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submitted}
          >
            {submitted ? "Thank you!" : "Sign Up"}
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">You’re on the list! 🎉</p>
        )}
      </div>
    </section>
  );
} 