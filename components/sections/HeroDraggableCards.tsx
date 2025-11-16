import React from "react";
import portfolio from "@/data/portfolio";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function HeroDraggableCards() {
  // Use first 5 images from portfolio data
  const items = portfolio.slice(0, 5).map((item, index) => ({
    title: item.category,
    image: item.src,
    alt: item.alt,
    className: getCardPosition(index),
  }));

  function getCardPosition(index: number): string {
    const positions = [
      "absolute top-10 left-[10%] rotate-[-5deg]",
      "absolute top-40 left-[15%] rotate-[-7deg]",
      "absolute top-5 left-[35%] rotate-[8deg]",
      "absolute top-32 left-[45%] rotate-[10deg]",
      "absolute top-20 right-[25%] rotate-[2deg]",
    ];
    return positions[index] || "absolute top-10 left-[10%]";
  }

  return (
    <DraggableCardContainer className='relative hidden lg:flex min-h-[600px] w-full items-center justify-center overflow-clip'>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.alt}
            className='pointer-events-none relative z-10 h-50% w-50% rounded-lg object-cover overflow-hidden'
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

export default HeroDraggableCards;
