import { PillarId } from './pillars';

export interface Question {
  id: number;
  pillar: PillarId;
  text: string;
  info: string;
  options: Array<{
    label: string;
    score: number;
  }>;
}

export const QUESTIONS: Question[] = [
  // Data Quality Questions (1-5)
  {
    id: 1,
    pillar: 'data-quality',
    text: "How would you describe your business's current data organization?",
    info: "Well-organized data is the foundation for AI. AI needs clean, structured data to learn patterns and make accurate predictions.",
    options: [
      { label: "We have no centralized data - everything is scattered across spreadsheets and systems", score: 0 },
      { label: "Some data is organized, but lots of duplication and inconsistency", score: 1 },
      { label: "We have a decent data structure, but it's not consistently maintained", score: 2 },
      { label: "We have well-organized, clean data with good documentation", score: 3 },
      { label: "We have a mature data governance framework with quality controls", score: 4 }
    ]
  },
  {
    id: 2,
    pillar: 'data-quality',
    text: "How accurate and complete is your customer and business data?",
    info: "AI models are only as good as the data they're trained on. Inaccurate or incomplete data leads to poor AI decisions.",
    options: [
      { label: "Our data has significant errors and gaps", score: 0 },
      { label: "We know there are issues but haven't quantified them", score: 1 },
      { label: "We regularly audit and clean our data", score: 2 },
      { label: "We have data quality metrics and monitoring in place", score: 3 },
      { label: "We have automated data quality checks with real-time alerts", score: 4 }
    ]
  },
  {
    id: 3,
    pillar: 'data-quality',
    text: "How easily can your team access the data they need?",
    info: "Even the best data is useless if people can't access it. AI initiatives require fast, reliable data access.",
    options: [
      { label: "Getting data requires manual requests and long wait times", score: 0 },
      { label: "Access is possible but requires technical knowledge or IT help", score: 1 },
      { label: "Most teams can access data they need with basic tools", score: 2 },
      { label: "We have self-service dashboards and reporting tools", score: 3 },
      { label: "We have a data catalog with governed, self-service access", score: 4 }
    ]
  },
  {
    id: 4,
    pillar: 'data-quality',
    text: "Do you have historical data that could train AI models?",
    info: "AI needs historical examples to learn patterns. The more historical data you have, the better your AI can perform.",
    options: [
      { label: "We don't keep historical data - it's deleted or lost", score: 0 },
      { label: "We have some historical data but it's not organized or accessible", score: 1 },
      { label: "We have 1-2 years of reasonably organized historical data", score: 2 },
      { label: "We have 3+ years of clean, accessible historical data", score: 3 },
      { label: "We have 5+ years of comprehensive historical data with proper archiving", score: 4 }
    ]
  },
  {
    id: 5,
    pillar: 'data-quality',
    text: "How well do your different systems and data sources integrate with each other?",
    info: "AI works best when it can see the complete picture. Disconnected data sources create blind spots for AI.",
    options: [
      { label: "Our systems don't talk to each other - everything is manual", score: 0 },
      { label: "Some basic integrations exist but are fragile and require maintenance", score: 1 },
      { label: "We have stable integrations between our core systems", score: 2 },
      { label: "We have a well-integrated tech stack with automated data flows", score: 3 },
      { label: "We have a unified data platform with real-time synchronization", score: 4 }
    ]
  },

  // Process Clarity Questions (6-10)
  {
    id: 6,
    pillar: 'process-clarity',
    text: "How well documented are your key business processes?",
    info: "AI needs to understand your processes to improve them. Undocumented processes are hard to automate or optimize with AI.",
    options: [
      { label: "Our processes exist only in people's heads", score: 0 },
      { label: "Some processes are documented but outdated or incomplete", score: 1 },
      { label: "Most key processes are documented and kept up to date", score: 2 },
      { label: "We have comprehensive process documentation with version control", score: 3 },
      { label: "We have a formal process management system with continuous improvement", score: 4 }
    ]
  },
  {
    id: 7,
    pillar: 'process-clarity',
    text: "How consistent are your business processes across teams and locations?",
    info: "Inconsistent processes make it hard for AI to learn and scale. Standardization enables reliable AI automation.",
    options: [
      { label: "Every team does things their own way", score: 0 },
      { label: "We try to standardize but compliance is low", score: 1 },
      { label: "Core processes are standardized, though some variation exists", score: 2 },
      { label: "We have strong standardization with clear process owners", score: 3 },
      { label: "We have enterprise-wide process standardization with regular audits", score: 4 }
    ]
  },
  {
    id: 8,
    pillar: 'process-clarity',
    text: "How well do you understand the metrics that drive your business?",
    info: "AI needs clear objectives to optimize for. Understanding your key metrics helps AI focus on what matters.",
    options: [
      { label: "We rely on gut feel and intuition", score: 0 },
      { label: "We track some metrics but aren't sure which ones matter most", score: 1 },
      { label: "We have clear KPIs that leadership reviews regularly", score: 2 },
      { label: "We have a balanced scorecard with leading and lagging indicators", score: 3 },
      { label: "We have a mature analytics framework with predictive metrics", score: 4 }
    ]
  },
  {
    id: 9,
    pillar: 'process-clarity',
    text: "How often do you review and optimize your business processes?",
    info: "AI adoption is a change process. Organizations that regularly improve their processes adapt better to AI.",
    options: [
      { label: "We rarely change processes - 'if it ain't broke, don't fix it'", score: 0 },
      { label: "We make changes only when problems become critical", score: 1 },
      { label: "We review processes annually and make incremental improvements", score: 2 },
      { label: "We have quarterly process reviews with continuous optimization", score: 3 },
      { label: "We have a culture of continuous improvement with real-time process monitoring", score: 4 }
    ]
  },
  {
    id: 10,
    pillar: 'process-clarity',
    text: "How clear are the decision-making criteria in your organization?",
    info: "AI can assist decision-making, but it needs to understand your decision logic. Clear criteria make AI more effective.",
    options: [
      { label: "Decisions are made ad-hoc based on who's available", score: 0 },
      { label: "Some decisions have criteria, but many are subjective", score: 1 },
      { label: "Most important decisions have documented criteria and approval flows", score: 2 },
      { label: "We have clear decision matrices with defined authority levels", score: 3 },
      { label: "We have automated decision support systems with clear audit trails", score: 4 }
    ]
  },

  // Technology Stack Questions (11-15)
  {
    id: 11,
    pillar: 'technology-stack',
    text: "How modern is your current technology infrastructure?",
    info: "Modern infrastructure supports AI better. Legacy systems often can't integrate with AI tools or handle the compute requirements.",
    options: [
      { label: "We're running on outdated systems with frequent downtime", score: 0 },
      { label: "Our systems are functional but approaching end-of-life", score: 1 },
      { label: "We have a reasonably modern tech stack with good uptime", score: 2 },
      { label: "We use current technologies with a clear upgrade strategy", score: 3 },
      { label: "We have a cutting-edge, cloud-native infrastructure with auto-scaling", score: 4 }
    ]
  },
  {
    id: 12,
    pillar: 'technology-stack',
    text: "Does your team have experience with cloud platforms (AWS, Azure, GCP)?",
    info: "Most AI tools run in the cloud. Cloud experience makes AI adoption faster and more cost-effective.",
    options: [
      { label: "We have no cloud experience - everything is on-premise", score: 0 },
      { label: "We use some cloud services but have limited in-house expertise", score: 1 },
      { label: "We have a team with solid cloud experience", score: 2 },
      { label: "We have cloud-certified engineers and architects", score: 3 },
      { label: "We have a dedicated cloud engineering team with best practices", score: 4 }
    ]
  },
  {
    id: 13,
    pillar: 'technology-stack',
    text: "How scalable is your current technology?",
    info: "AI projects often start small but need to scale. Your tech stack should handle growth without major rework.",
    options: [
      { label: "Our systems struggle with current load - scaling is a major concern", score: 0 },
      { label: "We can scale but it requires manual work and downtime", score: 1 },
      { label: "We have basic scalability with some automated scaling", score: 2 },
      { label: "We have good auto-scaling capabilities for predictable growth", score: 3 },
      { label: "We have elastic scaling that handles unpredictable growth seamlessly", score: 4 }
    ]
  },
  {
    id: 14,
    pillar: 'technology-stack',
    text: "How open is your technology to third-party integrations and APIs?",
    info: "AI tools often need to integrate with your existing systems. Open APIs and integration-friendly architecture accelerate AI adoption.",
    options: [
      { label: "Our systems are closed with no integration capabilities", score: 0 },
      { label: "Some integrations are possible but require custom development", score: 1 },
      { label: "We have standard APIs for most core systems", score: 2 },
      { label: "We have comprehensive APIs with good documentation and developer support", score: 3 },
      { label: "We have an API-first architecture with a robust integration ecosystem", score: 4 }
    ]
  },
  {
    id: 15,
    pillar: 'technology-stack',
    text: "How mature is your cybersecurity and data protection?",
    info: "AI introduces new security considerations. Strong security foundations are essential before adding AI to your stack.",
    options: [
      { label: "Security is ad-hoc - we react to issues as they arise", score: 0 },
      { label: "We have basic security measures but no formal program", score: 1 },
      { label: "We have a security program with regular assessments", score: 2 },
      { label: "We have comprehensive security controls and compliance certifications", score: 3 },
      { label: "We have a mature security program with AI-specific threat modeling", score: 4 }
    ]
  },

  // Team Readiness Questions (16-20)
  {
    id: 16,
    pillar: 'team-readiness',
    text: "How would you rate your team's overall technology literacy?",
    info: "AI adoption requires basic technology comfort across your organization. Tech-literate teams adapt faster to AI tools.",
    options: [
      { label: "Many team members struggle with basic technology tools", score: 0 },
      { label: "Most are comfortable with core tools but resist new technology", score: 1 },
      { label: "Our team is generally tech-savvy and open to new tools", score: 2 },
      { label: "We have a strong tech culture with continuous learning", score: 3 },
      { label: "Technology excellence is core to our culture with regular training", score: 4 }
    ]
  },
  {
    id: 17,
    pillar: 'team-readiness',
    text: "Does your organization have any experience with automation or AI tools?",
    info: "Prior experience with automation or AI makes new AI initiatives smoother. You build on existing knowledge.",
    options: [
      { label: "We have no automation or AI experience whatsoever", score: 0 },
      { label: "We've experimented with a few tools but nothing systematic", score: 1 },
      { label: "We have some successful automation projects in specific areas", score: 2 },
      { label: "We have multiple automation initiatives with documented wins", score: 3 },
      { label: "We have a mature automation practice with AI/ML in production", score: 4 }
    ]
  },
  {
    id: 18,
    pillar: 'team-readiness',
    text: "How does your organization typically approach change and new initiatives?",
    info: "AI adoption is a change management challenge. Organizations that embrace change adopt AI more successfully.",
    options: [
      { label: "We resist change - 'this is how we've always done it'", score: 0 },
      { label: "Change is possible but meets significant resistance", score: 1 },
      { label: "We're open to change with proper communication and planning", score: 2 },
      { label: "We embrace change and have a structured change management process", score: 3 },
      { label: "Change is part of our DNA with innovation embedded in our culture", score: 4 }
    ]
  },
  {
    id: 19,
    pillar: 'team-readiness',
    text: "Do you have team members who could champion AI initiatives?",
    info: "AI champions - people who understand and advocate for AI - accelerate adoption. They bridge the gap between technology and business.",
    options: [
      { label: "No one on our team has expressed interest in AI", score: 0 },
      { label: "A few people are curious but lack deep knowledge", score: 1 },
      { label: "We have some team members with AI interest and basic knowledge", score: 2 },
      { label: "We have identified AI champions with solid understanding", score: 3 },
      { label: "We have a dedicated AI team or center of excellence", score: 4 }
    ]
  },
  {
    id: 20,
    pillar: 'team-readiness',
    text: "How would you describe your organization's learning culture?",
    info: "AI is rapidly evolving. A learning culture ensures your team keeps up with new capabilities and best practices.",
    options: [
      { label: "Learning is left to individual initiative - no support", score: 0 },
      { label: "We offer some training but attendance is optional", score: 1 },
      { label: "We have regular training programs with good participation", score: 2 },
      { label: "Learning is encouraged with budgets and time allocated", score: 3 },
      { label: "Continuous learning is core to our culture with knowledge sharing systems", score: 4 }
    ]
  },

  // Strategic Alignment Questions (21-25)
  {
    id: 21,
    pillar: 'strategic-alignment',
    text: "How clear is your organization's strategic vision for the next 3-5 years?",
    info: "AI should serve your strategy, not drive it. Clear strategy ensures AI investments align with business goals.",
    options: [
      { label: "We don't have a documented strategy - we take it year by year", score: 0 },
      { label: "We have a strategy but it's vague or not well-communicated", score: 1 },
      { label: "We have a clear strategy that leadership regularly references", score: 2 },
      { label: "We have a detailed strategy with clear objectives and metrics", score: 3 },
      { label: "We have a comprehensive strategic plan with regular reviews and adjustments", score: 4 }
    ]
  },
  {
    id: 22,
    pillar: 'strategic-alignment',
    text: "Have you identified specific business problems where AI could help?",
    info: "Successful AI projects start with clear business problems, not with 'let's use AI.' Problem-first approach ensures ROI.",
    options: [
      { label: "We haven't thought about where AI might help us", score: 0 },
      { label: "We have some general ideas but nothing specific", score: 1 },
      { label: "We've identified 1-2 specific areas where AI could help", score: 2 },
      { label: "We have a prioritized list of AI use cases with business cases", score: 3 },
      { label: "We have an AI roadmap integrated into our strategic planning", score: 4 }
    ]
  },
  {
    id: 23,
    pillar: 'strategic-alignment',
    text: "How does leadership view AI - as a priority or a distraction?",
    info: "Executive sponsorship is critical for AI success. Without leadership support, AI initiatives stall.",
    options: [
      { label: "Leadership is skeptical or actively resistant to AI", score: 0 },
      { label: "Leadership is curious but sees it as low priority", score: 1 },
      { label: "Leadership sees AI as important but not urgent", score: 2 },
      { label: "Leadership is supportive and has designated AI champions", score: 3 },
      { label: "AI is a strategic priority with executive-level sponsorship", score: 4 }
    ]
  },
  {
    id: 24,
    pillar: 'strategic-alignment',
    text: "What's your organization's appetite for investment in new technology?",
    info: "AI projects require investment - in tools, talent, and time. Your investment appetite determines what's possible.",
    options: [
      { label: "We minimize all technology spending - only essential upgrades", score: 0 },
      { label: "We invest cautiously with strict ROI requirements", score: 1 },
      { label: "We're willing to invest in proven technologies with clear returns", score: 2 },
      { label: "We have a technology budget for strategic initiatives", score: 3 },
      { label: "We actively invest in innovation and emerging technologies", score: 4 }
    ]
  },
  {
    id: 25,
    pillar: 'strategic-alignment',
    text: "How do you measure the success of new initiatives and technology investments?",
    info: "AI needs clear success metrics. Without measurement, you can't prove value or justify continued investment.",
    options: [
      { label: "We don't systematically measure initiative success", score: 0 },
      { label: "We measure some things but inconsistently", score: 1 },
      { label: "We have standard metrics for major initiatives", score: 2 },
      { label: "We have a framework for measuring ROI with post-implementation reviews", score: 3 },
      { label: "We have sophisticated measurement with A/B testing and continuous optimization", score: 4 }
    ]
  }
];
