import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-cyan bg-[#080F1C] bg-footer-radial text-white">
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
          <p className="max-w-md text-sm text-white/60">Vendor-Neutral AI Consulting for Real Operational Outcomes</p>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Services</h2>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <Link href="/services" className="transition hover:text-cyan">
                AI Opportunity Audit
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-cyan">
                AI Workflow Automation
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-cyan">
                Custom AI Workers
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-cyan">
                AI Strategy
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-cyan">
                AI Training
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Industries</h2>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <Link href="/industries/oil-and-gas" className="transition hover:text-cyan">
                Oil and Gas
              </Link>
            </li>
            <li>
              <Link href="/industries/manufacturing" className="transition hover:text-cyan">
                Manufacturing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">Company</h2>
          <ul className="space-y-3 text-sm text-white/50">
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
              <Link href="/privacy-policy" className="transition hover:text-cyan">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-6 text-[13px] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>2026 BitDepth AI Consulting Ltd. Barriere, British Columbia, Canada</p>
          <div className="flex flex-col gap-1 text-white/50 sm:flex-row sm:items-center sm:gap-3">
            <p>bitdepthaiconsulting.com</p>
            <Link
              href="https://www.facebook.com/bitpathconsultingltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition hover:text-cyan"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/bitdepth-ai-consulting-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/75 transition hover:text-cyan"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
