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
        "https://images.unsplash.com/photo-1610276347467-2f3a6053d297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "Engagement Look":
        "https://images.unsplash.com/photo-1602910344008-22f323cc1817?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      "Party Makeup":
        "https://images.unsplash.com/photo-1630228030850-062003233d10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      "Photoshoot Makeup":
        "https://images.unsplash.com/photo-1638628064365-f08ad0ec8245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1ha2V1cCUyMGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    };

    return (
      imageMap[title] ||
      "https://images.unsplash.com/photo-1515131372403-7c110a87e1a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
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
