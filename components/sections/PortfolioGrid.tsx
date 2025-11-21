import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { PortfolioItem } from "@/types";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items = [] }: PortfolioGridProps) {
  const categories = [
    "All",
    ...Array.from(new Set(items.map((i) => i.category))),
  ];
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  // Show only first 10 items (2 rows) initially, or all if showAll is true
  const visibleItems = showAll ? filtered : filtered.slice(0, 10);

  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  return (
    <div>
      <div className='flex flex-wrap gap-2 mb-6'>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`btn ${
              active === c ? "btn-primary" : "btn-ghost"
            } btn-responsive`}>
            {c}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        <AnimatePresence>
          {visibleItems.map((img) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className='rounded-2xl overflow-hidden bg-white shadow-soft aspect-square'
              onClick={() => setLightbox(img)}
              aria-label={`Open ${img.alt}`}
              type='button'>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                loading='lazy'
                className='h-full w-full object-cover'
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Show "More" button only if there are more items to show */}
      {filtered.length > 10 && !showAll && (
        <div className='flex justify-center mt-6'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className='btn btn-primary btn-responsive px-8 py-3'>
            More
          </motion.button>
        </div>
      )}

      {/* Show "Show Less" button when all items are visible and there are more than 10 items
      {showAll && filtered.length > 10 && (
        <div className='flex justify-center mt-6'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(false)}
            className='btn btn-ghost btn-responsive px-8 py-3'>
            Show Less
          </motion.button>
        </div>
      )} */}

      <Modal
        open={!!lightbox}
        onClose={() => setLightbox(null)}
        title={lightbox?.alt}>
        {lightbox ? (
          <div className='relative w-full h-[70vh]'>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className='rounded-2xl object-contain'
            />
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
