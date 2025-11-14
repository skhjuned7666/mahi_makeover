import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/types";

interface TestimonialSliderProps {
  items: Testimonial[];
}

export default function TestimonialSlider({
  items = [],
}: TestimonialSliderProps) {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((p) => (p + 1) % items.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length]);

  const next = () => setIdx((p) => (p + 1) % items.length);
  const prev = () => setIdx((p) => (p - 1 + items.length) % items.length);

  return (
    <div className='relative soft-card'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}>
          <p className='text-deep1/90 italic'>"{items[idx]?.quote}"</p>
          <div className='mt-3 text-sm text-deep1/70'>
            — {items[idx]?.author}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='absolute inset-y-0 right-3 flex items-center gap-2'>
        <button
          aria-label='Previous'
          className='btn btn-ghost px-3 py-2'
          onClick={prev}
          type='button'>
          ‹
        </button>
        <button
          aria-label='Next'
          className='btn btn-ghost px-3 py-2'
          onClick={next}
          type='button'>
          ›
        </button>
      </div>
    </div>
  );
}
