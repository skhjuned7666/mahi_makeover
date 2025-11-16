## Mahi Makeover — Next.js SPA (App Router)

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

- API route at `app/api/contact/route.ts` returns success in demo mode.
- To use a real email provider, integrate in the handler (Resend, SendGrid, SES, or Formspree).
- Add any secrets to `.env.local` (see `example.env.local.example`).

### Tech

- Next.js (App Router), React, Tailwind CSS
- Framer Motion (subtle entrance & hover animations)
- React Hook Form (form validation)
- Components are designed to align with ideas from `reactbits.dev` (Buttons, Cards, Modals, etc.).

### A11y & Performance

- Semantic HTML, alt text, focus-visible styles
- Lazy-loaded images via Next/Image
- Reduced motion respected (prefers-reduced-motion)

### Folder Structure

- `app/` — SPA sections on `page.tsx`, API under `app/api/contact/route.ts`
- `components/` — Organized into `layout/`, `sections/`, and `ui/components/`
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

- Add your images in `public/portfolio/` and update `data/portfolio.ts`.

### Hindi Quick Notes (छोटे निर्देश)

- Site ka naam/Logo badalna hai? `config/site.config.js` me `siteName` aur `logo` update karein.
- Development start: `npm run dev` (localhost:3000)
- Build/Production: `npm run build` then `npm start`
- Contact form demo hai — real email provider jodne ke liye `app/api/contact/route.ts` me integration add karein.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
