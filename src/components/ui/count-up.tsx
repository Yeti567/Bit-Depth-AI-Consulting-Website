'use client';

import { useEffect, useRef, useState } from 'react';

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const duration = 1200;
          const start = performance.now();

          const animate = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setDisplayValue(Math.round(value * progress));

            if (progress < 1) {
              frame = window.requestAnimationFrame(animate);
            }
          };

          frame = window.requestAnimationFrame(animate);
          observer.disconnect();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
