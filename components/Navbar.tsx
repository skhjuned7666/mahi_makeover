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
    <header className='sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80'>
      <nav className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            src={site.logo}
            alt={`${site.siteName} logo`}
            width={36}
            height={36}
            priority
          />
          <Link href='#top' className='font-semibold'>
            {site.siteName}
          </Link>
        </div>
        <ul className='hidden md:flex items-center gap-6 text-sm'>
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className='hover:text-pink1 focus-visible:text-pink1'>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='md:hidden'>
          <a href='#contact' className='btn btn-primary text-sm'>
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
