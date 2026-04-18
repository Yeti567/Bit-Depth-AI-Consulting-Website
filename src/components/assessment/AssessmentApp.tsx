'use client';

import { useState } from 'react';
import { Landing } from './Landing';
import { QuestionFlow } from './QuestionFlow';
import { Results } from './Results';
import { LeadGate } from './LeadGate';
import { QUESTIONS } from '@/lib/assessment/questions';
import { PILLARS } from '@/lib/assessment/pillars';
import { getTier } from '@/lib/assessment/tiers';
import {
  trackAssessmentStarted,
  trackQuestionAnswered,
  trackAssessmentCompleted,
} from '@/lib/assessment/analytics';

type Screen = 'landing' | 'questions' | 'lead-gate' | 'results';

function createInitialPillarScores(): Record<string, number> {
  return Object.fromEntries(PILLARS.map((pillar) => [pillar.id, 0]));
}

export function AssessmentApp() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [pillarScores, setPillarScores] = useState<Record<string, number>>(createInitialPillarScores);

  const handleStart = () => {
    trackAssessmentStarted();
    setScreen('questions');
  };

  const handleAnswer = (score: number) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    
    // Update answers
    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);

    // Update pillar scores
    const newPillarScores = { ...pillarScores };
    newPillarScores[currentQuestion.pillar] = (newPillarScores[currentQuestion.pillar] || 0) + score;
    setPillarScores(newPillarScores);

    // Track event
    trackQuestionAnswered(currentQuestionIndex + 1, currentQuestion.pillar, score);

    // Auto-advance after 300ms
    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const previousQuestion = QUESTIONS[currentQuestionIndex - 1];
      
      // Remove the answer
      const newAnswers = { ...answers };
      delete newAnswers[previousQuestion.id];
      setAnswers(newAnswers);

      // Recalculate pillar scores
      const newPillarScores: Record<string, number> = {};
      PILLARS.forEach(pillar => {
        newPillarScores[pillar.id] = 0;
      });

      Object.entries(newAnswers).forEach(([questionId, score]) => {
        const question = QUESTIONS.find(q => q.id === parseInt(questionId));
        if (question) {
          newPillarScores[question.pillar] += score;
        }
      });

      setPillarScores(newPillarScores);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Assessment complete - go to lead gate
      const totalScore = Object.values(pillarScores).reduce((sum, score) => sum + score, 0);
      const tier = getTier(totalScore);
      trackAssessmentCompleted(totalScore, tier.grade, tier.label, pillarScores);
      setScreen('lead-gate');
    }
  };

  const handleUnlock = () => {
    setScreen('results');
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setPillarScores(createInitialPillarScores());
    setScreen('landing');
  };

  const totalScore = Object.values(pillarScores).reduce((sum, score) => sum + score, 0);
  const runningScore = totalScore;
  const tier = getTier(totalScore);
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const selectedScore = answers[currentQuestion.id] ?? null;

  return (
    <div className="min-h-screen bg-[#0B1426]">
      {screen === 'landing' && <Landing onStart={handleStart} />}
      
      {screen === 'questions' && (
        <QuestionFlow
          currentQuestion={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS.length}
          pillarScores={pillarScores}
          runningScore={runningScore}
          onAnswer={handleAnswer}
          onPrevious={handlePrevious}
          onNext={handleNext}
          selectedScore={selectedScore}
        />
      )}
      
      {screen === 'lead-gate' && (
        <LeadGate
          totalScore={totalScore}
          grade={tier.grade}
          tierLabel={tier.label}
          pillarScores={pillarScores}
          onUnlock={handleUnlock}
        />
      )}
      
      {screen === 'results' && (
        <div className="min-h-screen px-4 py-12 relative overflow-hidden">
          {/* Background effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <Results
              pillarScores={pillarScores}
              totalScore={totalScore}
              onRestart={handleRestart}
            />
          </div>
        </div>
      )}
    </div>
  );
}
