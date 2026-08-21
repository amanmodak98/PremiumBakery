import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section id="story" className="py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1500&auto=format&fit=crop" 
              alt="Artisan Baker"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <p className="text-sm italic font-serif text-soft-brown">
              "We believe that every grain tells a story of tradition and purity."
            </p>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium uppercase tracking-widest mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
              A Legacy of <br />
              <span className="italic text-gold">Authenticity</span>
            </h2>
            <p className="text-lg text-soft-brown/80 dark:text-warm-white/70 leading-relaxed font-light">
              Founded in the heart of the village, Priyanga started with a single wood-fire oven and a passion 
              for preserving the traditional art of baking. Three generations later, we continue to use 
              stone-ground grains and ancient fermentation techniques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <p className="text-lg text-soft-brown/80 dark:text-warm-white/70 leading-relaxed font-light mb-10">
              Our secret isn't just the organic ingredients or the slow-rising dough—it's the silence 
              of the early morning and the warmth of a community that shares our love for "real" food.
            </p>
            <button className="px-10 py-4 border border-gold text-gold font-medium rounded-full hover:bg-gold hover:text-cream transition-all duration-500">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
