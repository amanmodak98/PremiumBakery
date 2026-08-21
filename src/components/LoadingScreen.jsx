import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[100] bg-cream dark:bg-luxury-dark flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="mb-8"
            >
                {/* Bakery Themed SVG Icon (Abstract Whisk/Grain) */}
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" />
                </svg>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl font-serif font-bold text-soft-brown dark:text-gold tracking-widest uppercase"
            >
                Priyanga
            </motion.h1>

            <motion.div
                className="mt-6 w-48 h-[2px] bg-soft-brown/20 dark:bg-gold/20 relative overflow-hidden"
            >
                <motion.div
                    animate={{ x: [-200, 200] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gold"
                />
            </motion.div>

            <p className="mt-4 text-sm font-medium opacity-60 italic">Baking magic...</p>
        </motion.div>
    );
};

export default LoadingScreen;
