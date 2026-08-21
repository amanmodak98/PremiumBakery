import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './sections/HeroSection';
import BrandStory from './sections/BrandStory';
import ProductShowcase from './sections/ProductShowcase';
import QualitySection from './sections/QualitySection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';

function App() {
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
            <AnimatePresence>
                {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ParticleBackground />
                    <CursorEffect />
                    <ScrollProgress />
                    <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

                    <main>
                        <HeroSection />
                        <BrandStory />
                        <ProductShowcase />
                        <QualitySection />
                        <GallerySection />
                        <TestimonialsSection />
                        <ContactSection />
                    </main>

                    <Footer />
                </motion.div>
            )}
        </div>
    );
}

export default App;
