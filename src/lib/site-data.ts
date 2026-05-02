export type NavChild = { label: string; href: string };
export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; children: NavChild[] };

export const navigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
      { label: 'Missed Call Text Back', href: '/services/missed-call-text-back' },
      { label: 'AI Implementation', href: '/services/ai-implementation' },
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Custom AI Workers', href: '/services/custom-ai-workers' }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
      { label: 'Electrical', href: '/industries/electrical' },
      { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
      { label: 'Field Services', href: '/industries/field-services' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'COR Pathway', href: '/industries/cor-pathway' }
    ]
  },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
