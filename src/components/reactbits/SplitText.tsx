"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, type Variants } from "motion/react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // ms stagger between words/letters
  duration?: number;
  splitBy?: "words" | "characters";
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  initialDelay?: number;
  onAnimationComplete?: () => void;
}

export function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 0.6,
  splitBy = "words",
  tag: Tag = "span",
  initialDelay = 0.05,
  onAnimationComplete,
}: SplitTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = splitBy === "words" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
      },
    },
  };

  return (
    <Tag
      ref={ref as React.Ref<never>}
      aria-label={text}
      className={`inline ${className}`}
    >
      <motion.span
        className="inline"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        onAnimationComplete={onAnimationComplete}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-top"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block"
              aria-hidden="true"
            >
              {item}
            </motion.span>
            {splitBy === "words" && i < items.length - 1 && (
              <span className="inline-block" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export default SplitText;
