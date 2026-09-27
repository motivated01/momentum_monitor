"use client"
import React from 'react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function PrioritiesCard() {
  const { priorities, updatePriority } = useHealth();

  return (
    <Card title="Top 3 Priorities" bg="bg-blue-50">
      <div className="space-y-3">
        {priorities.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <input
              value={p}
              onChange={(e) => updatePriority(i, e.target.value)}
              placeholder={`Priority ${i + 1}`}
              className="w-full text-base text-gray-800 placeholder-gray-500 border-b border-black/10 pb-1.5 outline-none focus:border-blue-600 transition-colors bg-transparent"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}