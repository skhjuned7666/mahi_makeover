"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";
import Modal from "@/components/sections/Modal";
import Accordion from "@/components/sections/Accordion";
import StarBorder from "@/components/ui/components/StarBorder";
import site from "@/config/site.config";
import services from "@/data/services";
import portfolio from "@/data/portfolio";
import testimonials from "@/data/testimonials";
import pricing from "@/data/pricing";
import { PortfolioItem, Testimonial, FAQItem, PricingItem } from "@/types";
import { ServicesTestimonials } from "@/components/sections/ServicesTestimonials";
import { CombinedBackground } from "@/components/sections/CombinedBackground";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const faq: FAQItem[] = [
    {
      title: "Do you travel for bookings?",
      content: "Yes, within city limits. Outstation by request.",
    },
    {
      title: "What products do you use?",
      content: "High-end, skin-safe, long-lasting professional products.",
    },
  ];

  return (
    <div className='relative w-full min-h-screen'>
      {/* Fixed header/navbar */}
      <Navbar />

      {/* Background effects - positioned absolutely behind content */}
      <CombinedBackground>
        <main>
          <Hero onCTAClick={() => setBookingOpen(true)} />

          <section id='services' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-pink-100/20 via-purple-100/20 to-gold-100/20 rounded-3xl blur-xl -z-10'></div>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Services</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
              <p className='text-slate-600 mt-2 text-center text-lg font-medium animate-fade-in'>
                Choose from curated packages
              </p>
            </div>
            <div className='mt-6'>
              <ServicesTestimonials onBook={() => setBookingOpen(true)} />
            </div>
          </section>

          <section id='portfolio' className='mx-auto max-w-6xl px-4 py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Portfolio</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-10 animate-pulse'></span>
                </span>
              </h2>
              <p className='text-slate-600 mt-2 text-center text-lg font-medium animate-fade-in'>
                Filterable grid with lightbox
              </p>
            </div>
            <div className='mt-6'>
              <PortfolioGrid items={portfolio} />
            </div>
          </section>

          <section id='about' className='mx-auto max-w-6xl px-4 py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>About</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='soft-card'>
              <p className='text-slate-700 mt-3'>
                Passionate makeup artist delivering soft, elegant glam tailored
                to your features. Timeline/FAQ below:
              </p>
              <div className='mt-6'>
                <Accordion items={faq} />
              </div>
            </div>
          </section>

          <section id='testimonials' className='mx-auto max-w-6xl px-4 py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Testimonials</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='mt-6'>
              <TestimonialSlider items={testimonials} />
            </div>
          </section>

          <section id='pricing' className='mx-auto max-w-6xl px-4 py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Pricing</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
              {pricing.map((p) => (
                <div key={p.title} className='soft-card'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-semibold text-slate-900'>
                        {p.title}
                      </h3>
                      <p className='text-sm text-slate-600 mt-1'>{p.desc}</p>
                    </div>
                    <div className='text-green-600 font-semibold'>
                      {p.price}
                    </div>
                  </div>
                  <div className='mt-4'>
                    {p.title === "Premium Package" ? (
                      <button
                        className='btn btn-gold block w-full'
                        onClick={() => setBookingOpen(true)}>
                        Book Premium Package
                      </button>
                    ) : (
                      <StarBorder
                        as='button'
                        className='block w-full'
                        color='rgba(14, 27, 204, 0.8)'
                        speed='2s'
                        thickness={2.5}
                        onClick={() => setBookingOpen(true)}
                        style={{}}>
                        Book this package
                      </StarBorder>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id='contact' className='mx-auto max-w-6xl px-4 py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-gold-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Booking & Contact</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-gold-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='mt-6 grid md:grid-cols-2 gap-6'>
              <ContactForm />
              <div className='soft-card'>
                <h3 className='font-semibold text-slate-900'>Call / Email</h3>
                <p className='text-sm text-slate-700 mt-2'>
                  Email: {site.contactEmail}
                </p>
                <p className='text-sm text-slate-700 mt-1'>
                  Address: {site.address}
                </p>
                <div className='mt-4'>
                  <a href='#top' className='btn btn-ghost btn-responsive'>
                    Back to top
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </CombinedBackground>

      {/* Modal positioned at the highest z-index */}
      <Modal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        title='Quick Booking (Demo)'>
        <p className='text-sm text-slate-700'>
          This is a demo booking modal. Hook to a real calendar/provider as
          needed.
        </p>
        <div className='mt-4 flex gap-2'>
          <StarBorder
            as='a'
            href='#contact'
            color='rgba(14, 27, 204, 0.8)'
            speed='2s'
            thickness={2.5}
            style={{}}>
            Go to Contact
          </StarBorder>
          <button
            className='btn btn-ghost btn-responsive'
            onClick={() => setBookingOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
