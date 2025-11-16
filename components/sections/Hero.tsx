import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import site from "@/config/site.config";
// import StarBorder from "@/components/ui/components/StarBorder";
import TrueFocus from "@/components/ui/components/TrueFocus";
import "@/components/ui/components/TrueFocus.css";
import HeroDraggableCards from "./HeroDraggableCards";
import HeroImageCarousel from "./HeroImageCarousel";

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Brand background image - fixed position so it stays static during scroll */}
      <div
        className='fixed inset-0 z-0 bg-fit md:bg-fit md:bg-center bg-center md:bg-no-repeat bg-no-repeat opacity-30 md:opacity-30 hidden md:block'
        style={{
          backgroundImage: `url(${site.siteName})`,
          backgroundBlendMode: "cover",
        }}></div>

      {/* Dark overlay to blend with the image */}
      <div className='fixed inset-0 z-0 bg-gradient-to-br from-dark-200/70 via-dark-100/50 to-deep1/70'></div>

      {/* Main content */}
      <div className='relative w-full max-w-7xl mx-auto px-4 py-12 md:py-24 flex flex-col items-center'>
        {/* Top row with text content and draggable cards */}
        <div className='w-full flex flex-col lg:flex-row items-center'>
          {/* Text content */}
          <div className='w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-12 lg:pr-8'>
            {/* Main heading with serif font and TrueFocus effect */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className='text-base md:text-6xl font-bold text-slate-900 mb-4'
              style={{
                fontFamily: "'Playfair Display', serif",
                // fontSize: "50px",
              }}>
              <TrueFocus
                sentence={
                  [
                    "Every Look, A Masterpiece",
                    "Luxury Makeup",
                    "Premium Artistry",
                  ] as const
                }
                blurAmount={3}
                borderColor='#0F172A'
                glowColor='#16A34A'
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className='text-xl md:text-4xl text-yellow-500/50 mb-3 font-light'>
              {site.tagline}
            </motion.p>

            {/* Subline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='text-md md:text-xl text-pink-200/50 mb-8 max-w-lg mx-auto lg:mx-0'>
              Get stunning makeup, stylish hair, and learn professional makeup
              skills — all under one roof. Beauty services for every occasion
              and training for every aspiring artist.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className='flex flex-row items-center justify-center lg:justify-start gap-2 md:gap-4 w-full'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCTAClick}
                className='btn btn-primary text-xs sm:text-lg px-4 md:px-6 md:py-3 py-1 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-50% md:w-full xs:w-auto'>
                Book Your Session
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#services'
                className='btn btn-gold text-xs sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-gold-300/30 hover:border-gold-300 transition-all duration-300 w-50% md:w-full xs:w-auto'>
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Draggable cards section - only visible on large screens */}
          <div className='hidden lg:flex lg:w-1/2 justify-center items-center'>
            <HeroDraggableCards />
          </div>
        </div>

        {/* Second row with image carousel */}
        <div className='w-full mt-8 block md:hidden'>
          <HeroImageCarousel />
        </div>
      </div>
    </section>
  );
}
