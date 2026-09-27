"use client"
import React from 'react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { ENERGY_LEVELS, ENERGY_FILL } from '../lib/constants';

export default function EnergyCard() {
  const { energy, setEnergy } = useHealth();

  return (
    <Card title="Energy Level" bg="bg-amber-50">
      <div className="flex items-end gap-4">
        <div className="w-9 h-20 border-2 border-amber-300 rounded-md relative flex items-end p-0.5 shrink-0 bg-white/60">
          <div
            className="w-full bg-amber-500 rounded-sm transition-all"
            style={{ height: `${energy ? ENERGY_FILL[energy] : 0}%` }}
          />
        </div>
        <div className="space-y-1.5 flex-1">
          {ENERGY_LEVELS.map((level) => (
            <label key={level} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="energy"
                checked={energy === level}
                onChange={() => setEnergy(level)}
                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
              />
              <span className="text-sm text-gray-800">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </Card>
  );
}