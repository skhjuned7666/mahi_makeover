"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Accordion from "@/components/Accordion";
import StarBorder from "@/components/StarBorder";
import site from "@/config/site.config";
import services from "@/data/services";
import portfolio from "@/data/portfolio";
import testimonials from "@/data/testimonials";
import pricing from "@/data/pricing";
import { PortfolioItem, Testimonial, FAQItem, PricingItem } from "@/types";

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
    <>
      <Navbar />
      <main>
        <Hero onCTAClick={() => setBookingOpen(true)} />

        <section id='services' className='mx-auto max-w-6xl px-4 py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Services</h2>
          <p className='text-deep1/70 mt-2'>Choose from curated packages</p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                {...s}
                cta={() => setBookingOpen(true)}
              />
            ))}
          </div>
        </section>

        <section id='portfolio' className='mx-auto max-w-6xl px-4 py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Portfolio</h2>
          <p className='text-deep1/70 mt-2'>Filterable grid with lightbox</p>
          <div className='mt-6'>
            <PortfolioGrid items={portfolio} />
          </div>
        </section>

        <section id='about' className='mx-auto max-w-6xl px-4 py-12'>
          <div className='soft-card'>
            <h2 className='text-2xl md:text-3xl font-semibold'>About</h2>
            <p className='text-deep1/80 mt-3'>
              Passionate makeup artist delivering soft, elegant glam tailored to
              your features. Timeline/FAQ below:
            </p>
            <div className='mt-6'>
              <Accordion items={faq} />
            </div>
          </div>
        </section>

        <section id='testimonials' className='mx-auto max-w-6xl px-4 py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Testimonials</h2>
          <div className='mt-6'>
            <TestimonialSlider items={testimonials} />
          </div>
        </section>

        <section id='pricing' className='mx-auto max-w-6xl px-4 py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Pricing</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
            {pricing.map((p) => (
              <div key={p.title} className='soft-card'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h3 className='font-semibold'>{p.title}</h3>
                    <p className='text-sm text-deep1/80 mt-1'>{p.desc}</p>
                  </div>
                  <div className='text-pink1 font-semibold'>{p.price}</div>
                </div>
                <div className='mt-4'>
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
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='contact' className='mx-auto max-w-6xl px-4 py-12'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Booking & Contact
          </h2>
          <div className='mt-6 grid md:grid-cols-2 gap-6'>
            <ContactForm />
            <div className='soft-card'>
              <h3 className='font-semibold'>Call / Email</h3>
              <p className='text-sm text-deep1/80 mt-2'>
                Email: {site.contactEmail}
              </p>
              <p className='text-sm text-deep1/80 mt-1'>
                Address: {site.address}
              </p>
              <div className='mt-4'>
                <a href='#top' className='btn btn-ghost'>
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Modal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        title='Quick Booking (Demo)'>
        <p className='text-sm text-deep1/80'>
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
            className='btn btn-ghost'
            onClick={() => setBookingOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
