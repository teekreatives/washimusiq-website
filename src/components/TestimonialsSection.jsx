import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'
  const testimonials = [
    {
      name: "Lydia K.",
      role: "Music Blogger",
      content: "WashiMusiq's sets are always a highlight. His unique blend of Afrohouse and Amapiano keeps the crowd moving and creates an unforgettable vibe.",
      rating: 5,
      avatar: "/avatars/lydia.jpg"
    },
    {
      name: "Sarah M.",
      role: "Event Organizer",
      content: "Working with WashiMusiq was seamless. His professionalism and musical talent made our event unforgettable. Highly recommended!",
      rating: 5,
      avatar: "/avatars/sarah.jpg"
    },
    {
      name: "Marcus K.",
      role: "Music Producer",
      content: "WashiMusiq's production skills are world-class. He's pushing the boundaries of what Afrohouse can be while staying true to its roots.",
      rating: 5,
      avatar: "/avatars/marcus.jpg"
    },
    {
      name: "Amina O.",
      role: "Fan",
      content: "The energy at WashiMusiq's live shows is unmatched. Always a great vibe!",
      rating: 5,
      avatar: "/avatars/amina.jpg"
    },
    {
      name: "DJ Kev",
      role: "DJ & Collaborator",
      content: "Collaborating with WashiMusiq is always inspiring. His sound is fresh and unique.",
      rating: 5,
      avatar: "/avatars/kev.jpg"
    },
    {
      name: "Njeri W.",
      role: "Event Attendee",
      content: "I danced all night! WashiMusiq knows how to keep the crowd moving.",
      rating: 5,
      avatar: "/avatars/njeri.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-8 text-center">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-live="polite">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-gold-500 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              tabIndex={0}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
            >
              <div className="flex items-center mb-4 gap-3">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400 shadow"
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = '/avatars/placeholder.jpg'; }}
                />
                <Quote className="w-8 h-8 text-gold-600 dark:text-gold-400 mr-2" aria-hidden="true" />
                <div className="flex" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-600 dark:text-gold-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-zinc-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 dark:border-zinc-800 pt-4">
                <p className="text-gold-600 dark:text-gold-400 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-zinc-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fan Testimonial Submission Form */}
      <div className="max-w-2xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-gold-600 dark:text-gold-400 mb-4 text-center">Share Your Experience</h3>
        <form
          action="https://formspree.io/f/xblkjlnb"
          method="POST"
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            setFormStatus(null);
            fetch("https://formspree.io/f/xblkjlnb", {
              method: "POST",
              body: data,
              headers: { Accept: "application/json" },
            })
              .then(res => {
                if (res.ok) {
                  setFormStatus("success");
                  form.reset();
                } else {
                  setFormStatus("error");
                }
              })
              .catch(() => setFormStatus("error"));
          }}
        >
          <div>
            <label htmlFor="fan_name" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Your Name</label>
            <input
              type="text"
              id="fan_name"
              name="fan_name"
              className="w-full p-3 rounded bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors"
              placeholder="Enter your name (optional)"
            />
          </div>
          <div>
            <label htmlFor="fan_message" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Your Review *</label>
            <textarea
              id="fan_message"
              name="fan_message"
              rows={4}
              className="w-full p-3 rounded bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-700 focus:border-gold-500 focus:outline-none transition-colors resize-none"
              placeholder="Share your experience as a fan!"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-gold-400 transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Submit Review
          </button>
        </form>
        {formStatus === "success" && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-center text-green-800 dark:text-green-300 font-semibold">
            Thank you for your review! It has been received.
          </div>
        )}
        {formStatus === "error" && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg text-center text-red-800 dark:text-red-300 font-semibold">
            Oops! Something went wrong. Please try again or email me directly.
          </div>
        )}
      </div>
    </section>
  );
} 