"use client";

import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

export const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = '#E4642A',
  speed = '4s',
  thickness = 1,
  backgroundColor = '#1B130D',
  textColor = '#ffffff',
  borderColor = 'rgba(228,100,42,0.3)',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px`,
        ...(rest as any).style
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-75 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 60%)`,
          animationDuration: speed
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-75 top-[-10px] left-[-250%] rounded-full animate-star-movement-top pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 60%)`,
          animationDuration: speed
        }}
      />
      <div
        className="relative z-1 border text-center text-[15px] font-bold py-[14px] px-[28px] rounded-[19px] backdrop-blur-sm"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
