import Link from 'next/link';

export const FIT_CHECK_CALENDLY_URL =
  'https://calendly.com/blake-bitdepthaiconsulting/30min';

interface MissedCallFitCheckCtaProps {
  label?: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

export function MissedCallFitCheckCta({
  label = 'Book a 15-minute fit check',
  variant = 'primary',
  className = ''
}: MissedCallFitCheckCtaProps) {
  return (
    <Link
      href={FIT_CHECK_CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`.trim()}
    >
      {label}
    </Link>
  );
}
