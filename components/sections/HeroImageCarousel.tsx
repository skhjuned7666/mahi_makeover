import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroImageCarousel() {
  // Images from the brids folder
  const images = [
    "/brids/IMG_2181.JPG",
    "/brids/IMG_2273.jpg",
    "/brids/IMG_3893.JPG",
    "/brids/IMG_4355.JPG",
    "/brids/IMG_4389.JPG",
    "/brids/IMG_8210.jpg",
    "/brids/IMG_8385.JPG",
    "/brids/IMG_8386.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='w-full overflow-hidden'>
      <h3 className='text-center text-lg font-semibold text-gold-400 mb-2'>
        Recent Bridal Work
      </h3>
      <div className='relative w-full h-full md:h-80 lg:h-96 overflow-hidden rounded-xl'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className='flex items-center justify-center h-auto'>
            <div className='relative w-auto h-auto flex items-center justify-center'>
              <img
                src={images[currentIndex]}
                alt={`Bridal makeup example ${currentIndex + 1}`}
                className='object-contain rounded-2xl w-auto h-auto border-2 border-gold-300/30'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl'></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className='flex justify-center mt-4 space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex
                ? "bg-gold-400 border-gold-400 w-6"
                : "bg-transparent border-gold-300/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
