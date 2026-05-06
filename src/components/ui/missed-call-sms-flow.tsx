import Image from 'next/image';

const BUBBLES = [
  {
    direction: 'incoming',
    text: "Hi, this is Mike's HVAC. Sorry we missed your call. What can we help with?"
  },
  {
    direction: 'outgoing',
    text: 'Furnace stopped working. Need someone today.'
  },
  {
    direction: 'incoming',
    text: "Got it. Sending Dave between 2 and 4 today. We'll text on the way."
  }
] as const;

export function MissedCallSmsFlow() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-stone)] shadow-[0_1px_2px_rgba(28,31,38,0.04),0_8px_24px_rgba(28,31,38,0.06)]">
      <Image
        src="/images/section-mctb-sms-flow-mockup.jpg"
        alt="Smartphone on a contractor workbench showing a missed-call text-back conversation"
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-5 sm:p-7 md:p-8">
        <ul className="flex w-full max-w-[320px] flex-col gap-2 sm:max-w-[360px]">
          {BUBBLES.map((bubble, index) => (
            <li
              key={index}
              className={
                bubble.direction === 'outgoing'
                  ? 'self-end max-w-[80%] rounded-2xl bg-[var(--color-navy)] px-4 py-2.5 text-[12px] leading-snug text-white sm:text-[14px]'
                  : 'self-start max-w-[80%] rounded-2xl bg-[#E5E7EB] px-4 py-2.5 text-[12px] leading-snug text-[var(--color-charcoal)] sm:text-[14px]'
              }
            >
              {bubble.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
