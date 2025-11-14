import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import site from "@/config/site.config";
import StarBorder from "@/components/StarBorder";

const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
});

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section id='top' className='relative overflow-hidden min-h-[520px]'>
      <div className='absolute inset-0 -z-10'>
        <LiquidEther
          colors={["#D8598C", "#E37AB1", "#F1C2D2"]}
          mouseForce={10}
          cursorSize={15}
          isViscous={true}
          viscous={25}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.2}
          autoIntensity={0.8}
          takeoverDuration={0.5}
          autoResumeDelay={5000}
          autoRampDuration={1.0}
          style={{ width: "100%", height: "100%" }}
          dt={0.01}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/40' />
      </div>
      <div className='relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24'>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-6xl font-semibold leading-tight text-deep1'>
          {site.siteName}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='mt-4 text-deep1/80 max-w-xl'>
          {site.tagline} — Luxury makeup artistry with a soft, modern aesthetic.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className='mt-8 flex items-center gap-3'>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 2.98 }}>
            <StarBorder
              onClick={onCTAClick}
              color='rgba(14, 27, 204, 0.8)'
              speed='2s'
              thickness={2.5}
              style={{}}
              type='button'>
              Book Your Session
            </StarBorder>
          </motion.div>
          <a href='#services' className='btn btn-ghost'>
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
