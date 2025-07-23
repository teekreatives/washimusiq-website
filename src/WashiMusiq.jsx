
import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EventsSection from "./components/EventsSection";
import FeaturedMedia from "./components/FeaturedMedia";
import MusicSection from "./components/MusicSection";
import NewsletterSignup from "./components/NewsletterSignup";
import SocialFeed from "./components/SocialFeed";
import ContactForm from "./components/ContactForm";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import PWAUpdatePrompt from "./components/PWAUpdatePrompt";
import InstallAppButton from "./components/InstallAppButton";

export default function WashiMusiq() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="absolute left-2 top-2 z-50 bg-gold-500 text-black px-4 py-2 rounded focus:block focus:outline-none focus:ring-2 focus:ring-gold-600 sr-only focus:not-sr-only"
        tabIndex={0}
      >
        Skip to main content
      </a>
      <main id="main-content" role="main" className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
        <Navigation role="navigation" />
        <Hero />
        <FeaturedMedia />
        <EventsSection />
        <NewsletterSignup />
        <MusicSection />
        <SocialFeed />
        <ContactForm />
        <TestimonialsSection />
        <Footer />
        <PWAUpdatePrompt />
        <InstallAppButton />
    </main>
    </>
  );
}
