export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Our Approach', href: '/ai-strategy' },
  { label: 'Industries', href: '/industries' },
  { 
    label: 'AI Audit', 
    href: '/ai-audit',
    children: [
      { label: 'AI Opportunity Audit', href: '/ai-audit' },
      { label: 'AI Readiness Assessment', href: '/ai-readiness-assessment' }
    ]
  },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' }
];

export const services = [
  {
    id: 'ai-audit-roadmap',
    title: 'AI Audit & Opportunity Mapping',
    summary: 'Assess your current processes, data readiness, and operational friction points to identify high-value AI use cases.',
    detail: 'We start with a practical audit of workflows, systems, and team readiness so you can prioritize the right opportunities before making costly investments.'
  },
  {
    id: 'use-case-prioritization',
    title: 'Use Case Prioritization',
    summary: 'Rank opportunities by impact, effort, and risk to focus on initiatives with measurable ROI.',
    detail: 'Every recommendation is tied to operational outcomes, business constraints, and the realities of industrial and mid-market environments.'
  },
  {
    id: 'vendor-selection',
    title: 'Vendor-Neutral Solution Selection',
    summary: 'Evaluate tools, platforms, and vendors without bias so your technology choices fit your business.',
    detail: 'We help you compare vendors, assess architecture tradeoffs, and avoid getting locked into solutions that do not serve long-term needs.'
  },
  {
    id: 'implementation-planning',
    title: 'Implementation Planning & Governance',
    summary: 'Build a realistic implementation roadmap with governance, change management, and success criteria.',
    detail: 'From pilot structure to internal ownership and rollout sequencing, we define the plan required to move from concept to operational adoption.'
  },
  {
    id: 'ai-advisory',
    title: 'Fractional AI Advisory',
    summary: 'Ongoing strategic guidance for leadership teams navigating AI decisions, partnerships, and internal capability building.',
    detail: 'We act as an independent advisor for teams that need credible direction without hiring full-time AI leadership too early.'
  }
];

export const processSteps = [
  {
    title: 'Audit',
    description: 'Review operations, data, systems, and bottlenecks to establish a clear baseline.'
  },
  {
    title: 'Prioritize',
    description: 'Score practical use cases based on feasibility, operational value, and implementation risk.'
  },
  {
    title: 'Design',
    description: 'Define the roadmap, vendor strategy, success metrics, and governance for rollout.'
  },
  {
    title: 'Activate',
    description: 'Support pilots, vendor engagement, and leadership decision-making through deployment.'
  }
];

export const industries = [
  {
    title: 'Oil & Gas',
    href: '/industries/oil-and-gas',
    description: 'Support upstream, midstream, field operations, maintenance, and production teams with AI strategies grounded in operational realities.'
  },
  {
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    description: 'Improve throughput, maintenance planning, quality assurance, and process visibility with practical AI implementation.'
  }
];

export const testimonials = [
  {
    quote: 'BitDepth brings structure to AI decision-making. They helped us separate real opportunities from vendor noise and focus on measurable outcomes.',
    name: 'Operations Leader',
    role: 'Canadian Industrial Business'
  },
  {
    quote: 'Their audit-first approach made the path forward clear. We came away with a roadmap we could actually execute.',
    name: 'Manufacturing Executive',
    role: 'Mid-Market Manufacturer'
  },
  {
    quote: 'What stood out was the vendor-neutral advice. We were able to evaluate options with confidence instead of guessing.',
    name: 'Transformation Sponsor',
    role: 'Energy Sector Client'
  }
];

export const faqs = [
  {
    question: 'What is included in the AI Audit?',
    answer: 'The audit includes stakeholder discovery, workflow assessment, data and systems review, opportunity mapping, prioritization, and a practical roadmap for next steps.'
  },
  {
    question: 'Do you sell software or implementation services tied to a specific vendor?',
    answer: 'No. BitDepth is vendor-neutral, which means recommendations are based on fit, feasibility, and business outcomes rather than software commissions or partner quotas.'
  },
  {
    question: 'Is this relevant if we are early in our AI journey?',
    answer: 'Yes. The audit is designed to help leadership teams understand where AI can create value before committing budget or resources to the wrong initiatives.'
  },
  {
    question: 'Do you work with industrial and mid-market businesses outside of oil and gas or manufacturing?',
    answer: 'Yes. Those sectors are core focus areas, but the methodology also applies to other Canadian mid-market businesses with operationally complex environments.'
  }
];

export const resources = [
  {
    title: 'How to Evaluate AI Use Cases in Industrial Operations',
    category: 'Guide',
    href: '/resources/how-to-evaluate-ai-use-cases-in-industrial-operations',
    description: 'A practical framework for identifying AI opportunities with measurable operational value.'
  },
  {
    title: 'What Vendor-Neutral AI Consulting Actually Means',
    category: 'Perspective',
    href: '/resources/what-vendor-neutral-ai-consulting-actually-means',
    description: 'Why independent advice matters when comparing platforms, pilots, and long-term architecture choices.'
  },
  {
    title: 'Building an AI Roadmap for Canadian Mid-Market Companies',
    category: 'Roadmap',
    href: '/resources/building-an-ai-roadmap-for-canadian-mid-market-companies',
    description: 'How leadership teams can move from curiosity to a disciplined implementation plan.'
  },
  {
    title: "Dead in the Field: Why Predictive Maintenance Can't Wait",
    category: 'Oil & Gas',
    href: '/resources/dead-in-the-field-why-predictive-maintenance-cant-wait',
    description: 'Discover how predictive maintenance AI is transforming remote oilfield operations in Canada. BitDepth AI Consulting delivers practical, edge-ready solutions for oil and gas operators.'
  },
  {
    title: 'Digital Twin Technology: How Smart Manufacturers Are Pulling Ahead',
    category: 'Manufacturing',
    href: '/resources/digital-twin-technology-how-smart-manufacturers-are-pulling-ahead',
    description: 'Discover how digital twin technology is transforming smart manufacturing. BitDepth AI Consulting delivers industrial IoT, AI predictive maintenance, and Industry 4.0 solutions for manufacturers.'
  },
  {
    title: 'See Every Defect: AI Computer Vision Quality Control',
    category: 'Manufacturing',
    href: '/resources/see-every-defect-ai-computer-vision-quality-control',
    description: 'Discover how AI computer vision quality control helps manufacturers detect defects, eliminate rework, and achieve automated visual inspection at production speed. BitDepth AI Consulting delivers results.'
  }
];

export const contactDetails = {
  location: '02 Birch Lane, Barriere, BC, V0E 1E0',
  email: 'blake@bitdepthaiconsulting.com',
  phone: '780-832-5158'
};
