"use client"
import React from 'react';
import { Droplet } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function WaterIntakeCard() {
  const { waterGoal, waterCount, setWaterCount } = useHealth();

  return (
    <Card title="Water Intake" icon={Droplet} bg="bg-cyan-50">
      <p className="text-sm text-gray-600 mb-3">Goal: {waterGoal} glasses</p>
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: waterGoal }).map((_, i) => (
          <button
            key={i}
            onClick={() => setWaterCount(waterCount === i + 1 ? i : i + 1)}
            aria-label={`Glass ${i + 1}`}
            className={`aspect-square rounded-lg border flex items-center justify-center transition-colors ${
              i < waterCount ? 'bg-cyan-100 border-cyan-400' : 'border-gray-300 bg-white/60'
            }`}
          >
            <Droplet className={`w-5 h-5 ${i < waterCount ? 'text-cyan-600 fill-cyan-600' : 'text-gray-400'}`} />
          </button>
        ))}
      </div>
    </Card>
  );
}