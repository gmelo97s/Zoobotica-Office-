import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxGalleryProps {
  images: { src: string; alt: string }[];
}

export const LightboxGallery = ({ images }: LightboxGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      {/* Mosaic Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer"
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full glass flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-foreground" size={24} />
            </motion.button>

            <motion.div
              className="relative w-[90vw] h-[80vh] max-w-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>

            {/* Navigation dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImage
                      ? 'bg-neon-orange w-6'
                      : 'bg-muted-foreground/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
