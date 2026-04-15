'use client';

import { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  grade: string;
  label: string;
  gradient: string;
}

export function ScoreRing({ score, grade, label, gradient }: ScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (cubic-bezier)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(easeOut * score));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="280" height="280" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="140"
            cy="140"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="12"
            fill="none"
          />
          
          {/* Progress circle */}
          <circle
            cx="140"
            cy="140"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#023E8A" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Score in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-bold text-white">
            {animatedScore}
          </span>
          <span className="text-lg text-gray-400">out of 100</span>
        </div>
      </div>

      {/* Grade badge */}
      <div className={`mt-6 px-6 py-3 rounded-full bg-gradient-to-r ${gradient}`}>
        <span className="text-lg font-bold text-white">
          Grade {grade} — {label}
        </span>
      </div>
    </div>
  );
}
