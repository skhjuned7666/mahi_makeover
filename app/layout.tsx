import "@/styles/globals.css";
import LiquidEther from "@/components/LiquidEther";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artist Makeover - Soft. Elegant. You.",
  description: "Luxury makeup artistry with a soft, modern aesthetic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <LiquidEther
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
          className='motion-safe-only'
        />
        <div className='fixed inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none -z-1' />
        {children}
      </body>
    </html>
  );
}
