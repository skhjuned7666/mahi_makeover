"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cloudUrl } from "@/lib/cloudinary";

export default function CloudSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const next = (index + 1) % images.length;
    const nextUrl = cloudUrl(images[next], "w_1200");
    const img = new Image();
    img.src = nextUrl;
  }, [index, images]);

  if (!images || images.length === 0) return null;

  const current = images[index];
  const src = cloudUrl(current, "w_1200");
  const blur = cloudUrl(current, "w_20,q_5");

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <div
        style={{ position: "relative", width: "100%", paddingTop: "66.66%" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={blur}
            alt=''
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(6px)",
              transform: "scale(1.02)",
            }}
          />
          <Image
            src={src}
            alt=''
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
            sizes='(max-width:600px)100vw,1000px'
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 12,
        }}>
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + images.length) % images.length)
          }>
          Prev
        </button>
        <button onClick={() => setIndex((i) => (i + 1) % images.length)}>
          Next
        </button>
      </div>
    </div>
  );
}
