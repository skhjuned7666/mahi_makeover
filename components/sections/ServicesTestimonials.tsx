import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import services from "@/data/services";

export function ServicesTestimonials({ onBook }: { onBook: () => void }) {
  // Map services data to testimonials format
  const testimonials = services.map((service) => ({
    quote: service.description,
    name: service.title,
    designation: service.price,
    src: getServiceImage(service.title),
  }));

  function getServiceImage(title: string): string {
    // Map service titles to appropriate images
    const imageMap: Record<string, string> = {
      "Bridal Glam":
        "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659859/IMG_3898_cjhbow.jpg",
      "Engagement Look":
        "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659837/IMG_8385_wmg9eh.jpg",
      "Party Makeup":
        "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659816/IMG_4389_px7hig.jpg",
      "Photoshoot Makeup":
        "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659812/IMG_5431_ukitki.jpg",
    };

    return (
      imageMap[title] ||
      "https://res.cloudinary.com/dc0g30mss/image/upload/v1763659859/IMG_3898_cjhbow.jpg"
    );
  }

  return (
    <div className='w-full'>
      <div className='mb-6 text-center'>
        <div className='inline-block bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-2 mx-auto'>
          <h3 className='text-2xl md:text-3xl font-semibold text-white'>
            Our Premium Services
          </h3>
          <p className='text-gray-300 mt-2'>
            Expertly crafted makeup experiences tailored to your special
            occasion
          </p>
        </div>
      </div>

      <div className='soft-card'>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>

      <div className='flex justify-center mt-8'>
        <button
          onClick={onBook}
          className='btn btn-gold px-8 py-3 rounded-full text-lg font-medium'>
          Book Your Session
        </button>
      </div>
    </div>
  );
}
