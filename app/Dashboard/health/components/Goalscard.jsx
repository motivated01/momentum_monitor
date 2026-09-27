"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function GoalsCard() {
  const { goals, addGoal, toggleGoal, removeGoal } = useHealth();
  const [newGoal, setNewGoal] = useState('');

  const handleAdd = () => {
    addGoal(newGoal);
    setNewGoal('');
  };

  return (
    <Card title="Health Goals" bg="bg-emerald-50">
      <div className="space-y-2 mb-3">
        {goals.map((g) => (
          <div key={g.id} className="flex items-center gap-2.5 group">
            <button
              onClick={() => toggleGoal(g.id)}
              aria-label={g.done ? 'Mark incomplete' : 'Mark complete'}
              className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                g.done ? 'bg-emerald-500 border-emerald-500' : 'border-gray-400'
              }`}
            >
              {g.done && <span className="text-white text-xs leading-none">✓</span>}
            </button>
            <span className={`text-base flex-1 ${g.done ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {g.text}
            </span>
            <button
              onClick={() => removeGoal(g.id)}
              aria-label="Remove goal"
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        {goals.length === 0 && <p className="text-sm text-gray-500">No goals added yet.</p>}
      </div>
      <div className="flex items-center gap-2 border-t border-black/10 pt-3">
        <input
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a goal..."
          className="w-full text-base outline-none placeholder-gray-500 text-gray-800 bg-transparent"
        />
        <button onClick={handleAdd} aria-label="Add goal" className="text-emerald-600 hover:text-emerald-700 shrink-0">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
}