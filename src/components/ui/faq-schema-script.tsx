import Script from 'next/script';
import { buildFaqSchema, type FAQItem } from '@/lib/schema';

export function FAQSchemaScript({ faqs, id = 'faq-schema' }: { faqs: FAQItem[]; id?: string }) {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(buildFaqSchema(faqs))}
    </Script>
  );
}
