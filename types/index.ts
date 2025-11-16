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

// Add type declaration for LiquidEther component
export type LiquidEtherProps = {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
  style?: React.CSSProperties;
  dt?: number;
  className?: string;
};