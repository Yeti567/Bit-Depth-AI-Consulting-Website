export const PILLARS = [
  {
    id: 'data-quality',
    label: 'Data Quality',
    emoji: '📊',
    color: '#00D4FF'
  },
  {
    id: 'process-clarity',
    label: 'Process Clarity',
    emoji: '⚙️',
    color: '#00B4D8'
  },
  {
    id: 'technology-stack',
    label: 'Technology Stack',
    emoji: '🖥️',
    color: '#0096C7'
  },
  {
    id: 'team-readiness',
    label: 'Team Readiness',
    emoji: '👥',
    color: '#0077B6'
  },
  {
    id: 'strategic-alignment',
    label: 'Strategic Alignment',
    emoji: '🎯',
    color: '#023E8A'
  }
] as const;

export type PillarId = typeof PILLARS[number]['id'];
