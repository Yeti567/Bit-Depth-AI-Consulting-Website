export const OFFERS = {
  profitLeakReview: {
    name: 'Profit Leak Detection Review',
    price: '$250',
    priceNumeric: 250,
    currency: 'CAD',
    bestFor: 'Owners not yet ready for a full audit',
    primaryCta: 'Book Profit Leak Review',
    href: '/services/profit-leak-review'
  },
  aiAudit: {
    name: 'AI Opportunity Audit',
    price: 'Starting at $5,000',
    priceNumeric: 5000,
    currency: 'CAD',
    bestFor: 'Businesses ready for an implementation roadmap',
    primaryCta: 'Book the AI Opportunity Audit',
    href: '/services/ai-audit'
  },
  missedCallTextBack: {
    name: 'Missed Call Text Back',
    price: 'From $497 per month',
    priceNumeric: 497,
    currency: 'CAD',
    bestFor: 'HVAC, plumbing, electrical, and trades missing inbound calls',
    primaryCta: 'Book a 15-minute fit check',
    href: '/services/missed-call-text-back'
  },
  workflowAutomation: {
    name: 'Workflow Automation',
    price: 'From $5,000',
    priceNumeric: 5000,
    currency: 'CAD',
    bestFor: 'Admin-heavy contractor and field-service teams',
    primaryCta: 'Book a discovery call',
    href: '/services/workflow-automation'
  },
  customAiWorkers: {
    name: 'Custom AI Workers',
    price: 'From $10,000',
    priceNumeric: 10000,
    currency: 'CAD',
    bestFor: 'Defined repeatable roles inside the business',
    primaryCta: 'Book a discovery call',
    href: '/services/custom-ai-workers'
  },
  aiBookingAgent: {
    name: 'AI Booking Agent',
    price: 'From $299 per month',
    priceNumeric: 299,
    currency: 'CAD',
    bestFor: 'Trades and field-service businesses handling inbound voice and web leads',
    primaryCta: 'Book a fit check',
    href: '/services/ai-booking-agent'
  },
  aiImplementation: {
    name: 'AI Implementation',
    price: 'From $12,000',
    priceNumeric: 12000,
    currency: 'CAD',
    bestFor: 'Companies with a completed audit ready to build the recommended automations',
    primaryCta: 'Book a discovery call',
    href: '/services/ai-implementation'
  }
} as const;

export type OfferKey = keyof typeof OFFERS;
export type Offer = (typeof OFFERS)[OfferKey];
