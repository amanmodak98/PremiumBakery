import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Info & Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <span className="text-gold font-medium uppercase tracking-widest block mb-4">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Priyanga <span className="italic">Spaces</span></h2>
            <p className="text-soft-brown/70 dark:text-warm-white/60 text-lg leading-relaxed max-w-md">
              Step into our world of warmth and golden crusts. We are located in the historic Artisan District, 
              where tradition meets modern elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border-gold/10">
              <h3 className="font-serif font-bold text-xl mb-4 text-gold">Opening Hours</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>08:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>08:00 - 18:00</span></li>
                <li className="flex justify-between font-bold text-gold"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-gold/10">
              <h3 className="font-serif font-bold text-xl mb-4 text-gold">Talk to Us</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="mailto:hello@priyanga.com" className="hover:text-gold">hello@priyanga.com</a></li>
                <li><a href="tel:+123456789" className="hover:text-gold font-bold text-lg">+123 456 789</a></li>
              </ul>
            </div>
          </div>

          {/* Styled Map Placeholder */}
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl group border-2 border-gold/5">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gold/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gold translate-y-[-10px]">
                <div className="w-3 h-3 bg-gold rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-10 md:p-14 rounded-3xl border-gold/10"
        >
          <h3 className="text-3xl font-serif font-bold mb-10 text-center">Reserve a <span className="italic text-gold">Batch</span></h3>
          <form className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-gold/30 py-3 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                placeholder="Full Name"
              />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-soft-brown/50 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold pointer-events-none">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-gold/30 py-3 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                placeholder="Email Address"
              />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-soft-brown/50 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold pointer-events-none">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-transparent border-b border-gold/30 py-3 focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none"
                placeholder="Your Message"
              ></textarea>
              <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-soft-brown/50 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold pointer-events-none">
                Your Message
              </label>
            </div>

            <button type="submit" className="w-full py-5 bg-gold text-cream font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-soft-brown transition-all duration-500 shadow-lg shadow-gold/20">
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
