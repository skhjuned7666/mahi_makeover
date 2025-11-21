import Image from "next/image";
import LuxuryGradient from "@/components/ui/components/LuxuryGradient";
import Link from "next/link";

export default function MakeupArtist() {
  const specialties = [
    "Bridal Makeup (HD / Traditional / Matte / Dewy)",
    "Engagement & Reception Makeup",
    "Haldi / Sangeet / Mehendi Looks",
    "Party & Occasion Glam",
    "Natural No-Makeup Look",
    "Soft Glam Editorial Makeup",
    "Skin Prep & Customized Glow Finish",
    "Hairstyling (Soft Curls, Messy Buns, Sleek Styles)",
  ];

  const services = [
    "Full Bridal Makeup Package",
    "Pre-Bridal Event Makeup",
    "Party & Evening Makeup",
    "Engagement / Cocktail Makeup",
    "Customized Makeup Based on Skin Type & Tone",
    "Hairstyling Add-ons",
    "On-Location Services",
    "High-quality premium product usage (MAC, Huda Beauty, NARS, Charlotte Tilbury, etc.)",
  ];

  return (
    <section id='makeup-artist' className='mx-auto max-w-6xl px-4 md:py-12'>
      <div className='text-center mb-8 relative'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
          <span className='relative inline-block'>
            <span className='relative z-10'>Meet Your Artist</span>
            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
          </span>
        </h2>
      </div>

      <div className='soft-card'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Image Section */}
          <div className='md:w-1/3 flex justify-center'>
            <div className='relative overflow-hidden  w-full aspect-square'>
              <Image
                src='https://res.cloudinary.com/dc0g30mss/image/upload/v1763659787/IMG_1639_a3mxn1.jpg'
                alt='Mahin Shaikh - Makeup Artist'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className='md:w-2/3'>
            <div className='mb-6'>
              <div className='flex justify-between w-auto h-auto'>
                <h3 className='text-xl font-bold text-deep1 mt-8'>
                  Mahin Shaikh💕
                </h3>
                <img
                  src='https://res.cloudinary.com/dc0g30mss/image/upload/v1763758510/artist_taym6l.png'
                  alt='Artist image'
                  className='md:hidden w-24 h-24 object-contain rounded-full bg-black/75 mb-5'
                />
              </div>

              <div className='mb-6'>
                <p className='text-slate-700 leading-relaxed mb-4'>
                  I am a passionate and skilled Makeup Artist trained under the
                  exceptional guidance of Fatima Sayyed, one of the most
                  respected names in the beauty & bridal industry. With a deep
                  understanding of modern beauty trends and a refined creative
                  touch, Mahin specializes in delivering flawless,
                  confidence-boosting looks for every occasion. Whether it's a
                  soft, natural glam or a bold, signature transformation, Mahin
                  crafts each look with precision, quality products, and an
                  artistic eye.
                </p>

                <p className='text-lg font-semibold text-deep1 italic'>
                  Glow with confidence—crafted beautifully for you.
                </p>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              {/* Specialties */}
              <div>
                <h4 className='text-xl font-semibold text-deep1 mb-3'>
                  Specialties
                </h4>
                <ul className='space-y-2'>
                  {specialties.map((specialty, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-gold-300 mr-2'>•</span>
                      <span className='text-slate-700'>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className='text-xl font-semibold text-deep1 mb-3'>
                  Services
                </h4>
                <ul className='space-y-2'>
                  {services.map((service, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-gold-300 mr-2'>•</span>
                      <span className='text-slate-700'>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
