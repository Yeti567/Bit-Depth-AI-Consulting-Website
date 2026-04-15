// Google Analytics 4 event tracking helpers

export const trackAssessmentStarted = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'assessment_started', {
      event_category: 'ai_readiness',
    });
  }
};

export const trackQuestionAnswered = (questionNumber: number, pillar: string, score: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'question_answered', {
      event_category: 'ai_readiness',
      question_number: questionNumber,
      pillar: pillar,
      score: score,
    });
  }
};

export const trackAssessmentCompleted = (totalScore: number, grade: string, tierLabel: string, pillarData: Record<string, number>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'assessment_completed', {
      event_category: 'ai_readiness',
      total_score: totalScore,
      grade: grade,
      tier_label: tierLabel,
      pillar_data: JSON.stringify(pillarData),
    });
  }
};

export const trackLeadFormSubmitted = (totalScore: number, grade: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'lead_form_submitted', {
      event_category: 'ai_readiness',
      total_score: totalScore,
      grade: grade,
    });
  }
};
