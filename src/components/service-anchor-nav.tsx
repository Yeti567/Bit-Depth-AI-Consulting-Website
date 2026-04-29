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
    <nav
      aria-label="Service sections"
      className="border-y border-[var(--color-border)] bg-[var(--color-offwhite)]"
    >
      <div className="container-shell">
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 py-4 text-sm">
          {serviceNavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleAnchorClick(e, link.id)}
                className="text-[var(--color-slate)] hover:text-[var(--color-navy)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
