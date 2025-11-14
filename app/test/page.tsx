"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function TestPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero onCTAClick={() => setBookingOpen(true)} />
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Test Page</h1>
        <p>If you can see this, the components are working correctly.</p>
      </div>
    </div>
  );
}
