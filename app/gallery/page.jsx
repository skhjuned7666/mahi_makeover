import dynamic from "next/dynamic";
import map from "../../cloudinary-map.json";

const CloudSlider = dynamic(() => import("@/components/CloudSlider"), {
  ssr: false,
});

export default function GalleryPage() {
  const imageList = map.map((i) => i.publicId);
  return (
    <div className='min-h-screen pt-20'>
      <div className='mx-auto max-w-6xl px-4 py-12'>
        <div className='text-center mb-12 relative'>
          <h1 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
            <span className='relative inline-block'>
              <span className='relative z-10'>Bridal Gallery</span>
              <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
            </span>
          </h1>
          <p className='text-lg text-deep1 max-w-2xl mx-auto mt-4'>
            Explore our stunning collection of bridal transformations
          </p>
        </div>
        <div className='soft-card'>
          <CloudSlider images={imageList} />
        </div>
      </div>
    </div>
  );
}
