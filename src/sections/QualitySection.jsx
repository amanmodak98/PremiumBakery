import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Fresh Ingredients",
    desc: "We source our grain and butter from local organic farms every morning.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L5.636 5.636" />
      </svg>
    )
  },
  {
    title: "Handmade Process",
    desc: "No machines, just the rhythmic touch of human hands and ancient tools.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11" />
      </svg>
    )
  },
  {
    title: "Stone Ground",
    desc: "Our flour is stone-ground on-site to preserve flavor and vital nutrients.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Quality First",
    desc: "Rigorous standards from the first dough rise to the final golden crust.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0c.601.428 1.32.712 2.083.743.084.004.168.006.252.006 1.767 0 3.2 1.433 3.2 3.2 0 .84-.325 1.603-.855 2.173a3.42 3.42 0 010 4.438 3.42 3.42 0 00.855 2.173c0 1.767-1.433 3.2-3.2 3.2-.084 0-.168-.002-.252-.006a3.42 3.42 0 01-2.083.743 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-4.438 0c-.601-.428-1.32-.712-2.083-.743-.084-.004-.168-.006-.252-.006-1.767 0-3.2-1.433-3.2-3.2 0-.84.325-1.603.855-2.173a3.42 3.42 0 010-4.438 3.42 3.42 0 00-.855-2.173c0-1.767 1.433-3.2 3.2-3.2.084 0 .168.002.252.006a3.42 3.42 0 012.083-.743 3.42 3.42 0 014.438 0z" />
      </svg>
    )
  }
];

const QualitySection = () => {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-cream dark:bg-luxury-dark">
      {/* Background Parallax Element */}
      <motion.div 
        style={{ y: '-20%' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-white dark:bg-black/40 rounded-3xl flex items-center justify-center text-gold shadow-lg group-hover:bg-gold group-hover:text-cream transition-all duration-500 transform group-hover:-translate-y-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{feature.title}</h3>
              <p className="text-sm text-soft-brown/70 dark:text-warm-white/60 leading-relaxed max-w-[250px] mx-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
