type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }: SectionHeadingProps) {
  return (
    <div
      className={[
        'section-heading-block',
        theme === 'dark' ? 'section-heading-dark' : 'section-heading-light',
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      ].join(' ')}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-[560px] text-base sm:text-lg">{description}</p> : null}
    </div>
  );
}
