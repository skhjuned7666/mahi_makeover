//
// WHATSAPP BOOKING FORM (React Component)
// - Replace ADMIN_PHONE prop with your actual number
// - Message format can be customized in the buildMessage() function
// - Works on mobile and desktop browsers
// - Opens WhatsApp with pre-filled message on submit
//
import React, { useState } from "react";

interface WhatsAppBookingFormProps {
  adminPhone: string; // Format: Country code + number without '+' or spaces (e.g., '917666009723')
}

const WhatsAppBookingForm: React.FC<WhatsAppBookingFormProps> = ({
  adminPhone,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
    terms: false,
  });

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim() ||
      !formData.terms
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields and agree to terms.",
      });
      return;
    }

    // Show loading message
    setStatus({
      type: "success",
      message: "Opening WhatsApp...",
    });

    // Build message string
    let messageText = "New Booking Enquiry\n\n";
    messageText += `Name: ${formData.name}\n`;
    messageText += `Phone: ${formData.phone}\n`;
    messageText += `Email: ${formData.email || "Not provided"}\n`;
    messageText += `Service: ${formData.service}\n`;
    messageText += `Date: ${formData.date || "Not provided"}\n`;
    messageText += `Notes: ${formData.message || "No additional notes"}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(messageText);

    // Check if admin phone is provided
    if (!adminPhone) {
      console.error(
        "ADMIN_PHONE is not set. Please provide the admin phone number."
      );
      setStatus({
        type: "error",
        message: "Booking system configuration error. Please contact support.",
      });
      alert("Booking system configuration error. Please contact support.");
      return;
    }

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Book Your Session
      </h2>
      <p className='text-gray-600 text-sm mb-6'>
        Fill out the form below to book your makeup session. We'll get back to
        you within 24 hours.
      </p>

      {status && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Full Name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder='Your full name'
          />
        </div>

        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Phone Number <span className='text-red-500'>*</span>
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder='Your phone number'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder='your.email@example.com'
          />
        </div>

        <div>
          <label
            htmlFor='service'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Service Type <span className='text-red-500'>*</span>
          </label>
          <select
            id='service'
            name='service'
            value={formData.service}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'>
            <option value=''>Select a service</option>
            <option value='Bridal Glam - ₹15,000'>Bridal Glam - ₹15,000</option>
            <option value='Engagement Look - ₹8,000'>
              Engagement Look - ₹8,000
            </option>
            <option value='Party Makeup - ₹5,000'>Party Makeup - ₹5,000</option>
            <option value='Photoshoot Makeup - ₹7,000'>
              Photoshoot Makeup - ₹7,000
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor='date'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Preferred Date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
          />
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Additional Details
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder='Any special requests or details about your event...'></textarea>
        </div>

        <div className='flex items-start'>
          <input
            id='terms'
            name='terms'
            type='checkbox'
            checked={formData.terms}
            onChange={handleChange}
            required
            className='mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500'
          />
          <label htmlFor='terms' className='ml-2 block text-sm text-gray-700'>
            I agree to the{" "}
            <a href='#' className='text-pink-600 hover:underline'>
              terms and conditions
            </a>{" "}
            <span className='text-red-500'>*</span>
          </label>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 pt-4'>
          <button
            type='submit'
            className='flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity'>
            Submit Booking Request
          </button>
          <button
            type='button'
            className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default WhatsAppBookingForm;
