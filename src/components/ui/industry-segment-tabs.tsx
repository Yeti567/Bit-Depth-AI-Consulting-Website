'use client';

import { useEffect, useState } from 'react';

type Segment = {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  tech?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function IndustrySegmentTabs({ segments }: { segments: Segment[] }) {
  const [activeId, setActiveId] = useState(segments[0]?.id ?? '');

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');

      if (segments.some((segment) => segment.id === hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [segments]);

  const activeSegment = segments.find((segment) => segment.id === activeId) ?? segments[0];

  if (!activeSegment) {
    return null;
  }

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-3">
        {segments.map((segment) => {
          const isActive = segment.id === activeSegment.id;

          return (
            <button
              key={segment.id}
              type="button"
              onClick={() => {
                setActiveId(segment.id);
                window.history.replaceState(null, '', `#${segment.id}`);
              }}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'border-cyan bg-cyan text-navy'
                  : 'border-coolgray bg-white text-navy hover:border-cyan hover:text-cyan'
              }`}
            >
              {segment.label}
            </button>
          );
        })}
      </div>

      <article className="surface-card scroll-mt-28 p-8 md:p-10" id={activeSegment.id}>
        <h2 className="text-3xl font-bold text-navy">{activeSegment.title}</h2>
        <p className="mt-6 text-lg leading-8 text-charcoal/82">{activeSegment.body}</p>
        <h3 className="mt-8 text-xl font-semibold text-navy">{activeSegment.label.toUpperCase()} USE CASES WE BUILD:</h3>
        <ul className="mt-4 space-y-3 text-charcoal/82">
          {activeSegment.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {activeSegment.tech ? (
          <>
            <h3 className="mt-8 text-xl font-semibold text-navy">RELEVANT TECHNOLOGY STACK:</h3>
            <p className="mt-4 text-charcoal/82">{activeSegment.tech}</p>
          </>
        ) : null}
      </article>
    </div>
  );
}
