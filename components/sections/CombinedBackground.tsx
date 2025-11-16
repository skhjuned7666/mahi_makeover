"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";

interface CombinedBackgroundProps {
  children: React.ReactNode;
}

export const CombinedBackground = ({ children }: CombinedBackgroundProps) => {
  return (
    <div className='relative w-full min-h-screen'>
      {/* Dark gradient background - positioned absolutely with low z-index */}
      <div className='fixed inset-0 z-0 bg-gradient-to-br from-purple-900 via-dark-200 to-red-950'></div>

      {/* Vortex background - positioned absolutely with low z-index */}
      <div className='fixed inset-0 z-0'>
        <Vortex
          backgroundColor='transparent'
          className='flex items-center flex-col justify-center w-full h-full'
          particleCount={300}
          baseHue={280}
          baseSpeed={0.1}
          rangeSpeed={0.5}
          baseRadius={1}
          rangeRadius={2}
        />
      </div>

      {/* Content - positioned relatively so it's above the background but below fixed navbar */}
      <div className='relative z-0 pt-16'>{children}</div>
    </div>
  );
};
