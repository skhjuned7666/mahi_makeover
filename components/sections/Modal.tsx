import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center'
          aria-modal='true'
          role='dialog'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div
            className='absolute inset-0 bg-deep1/40'
            onClick={onClose}
            aria-label='Close modal overlay'
          />
          <motion.div
            className='relative soft-card max-w-lg w-[92%]'
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}>
            {title ? (
              <h3 className='text-xl font-semibold mb-4 text-slate-900'>
                {title}
              </h3>
            ) : null}
            <button
              onClick={onClose}
              aria-label='Close modal'
              className='absolute right-4 top-4 rounded-full px-2 py-1 text-slate-500 hover:text-slate-900 bg-pink4'
              type='button'>
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
