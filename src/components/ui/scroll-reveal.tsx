'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode, RefObject } from 'react';

type RevealTag = 'div' | 'section' | 'article' | 'aside' | 'li' | 'span';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: RevealTag;
} & HTMLAttributes<HTMLElement>;

export function ScrollReveal({
  children,
  className = '',
  index = 0,
  as: Tag = 'div',
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const sharedProps = {
    className: `animate-on-scroll ${className}`.trim(),
    style: { '--index': index, ...(style ?? {}) } as CSSProperties,
    ...rest
  };

  if (Tag === 'section') {
    return (
      <section ref={ref as RefObject<HTMLElement>} {...sharedProps}>
        {children}
      </section>
    );
  }

  if (Tag === 'article') {
    return (
      <article ref={ref as RefObject<HTMLElement>} {...sharedProps}>
        {children}
      </article>
    );
  }

  if (Tag === 'aside') {
    return (
      <aside ref={ref as RefObject<HTMLElement>} {...sharedProps}>
        {children}
      </aside>
    );
  }

  if (Tag === 'li') {
    return (
      <li ref={ref as RefObject<HTMLLIElement>} {...sharedProps}>
        {children}
      </li>
    );
  }

  if (Tag === 'span') {
    return (
      <span ref={ref as RefObject<HTMLSpanElement>} {...sharedProps}>
        {children}
      </span>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} {...sharedProps}>
      {children}
    </div>
  );
}
