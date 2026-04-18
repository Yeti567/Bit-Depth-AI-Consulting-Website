// Google Analytics 4 event tracking helpers

type GtagEventParams = Record<string, string | number>;

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: GtagEventParams) => void;
  }
}

function sendAnalyticsEvent(eventName: string, params: GtagEventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export const trackAssessmentStarted = () => {
  sendAnalyticsEvent('assessment_started', {
    event_category: 'ai_readiness',
  });
};

export const trackQuestionAnswered = (questionNumber: number, pillar: string, score: number) => {
  sendAnalyticsEvent('question_answered', {
    event_category: 'ai_readiness',
    question_number: questionNumber,
    pillar,
    score,
  });
};

export const trackAssessmentCompleted = (totalScore: number, grade: string, tierLabel: string, pillarData: Record<string, number>) => {
  sendAnalyticsEvent('assessment_completed', {
    event_category: 'ai_readiness',
    total_score: totalScore,
    grade,
    tier_label: tierLabel,
    pillar_data: JSON.stringify(pillarData),
  });
};

export const trackLeadFormSubmitted = (totalScore: number, grade: string, industry?: string) => {
  sendAnalyticsEvent('lead_form_submitted', {
    event_category: 'ai_readiness',
    total_score: totalScore,
    grade,
    ...(industry ? { industry } : {}),
  });
};
