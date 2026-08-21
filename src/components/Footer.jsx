import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black pt-20 pb-10 px-6 border-t border-soft-brown/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Info */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-serif font-bold text-gold mb-6">Priyanga</h2>
                    <p className="text-soft-brown/70 dark:text-warm-white/60 max-w-sm mb-8">
                        Crafting momentos of joy through handcrafted pastries and breads.
                        Experience the art of artisanal baking in every bite.
                    </p>
                    <div className="flex space-x-4">
                        {['Instagram', 'Facebook', 'Pinterest'].map(social => (
                            <a
                                key={social}
                                href="#"
                                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-xs font-semibold hover:bg-gold hover:text-cream transition-all duration-300"
                            >
                                {social[0]}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-serif font-bold mb-6">Explore</h3>
                    <ul className="space-y-4 text-sm text-soft-brown/70 dark:text-warm-white/60">
                        <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                        <li><a href="#story" className="hover:text-gold transition-colors">Our Story</a></li>
                        <li><a href="#menu" className="hover:text-gold transition-colors">Menu Highlights</a></li>
                        <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-lg font-serif font-bold mb-6">Visit Us</h3>
                    <ul className="space-y-4 text-sm text-soft-brown/70 dark:text-warm-white/60">
                        <li>123 Artisan Way, Bakery District<br />New York, NY 10001</li>
                        <li>Mon - Sat: 08:00 - 20:00</li>
                        <li>Sun: 09:00 - 18:00</li>
                        <li><a href="tel:+123456789" className="text-gold font-bold">+123 456 789</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-soft-brown/5 text-center text-xs text-soft-brown/40 dark:text-warm-white/30 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Priyanga Luxury Bakery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
