import { PillarId } from './pillars';

export interface Recommendation {
  pillar: PillarId;
  level: 'low' | 'mid' | 'high';
  items: string[];
}

export const PILLAR_RECS: Record<PillarId, { low: string[]; mid: string[]; high: string[] }> = {
  'data-quality': {
    low: [
      'Start with a data audit: Map out where your data lives, what systems you use, and who owns each data source.',
      'Implement basic data hygiene: Establish naming conventions, create templates for data entry, and document your data sources.',
      'Choose one critical business process and centralize its data in a single, accessible location (e.g., a shared database or well-structured spreadsheet).'
    ],
    mid: [
      'Implement a data quality checklist: Create a simple process for validating data before it enters your systems.',
      'Set up regular data reviews: Schedule monthly check-ins to review data quality issues and fix them systematically.',
      'Build a data dictionary: Document what each data field means, where it comes from, and how it should be used.'
    ],
    high: [
      'Implement automated data quality monitoring: Set up alerts for data anomalies, missing values, or format issues.',
      'Establish a data governance framework: Define data ownership, quality standards, and approval processes for data changes.',
      'Consider a data warehouse or data lake: Centralize your data in a system designed for analytics and AI workloads.'
    ]
  },
  'process-clarity': {
    low: [
      'Document your top 3 processes: Write down step-by-step how your most important workflows actually happen today.',
      'Identify process bottlenecks: Talk to your team about where work gets stuck or requires manual intervention.',
      'Standardize one core process: Choose a critical process and create a standard way everyone should do it.'
    ],
    mid: [
      'Create process maps: Visual diagrams help everyone understand workflows and identify improvement opportunities.',
      'Establish process owners: Assign clear accountability for each major process with responsibility for updates and improvements.',
      'Implement regular process reviews: Schedule quarterly reviews to assess whether processes are working and need updates.'
    ],
    high: [
      'Implement process mining tools: Use software to automatically discover and visualize your actual business processes.',
      'Build a process improvement culture: Train teams in methodologies like Lean or Six Sigma for systematic optimization.',
      'Consider business process management (BPM) software: Tools that help design, execute, and monitor business processes.'
    ]
  },
  'technology-stack': {
    low: [
      'Audit your current systems: Make a list of all software and systems you use, their age, and critical issues.',
      'Address critical technical debt: Fix the most urgent stability and security issues before adding new capabilities.',
      'Plan your technology roadmap: Create a 12-18 month plan for system upgrades and modernization priorities.'
    ],
    mid: [
      'Evaluate cloud migration: Assess which workloads could benefit from moving to cloud infrastructure.',
      'Implement API standards: Establish guidelines for how systems should expose data and functionality to each other.',
      'Build an integration platform: Create or adopt tools that make connecting systems easier and more reliable.'
    ],
    high: [
      'Adopt a microservices architecture: Break monolithic systems into smaller, independently deployable services.',
      'Implement infrastructure as code: Use tools like Terraform or CloudFormation to manage infrastructure programmatically.',
      'Establish a DevOps practice: Combine development and operations to enable faster, more reliable technology deployment.'
    ]
  },
  'team-readiness': {
    low: [
      'Assess current skills: Survey your team to understand their technology comfort levels and identify gaps.',
      'Provide foundational training: Offer basic training on the digital tools your team uses every day.',
      'Identify AI champions: Find team members who are curious about technology and empower them to explore and share learnings.'
    ],
    mid: [
      'Create a learning budget: Allocate funds and time for team members to take courses, attend workshops, or earn certifications.',
      'Implement a knowledge-sharing program: Regular lunch-and-learns where team members share what they\'re learning.',
      'Start small automation projects: Pick 2-3 simple automation opportunities and let interested team members lead them.'
    ],
    high: [
      'Build an AI center of excellence: Create a cross-functional team dedicated to identifying and implementing AI opportunities.',
      'Partner with AI experts: Bring in consultants or vendors to transfer knowledge and build internal capabilities.',
      'Establish an AI governance framework: Create guidelines for responsible AI use, ethics, and ongoing evaluation.'
    ]
  },
  'strategic-alignment': {
    low: [
      'Clarify your business objectives: Write down your top 3 business goals for the next 12 months.',
      'Identify AI opportunities: Brainstorm specific business problems where AI might help achieve those objectives.',
      'Educate leadership: Share case studies and examples of how similar businesses are using AI successfully.'
    ],
    mid: [
      'Develop an AI strategy document: Create a 1-2 page document outlining how AI supports your business goals.',
      'Prioritize AI use cases: Rank potential AI projects by business impact, feasibility, and resource requirements.',
      'Secure executive sponsorship: Identify a senior leader who can champion AI initiatives and remove obstacles.'
    ],
    high: [
      'Integrate AI into strategic planning: Make AI a standing agenda item in your regular strategy and planning sessions.',
      'Establish an AI investment budget: Create dedicated funding for AI initiatives separate from general technology spending.',
      'Build an AI roadmap: Create a 12-24 month timeline for AI initiatives with milestones, resource allocation, and success metrics.'
    ]
  }
};

export const getRecommendations = (pillar: PillarId, score: number): string[] => {
  if (score <= 6) return PILLAR_RECS[pillar].low;
  if (score <= 14) return PILLAR_RECS[pillar].mid;
  return PILLAR_RECS[pillar].high;
};
