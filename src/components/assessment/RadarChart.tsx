'use client';

import { useEffect, useState } from 'react';
import { PILLARS } from '@/lib/assessment/pillars';

interface RadarChartProps {
  pillarScores: Record<string, number>;
}

export function RadarChart({ pillarScores }: RadarChartProps) {
  const [animate, setAnimate] = useState(false);
  const size = 280; // Reduced from 320 for better mobile fit
  const center = size / 2;
  const radius = 100; // Reduced from 120 proportionally

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Calculate points for the radar chart
  const getPoint = (index: number, value: number) => {
    const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
    const normalizedValue = value / 20; // Max score per pillar is 20
    const x = center + radius * normalizedValue * Math.cos(angle);
    const y = center + radius * normalizedValue * Math.sin(angle);
    return { x, y };
  };

  // Get background grid points (concentric pentagons)
  const getGridPoints = (level: number) => {
    const points = PILLARS.map((_, index) => {
      const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
      const x = center + (radius * level / 4) * Math.cos(angle);
      const y = center + (radius * level / 4) * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
    return points;
  };

  // Get data polygon points
  const getDataPoints = () => {
    return PILLARS.map((pillar, index) => {
      const point = getPoint(index, pillarScores[pillar.id] || 0);
      return `${point.x},${point.y}`;
    }).join(' ');
  };

  // Get axis lines end points
  const getAxisPoints = (index: number) => {
    const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  };

  // Get label positions
  const getLabelPosition = (index: number) => {
    const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
    const labelRadius = radius + 35;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <svg width={size} height={size} className="mb-6 w-full h-auto" viewBox={`0 0 ${size} ${size}`}>
        {/* Background grid */}
        {[1, 2, 3, 4].map((level) => (
          <polygon
            key={level}
            points={getGridPoints(level)}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {PILLARS.map((_, index) => {
          const { x, y } = getAxisPoints(index);
          return (
            <line
              key={index}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={getDataPoints()}
          fill="rgba(0, 212, 255, 0.2)"
          stroke="#00D4FF"
          strokeWidth="2"
          style={{
            opacity: animate ? 1 : 0,
            transition: 'opacity 0.8s ease-out',
          }}
        />

        {/* Data points */}
        {PILLARS.map((pillar, index) => {
          const point = getPoint(index, pillarScores[pillar.id] || 0);
          return (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#00D4FF"
              style={{
                opacity: animate ? 1 : 0,
                transition: 'opacity 0.8s ease-out',
              }}
            />
          );
        })}
      </svg>

      {/* Labels */}
      <div className="relative" style={{ width: size, height: size }}>
        {PILLARS.map((pillar, index) => {
          const { x, y } = getLabelPosition(index);
          return (
            <div
              key={index}
              className="absolute text-center"
              style={{
                left: x - center,
                top: y - center,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="text-2xl mb-1">{pillar.emoji}</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                {pillar.label}
              </div>
              <div className="text-sm font-bold text-white">
                {pillarScores[pillar.id] || 0}/20
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
