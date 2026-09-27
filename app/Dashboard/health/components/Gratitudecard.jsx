"use client"
import React from 'react';
import { Heart } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function GratitudeCard() {
  const { gratitude, updateGratitude } = useHealth();

  return (
    <Card title="Today I Am Grateful For" icon={Heart} bg="bg-pink-50">
      <div className="space-y-2.5">
        {gratitude.map((g, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <input
              value={g}
              onChange={(e) => updateGratitude(i, e.target.value)}
              className="w-full text-base text-gray-800 border-b border-black/10 pb-1 outline-none focus:border-pink-500 bg-transparent"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}