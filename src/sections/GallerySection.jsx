import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets
import luxuryCakeImg from '../assets/Luxury Cake.png';
import morningBakeImg from '../assets/Morning Bake.png';

const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop', title: 'Fresh Breads' },
  { id: 2, url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop', title: 'Artisan Pastry' },
  { id: 3, url: luxuryCakeImg, title: 'Luxury Cakes' },
  { id: 4, url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop', title: 'Gourmet Dessert' },
  { id: 5, url: morningBakeImg, title: 'Morning Bake' },
  { id: 6, url: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=800&auto=format&fit=crop', title: 'Sweet Moments' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-widest block mb-4">Aesthetic Moments</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic">Visual Gallery</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-[2px]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-serif font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </h3>
                  <p className="text-gold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    View Closer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <button 
                className="absolute -top-12 right-0 text-white text-4xl font-light"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
