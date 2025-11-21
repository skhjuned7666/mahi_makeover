"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GoldButton from "@/components/ui/components/GoldButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft"
          : "bg-white/70 backdrop-blur-sm"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='flex items-center'>
              <div className='relative w-max h-max'>
                <Image
                  src='https://res.cloudinary.com/dc0g30mss/image/upload/v1763668979/logo2_zafbgj.png'
                  alt='Mahi Makeover Logo'
                  width={80}
                  height={80}
                  className='rounded-full'
                />
              </div>
              <div className='relative w-max h-max md:hidden'>
                <Image
                  src='https://res.cloudinary.com/dc0g30mss/image/upload/v1763668979/brandNameMob_bjuugo.png'
                  alt='Brand Name'
                  width={150}
                  height={50}
                  className='mx-7'
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:ml-6 md:flex md:items-center md:space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === link.path ||
                  (link.path.includes("#") && pathname === "/")
                    ? "text-pink1 font-semibold"
                    : "text-deep1 hover:text-pink1"
                }`}>
                {link.name}
              </Link>
            ))}

            {/* Book Now Button */}
            <GoldButton
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/#contact";
                }
              }}
              className='text-sm'>
              Book Now
            </GoldButton>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-deep1 hover:text-pink1 focus:outline-none'
              aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path ||
                (link.path.includes("#") && pathname === "/")
                  ? "text-pink1 font-semibold bg-pink4/30"
                  : "text-deep1 hover:text-pink1 hover:bg-pink4/20"
              }`}>
              {link.name}
            </Link>
          ))}
          <div className='pt-4 pb-2 border-t border-pink4/30'>
            <GoldButton
              onClick={() => {
                setIsOpen(false);
                if (typeof window !== "undefined") {
                  window.location.href = "/#contact";
                }
              }}
              className='w-full'>
              Book Now
            </GoldButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
