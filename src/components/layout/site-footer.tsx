import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';

const footerServices = [
  { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
  { label: 'Missed Call Text Back', href: '/services/missed-call-text-back' },
  { label: 'AI Implementation', href: '/services/ai-implementation' },
  { label: 'Workflow Automation', href: '/services/workflow-automation' },
  { label: 'Custom AI Workers', href: '/services/custom-ai-workers' }
];

const footerIndustries = [
  { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
  { label: 'Electrical', href: '/industries/electrical' },
  { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
  { label: 'Field Services', href: '/industries/field-services' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'COR Pathway', href: '/industries/cor-pathway' }
];

export function SiteFooter() {
  return (
    <footer className="section-charcoal border-t border-[var(--color-border)] text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
        <div className="space-y-4">
          <Link href="/" className="relative block h-12 w-[220px]" aria-label="BitDepth AI Consulting home">
            <Image
              src="/images/logo svg transparent.svg"
              alt="BitDepth AI Consulting logo"
              fill
              sizes="220px"
              className="object-contain object-left"
            />
          </Link>
          <p className="max-w-md text-sm text-white/65">
            Vendor-neutral AI consulting for Canadian trades and contractors. We audit first, then
            build what fits.
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-white/45">
            Audit first &nbsp;·&nbsp; Recommend what fits &nbsp;·&nbsp; Deliver outcomes
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Services</h2>
          <ul className="space-y-3 text-sm text-white/65">
            {footerServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Industries</h2>
          <ul className="space-y-3 text-sm text-white/65">
            {footerIndustries.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Company</h2>
          <ul className="space-y-3 text-sm text-white/65">
            <li>
              <Link href="/about" className="transition hover:text-cyan">
                About
              </Link>
            </li>
            <li>
              <Link href="/resources" className="transition hover:text-cyan">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-cyan">
                Contact
              </Link>
            </li>
            <li>
              <Link href="mailto:blake@bitdepthaiconsulting.com" className="transition hover:text-cyan">
                blake@bitdepthaiconsulting.com
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition hover:text-cyan">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="transition hover:text-cyan">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-6 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BitDepth AI Consulting Ltd. &nbsp;·&nbsp; Serving the GTA, Golden Horseshoe, and across Canada</p>
          <div className="flex flex-col gap-1 text-white/65 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href="https://www.linkedin.com/company/bitdepth-ai-consulting-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition hover:text-cyan"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCz6b7iSR3mik1lzlxoAsZMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition hover:text-cyan"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
