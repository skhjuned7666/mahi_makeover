import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HeroImageCarousel() {
  // Images from Cloudinary based on your cloudinary-map.json
  const images = [
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659859/IMG_3898_cjhbow.jpg",
      alt: "Bridal makeup example 1",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659843/IMG_8386_pkbkbq.jpg",
      alt: "Bridal makeup example 2",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659837/IMG_8385_wmg9eh.jpg",
      alt: "Bridal makeup example 3",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659838/IMG_9651_gmak8b.jpg",
      alt: "Bridal makeup example 4",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659821/IMG_8210_elonma.jpg",
      alt: "Bridal makeup example 5",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659816/IMG_4389_px7hig.jpg",
      alt: "Bridal makeup example 6",
    },
    {
      url: "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659814/IMG_4355_y5icnt.jpg",
      alt: "Bridal makeup example 7",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Remove the useEffect that was handling auto-rotation

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsLoading(true);
    setHasError(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoading(true);
    setHasError(false);
  };

  return (
    <div className='w-full overflow-hidden'>
      <h3 className='text-center text-lg font-semibold text-gold-400 mb-2'>
        Recent Bridal Work
      </h3>
      <div className='relative w-full h-full md:h-80 lg:h-96 overflow-hidden rounded-xl'>
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20  rounded-full p-2 transition-all duration-300'
          aria-label='Previous image'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 rounded-full p-2 transition-all duration-300'
          aria-label='Next image'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center h-auto'>
            <div className='relative w-auto h-auto flex items-center justify-center'>
              <div className='relative rounded-2xl border-1 border-gold-300/30'>
                {hasError ? (
                  <div className='w-full h-64 flex items-center justify-center bg-gray-100 rounded-2xl'>
                    <span className='text-gray-500'>Image not available</span>
                  </div>
                ) : (
                  <>
                    <Image
                      src={images[currentIndex].url}
                      alt={images[currentIndex].alt}
                      width={600}
                      height={400}
                      className='object-contain rounded-2xl'
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    {isLoading && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gold-400'></div>
                      </div>
                    )}
                  </>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl'></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className='flex justify-center mt-4 space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsLoading(true);
              setHasError(false);
            }}
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
