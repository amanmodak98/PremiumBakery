import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Elena Richardson",
    role: "Culinary Critic",
    text: "The sourdough here is a masterclass in crust and crumb. Priyanga isn't just a bakery; it's a temple of artisanal tradition.",
    stars: 5
  },
  {
    id: 2,
    name: "Jameson Blake",
    role: "Local Loyal",
    text: "Mornings start here. The smell of fresh brioche and the golden hue of their croissants make every visit a luxury experience.",
    stars: 5
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Pastry Enthusiast",
    text: "The selection of macarons is divine. Each flavor is subtle yet distinct. Perfectly crisp shells and velvety ganache.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gold/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 text-[20vw] font-serif font-black text-gold/5 pointer-events-none select-none -translate-y-1/2 -translate-x-1/4">
        Reviews
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span className="text-gold font-medium uppercase tracking-widest block mb-6">
          Voices of Joy
        </motion.span>
        
        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-8 text-gold">
                {[...Array(testimonials[index].stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-serif italic mb-10 text-soft-brown dark:text-warm-white leading-relaxed">
                "{testimonials[index].text}"
              </p>
              <h4 className="font-bold text-lg">{testimonials[index].name}</h4>
              <p className="text-sm text-gold uppercase tracking-widest">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12 pb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500
                ${index === i ? 'w-8 bg-gold' : 'bg-gold/30 hover:bg-gold/50'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
