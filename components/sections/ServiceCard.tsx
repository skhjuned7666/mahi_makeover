import { motion } from "framer-motion";
import StarBorder from "@/components/ui/components/StarBorder";
import { Service } from "@/types";

interface ServiceCardProps extends Service {
  cta: () => void;
}

export default function ServiceCard({
  title,
  description,
  price,
  cta,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className='soft-card h-full flex flex-col justify-between'>
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='mt-2 text-sm text-deep1/80'>{description}</p>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <span className='font-semibold text-pink1'>{price}</span>
        <StarBorder
          as='button'
          className='ml-auto'
          thickness={2.5}
          color='rgba(14, 27, 204, 0.8)'
          speed='2s'
          onClick={cta}
          style={{}}
          type='button'>
          Book
        </StarBorder>
      </div>
    </motion.div>
  );
}
