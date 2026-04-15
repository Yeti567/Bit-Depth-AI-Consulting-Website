export const TIERS = [
  {
    min: 80,
    max: 100,
    grade: 'A',
    label: 'AI Ready',
    color: 'green',
    gradient: 'from-green-500 to-green-300'
  },
  {
    min: 60,
    max: 79,
    grade: 'B',
    label: 'AI Capable',
    color: 'cyan',
    gradient: 'from-cyan-500 to-cyan-300'
  },
  {
    min: 40,
    max: 59,
    grade: 'C',
    label: 'Developing',
    color: 'amber',
    gradient: 'from-amber-500 to-amber-300'
  },
  {
    min: 0,
    max: 39,
    grade: 'D',
    label: 'Foundation Required',
    color: 'red',
    gradient: 'from-red-500 to-red-300'
  }
] as const;

export const getTier = (score: number) => {
  return TIERS.find(tier => score >= tier.min && score <= tier.max) || TIERS[3];
};
