"use client";

import { useState } from "react";
// import Navbar from "@/components/layout/Navbar";
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
  // Admin phone number for WhatsApp integration (replace with actual number)
  // Format: Country code + number without '+' or spaces (e.g., 917666009723 for India)
  const ADMIN_PHONE = "917666009723";

  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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
      {/* Background effects - positioned absolutely behind content */}
      <CombinedBackground>
        <main>
          <Hero onCTAClick={() => setBookingOpen(true)} />

          <section id='services' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Services</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='mt-6'>
              <ServicesTestimonials onBook={() => setBookingOpen(true)} />
            </div>
          </section>

          <section id='portfolio' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Portfolio</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='mt-6'>
              <PortfolioGrid items={portfolio} />
            </div>
          </section>

          <section id='about' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>About</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='soft-card'>
              <div className='mt-6'>
                <Accordion items={faq} />
              </div>
            </div>
          </section>

          <section
            id='testimonials'
            className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Testimonials</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
                </span>
              </h2>
            </div>
            <div className='mt-6'>
              <TestimonialSlider items={testimonials} />
            </div>
          </section>

          <section id='pricing' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Pricing</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
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

          <section id='contact' className='mx-auto max-w-6xl px-4 md:py-12'>
            <div className='text-center mb-8 relative'>
              <h2 className='text-3xl md:text-4xl font-bold text-center text-white/10 bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-text-glow py-4'>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Get in Touch</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-lg opacity-30 animate-pulse'></span>
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
        onClose={() => {
          setBookingOpen(false);
          setSubmitStatus(null);
        }}
        title='Book Your Session'>
        <p className='text-sm text-slate-700 mb-4'>
          Fill out the form below to book your makeup session. We'll get back to
          you within 24 hours.
        </p>

        {submitStatus && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
            {submitStatus.message}
          </div>
        )}

        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault();

            // Get form data
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              .value;
            const phone = (form.elements.namedItem("phone") as HTMLInputElement)
              .value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const service = (
              form.elements.namedItem("service") as HTMLSelectElement
            ).value;
            const date = (form.elements.namedItem("date") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;
            const terms = (form.elements.namedItem("terms") as HTMLInputElement)
              .checked;

            // Validate required fields
            if (!name.trim() || !phone.trim() || !service.trim() || !terms) {
              setSubmitStatus({
                type: "error",
                message:
                  "Please fill in all required fields and agree to terms.",
              });
              return;
            }

            // Show loading message
            setSubmitStatus({
              type: "success",
              message: "Opening WhatsApp...",
            });

            // Build message string
            let messageText = "New Booking Enquiry\n\n";
            messageText += `Name: ${name}\n`;
            messageText += `Phone: ${phone}\n`;
            messageText += `Email: ${email || "Not provided"}\n`;
            messageText += `Service: ${service}\n`;
            messageText += `Date: ${date || "Not provided"}\n`;
            messageText += `Notes: ${message || "No additional notes"}`;

            // URL encode the message
            const encodedMessage = encodeURIComponent(messageText);

            // Check if admin phone is provided
            if (!ADMIN_PHONE) {
              console.error(
                "ADMIN_PHONE is not set. Please configure the admin phone number."
              );
              setSubmitStatus({
                type: "error",
                message:
                  "Booking system configuration error. Please contact support.",
              });
              alert(
                "Booking system configuration error. Please contact support."
              );
              return;
            }

            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");

            // Close modal after a short delay
            setTimeout(() => {
              setBookingOpen(false);
              setSubmitStatus(null);
            }, 2000);
          }}>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Full Name <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'
              placeholder='Your full name'
            />
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              required
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'
              placeholder='Your phone number'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'
              placeholder='your.email@example.com'
            />
          </div>

          <div>
            <label
              htmlFor='service'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Service Type <span className='text-red-500'>*</span>
            </label>
            <select
              id='service'
              name='service'
              required
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'>
              <option value=''>Select a service</option>
              <option value='Bridal Glam - ₹15,000'>
                Bridal Glam - ₹15,000
              </option>
              <option value='Engagement Look - ₹8,000'>
                Engagement Look - ₹8,000
              </option>
              <option value='Party Makeup - ₹5,000'>
                Party Makeup - ₹5,000
              </option>
              <option value='Photoshoot Makeup - ₹7,000'>
                Photoshoot Makeup - ₹7,000
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor='date'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Preferred Date
            </label>
            <input
              type='date'
              id='date'
              name='date'
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-slate-700 mb-1'>
              Additional Details
            </label>
            <textarea
              id='message'
              name='message'
              rows={3}
              className='w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500'
              placeholder='Any special requests or details about your event...'></textarea>
          </div>

          <div className='flex items-start'>
            <input
              id='terms'
              name='terms'
              type='checkbox'
              required
              className='mt-1 h-4 w-4 text-pink-600 border-slate-300 rounded focus:ring-pink-500'
            />
            <label
              htmlFor='terms'
              className='ml-2 block text-sm text-slate-700'>
              I agree to the{" "}
              <a href='#' className='text-pink-600 hover:underline'>
                terms and conditions
              </a>{" "}
              <span className='text-red-500'>*</span>
            </label>
          </div>

          <div className='flex flex-col sm:flex-row gap-3 pt-4'>
            <button type='submit' className='btn btn-gold flex-1'>
              Submit Booking Request
            </button>
            <button
              type='button'
              className='btn btn-ghost btn-responsive flex-1'
              onClick={() => setBookingOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
