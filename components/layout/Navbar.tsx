import React from "react";
import Link from "next/link";
import site from "@/config/site.config";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

const nav: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/20'>
      <nav className='mx-auto max-w-6xl px-3 md:px-3 py-0 md:py-1 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='block items-center w-auto h-auto rounded-full overflow-hidden'>
            <Image
              src={site.logo}
              alt={`${site.siteName} logo`}
              width={90}
              height={50}
              className='w-30 h-15 md:w-40 md:h-18 lg:w-44 lg:h-20 object-contain'
              priority
            />
          </div>
        </div>
        <ul className='hidden md:flex items-center gap-6 text-base'>
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className='hover:text-pink-900 focus-visible:text-purple-600'>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden md:flex items-center'>
          <a
            href='#contact'
            className=' text-sm btn-responsive hover:text-pink-900'>
            Book Now
          </a>
          <a
            href='#pricing'
            className=' text-sm btn-responsive hover:text-pink-900'>
            Premium
          </a>
        </div>
        {/* <div className='md:hidden relative'>
          <Image
            src={site.siteNameMob}
            alt={`${site.siteName} logo`}
            width={120}
            height={40}
            priority
          />
        </div> */}
        <div className='md:hidden'>
          <a href='#contact' className='btn btn-primary text-sm btn-responsive'>
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}
