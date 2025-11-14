import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { PortfolioItem } from "@/types";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items = [] }: PortfolioGridProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  return (
    <div>
      <div className='flex flex-wrap gap-2 mb-6'>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`btn ${active === c ? "btn-primary" : "btn-ghost"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filtered.map((img) => (
          <motion.button
            key={img.src}
            whileHover={{ scale: 1.02 }}
            className='rounded-2xl overflow-hidden bg-white shadow-soft'
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
      </div>
      <Modal
        open={!!lightbox}
        onClose={() => setLightbox(null)}
        title={lightbox?.alt}>
        {lightbox ? (
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            width={1200}
            height={1000}
            className='rounded-2xl w-full h-auto'
          />
        ) : null}
      </Modal>
    </div>
  );
}
