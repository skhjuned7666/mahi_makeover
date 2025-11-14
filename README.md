## Mahi Makeover — Next.js SPA (Pages Router)

Soft, elegant, modern luxury makeup artist website. Built with Next.js, Tailwind CSS, Framer Motion, and React Hook Form.

### Quick Start

1. Install and run:

```bash
npm install
npm run dev
```

Open at `http://localhost:3000`.

2. Build for production:

```bash
npm run build
npm start
```

### Change Site Name / Logo

- Edit `config/site.config.js`
  - `siteName` and `logo` are clearly marked with `// CHANGE HERE`.
  - Put your logo in `public/` and update the path.

### Contact Form (Demo)

- API route at `pages/api/contact.js` returns success in demo mode.
- To use a real email provider, integrate in the handler (Resend, SendGrid, SES, or Formspree).
- Add any secrets to `.env.local` (see `example.env.local.example`).

### Tech

- Next.js (Pages Router), React, Tailwind CSS
- Framer Motion (subtle entrance & hover animations)
- React Hook Form (form validation)
- Components are designed to align with ideas from `reactbits.dev` (Buttons, Cards, Modals, etc.).

### A11y & Performance

- Semantic HTML, alt text, focus-visible styles
- Lazy-loaded images via Next/Image
- Reduced motion respected (prefers-reduced-motion)

### Folder Structure

- `pages/` — SPA sections on `index.js`, API under `api/contact.js`
- `components/` — `Navbar`, `Hero`, `ServiceCard`, `PortfolioGrid`, `TestimonialSlider`, `ContactForm`, `Footer`, `Modal`, `Accordion`, `BackgroundEffect`
- `data/` — example `services`, `portfolio`, `testimonials`, `pricing`
- `config/` — `site.config.js` branding
- `styles/` — `globals.css` with custom styles and Tailwind config

### Colors (Tailwind theme variables)

- `--pink-1: #D8598C`
- `--pink-2: #E37AB1`
- `--pink-3: #F1C2D2`
- `--pink-4: #F7E1EE`
- `--violet-1: #9D6099`
- `--deep-1: #5C4B75`

These are defined in `styles/globals.css` and mapped in `tailwind.config.js`.

### Replace Demo Images

- Add your images in `public/portfolio/` and update `data/portfolio.js`.

### Hindi Quick Notes (छोटे निर्देश)

- Site ka naam/Logo badalna hai? `config/site.config.js` me `siteName` aur `logo` update karein.
- Development start: `npm run dev` (localhost:3000)
- Build/Production: `npm run build` then `npm start`
- Contact form demo hai — real email provider jodne ke liye `pages/api/contact.js` me integration add karein.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
