import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/types";

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items = [] }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='space-y-3'>
      {items.map((it, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div key={idx} className='soft-card'>
            <button
              className='w-full text-left flex items-center justify-between'
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              {...(isOpen
                ? { "aria-expanded": "true" }
                : { "aria-expanded": "false" })}
              type='button'>
              <span className='font-semibold text-slate-900'>{it.title}</span>
              <span className='text-green-600'>{isOpen ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className='overflow-hidden'>
                  <div className='pt-3 text-sm text-slate-600'>
                    {it.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
