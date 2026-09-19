"use client";

import { useEffect, useRef, useState, ElementType, ReactNode } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade";

const variantMap: Record<Variant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation style */
  variant?: Variant;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** Fraction of element visible to trigger (0–1) */
  threshold?: number;
  /** Extra class names on the wrapper */
  className?: string;
  /** HTML tag for the wrapper element */
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 650,
  threshold = 0.12,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold,
        // Trigger slightly before the element fully enters
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { hidden, visible: visibleClass } = variantMap[variant];

  return (
    // @ts-expect-error - dynamic tag ref typing
    <Tag
      ref={ref}
      className={`${hidden} ${visible ? visibleClass : ""} ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
