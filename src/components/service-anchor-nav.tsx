'use client';

interface ServiceNavLink {
  id: string;
  label: string;
}

const serviceNavLinks: ServiceNavLink[] = [
  { id: 'ai-audit', label: 'AI Opportunity Audit' },
  { id: 'workflow-automation', label: 'Workflow Automation' },
  { id: 'custom-ai-workers', label: 'Custom AI Workers' },
  { id: 'ai-strategy', label: 'AI Strategy & Roadmapping' },
  { id: 'ai-training', label: 'AI Training & Enablement' }
];

export function ServiceAnchorNav() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-offwhite py-6">
      <div className="container-shell">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {serviceNavLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleAnchorClick(e, link.id)}
              className="rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-navy)] transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
