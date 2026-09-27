"use client"
import React from 'react';
import { Dumbbell } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { MOVEMENT_OPTIONS } from '../lib/constants';

export default function MovementCard() {
  const { movement, toggleMovement, movementOther, setMovementOther } = useHealth();

  return (
    <Card title="Movement" bg="bg-orange-50">
      <p className="text-sm text-gray-600 mb-3">Move your body, clear your mind.</p>
      <div className="space-y-2.5">
        {MOVEMENT_OPTIONS.map((m) => (
          <label key={m.key} className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={movement[m.key]}
              onChange={() => toggleMovement(m.key)}
              className="w-4 h-4 rounded border-gray-400 text-orange-600 focus:ring-orange-500"
            />
            <span className="text-base text-gray-800">{m.label}</span>
          </label>
        ))}
        <div className="flex items-center gap-2.5">
          <Dumbbell className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            value={movementOther}
            onChange={(e) => setMovementOther(e.target.value)}
            placeholder="Other..."
            className="w-full text-base text-gray-800 placeholder-gray-500 border-b border-black/10 pb-1 outline-none focus:border-orange-500 bg-transparent"
          />
        </div>
      </div>
    </Card>
  );
}