type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="surface-card group p-6">
          <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-navy marker:content-none">
            {item.question}
          </summary>
          <p className="mt-4 text-base text-charcoal/85">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
