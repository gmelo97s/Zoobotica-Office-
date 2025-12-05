import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxGalleryProps {
  images: { src: string; alt: string }[];
}

export const LightboxGallery = ({ images }: LightboxGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <>
      {/* Mosaic Grid - 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
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
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full glass flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-foreground" size={24} />
            </motion.button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="text-foreground" size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="text-foreground" size={24} />
            </button>

            {/* Image with swipe */}
            <motion.div
              className="relative w-[90vw] h-[80vh] max-w-4xl touch-pan-y"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl pointer-events-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};