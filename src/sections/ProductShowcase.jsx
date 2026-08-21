import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets
import morningBakeImg from '../assets/Morning Bake.png';
import luxuryCakeImg from '../assets/Luxury Cake.png';
import macaronSelectionImg from '../assets/Macaron Selection.png';
import briocheBunImg from '../assets/Brioche Bun.png';

const products = [
  { id: 1, name: 'Sourdough Loaf', category: 'Breads', price: '$8', image: morningBakeImg, desc: 'Fermented for 24 hours with wild yeast.' },
  { id: 2, name: 'Golden Croissant', category: 'Pastries', price: '$5', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop', desc: 'Hand-laminated with premium French butter.' },
  { id: 3, name: 'Dark Velvet Cake', category: 'Cakes', price: '$45', image: luxuryCakeImg, desc: '70% Belgian chocolate with raspberry silk.' },
  { id: 4, name: 'Artisan Baguette', category: 'Breads', price: '$4', image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?q=80&w=800&auto=format&fit=crop', desc: 'Crispy crust with a light, airy center.' },
  { id: 5, name: 'Macaron Selection', category: 'Desserts', price: '$18', image: macaronSelectionImg, desc: 'Box of 6 delicate almond Parisian treats.' },
  { id: 6, name: 'Brioche Bun', category: 'Breads', price: '$3', image: briocheBunImg, desc: 'Sweet, buttery, and incredibly fluffy.' },
];

const categories = ['All', 'Cakes', 'Breads', 'Pastries', 'Desserts'];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-warm-white dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium uppercase tracking-widest block mb-4"
          >
            Fresh From the Oven
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-10"
          >
            Signature <span className="italic">Showcase</span>
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors uppercase tracking-widest
                  ${activeCategory === cat ? 'text-gold' : 'text-soft-brown/60 hover:text-soft-brown'}
                `}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white dark:bg-luxury-dark rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold group-hover:text-gold transition-colors">{product.name}</h3>
                    <span className="text-gold font-bold">{product.price}</span>
                  </div>
                  <p className="text-soft-brown/60 dark:text-warm-white/50 text-sm italic mb-6">
                    {product.desc}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-brown hover:text-gold transition-colors">
                    Order Now <span>→</span>
                  </button>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
