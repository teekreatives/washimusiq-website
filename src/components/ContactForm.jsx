import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xblkjlnb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-6 text-center">
          Bookings & Contact
        </h2>
        <p className="text-center max-w-xl mx-auto mb-8 text-lg text-gray-700 dark:text-zinc-300">
          For bookings, collaborations, or press inquiries, use the form below or email{" "}
          <a href="mailto:washimusiq@gmail.com" className="text-gold-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 transition-colors">
            washimusiq@gmail.com
          </a>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 rounded bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-gold-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            {status === "success" && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-center text-green-800 dark:text-green-300 font-semibold">
                Thank you for reaching out! Your message has been sent. I’ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg text-center text-red-800 dark:text-red-300 font-semibold">
                Oops! Something went wrong. Please try again or email me directly.
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-xl font-semibold text-gold-600 dark:text-gold-400 mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-zinc-300 font-medium">Email</p>
                  <a href="mailto:washimusiq@gmail.com" className="text-gold-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 transition-colors">
                    washimusiq@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a href="https://wa.me/254774823632" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </a>
                <div>
                  <p className="text-gray-700 dark:text-zinc-300 font-medium">WhatsApp</p>
                  <a href="https://wa.me/254774823632" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 transition-colors">
                    +254 774 823 632
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 dark:text-zinc-300 font-medium">Location</p>
                  <p className="text-gray-600 dark:text-zinc-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
              <h4 className="text-gold-600 dark:text-gold-400 font-semibold mb-2">Available For:</h4>
              <ul className="text-gray-700 dark:text-zinc-300 space-y-1 text-sm">
                <li>• Live Performances & DJ Sets</li>
                <li>• Music Production & Collaboration</li>
                <li>• Event Bookings & Private Parties</li>
                <li>• Studio Sessions & Remixes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 