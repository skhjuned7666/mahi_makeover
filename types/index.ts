export interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
}

export interface PricingItem {
  title: string;
  desc: string;
  price: string;
}

export interface FAQItem {
  title: string;
  content: string;
}

export * from './site';