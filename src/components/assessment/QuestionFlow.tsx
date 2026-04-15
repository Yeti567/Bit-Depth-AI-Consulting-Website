'use client';

import { Question } from '@/lib/assessment/questions';
import { QuestionCard } from './QuestionCard';
import { PillarScorebar } from './PillarScorebar';

interface QuestionFlowProps {
  currentQuestion: Question;
  questionNumber: number;
  totalQuestions: number;
  pillarScores: Record<string, number>;
  runningScore: number;
  onAnswer: (score: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  selectedScore: number | null;
}

export function QuestionFlow({
  currentQuestion,
  questionNumber,
  totalQuestions,
  pillarScores,
  runningScore,
  onAnswer,
  onPrevious,
  onNext,
  selectedScore
}: QuestionFlowProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-semibold text-cyan-400">
            Running Score: {runningScore}/100
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-900 to-cyan-500 transition-all duration-400 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Pillar scores */}
        <PillarScorebar pillarScores={pillarScores} activePillar={currentQuestion.pillar} />

        {/* Question card */}
        <div className="flex-1 flex items-center">
          <QuestionCard
            question={currentQuestion}
            onAnswer={onAnswer}
            selectedScore={selectedScore}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-8">
          <button
            onClick={onPrevious}
            disabled={questionNumber === 1}
            className="w-full sm:w-auto px-6 py-4 min-h-[48px] text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          
          {questionNumber === totalQuestions ? (
            <button
              onClick={onNext}
              disabled={selectedScore === null}
              className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See My Results →
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={selectedScore === null}
              className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
