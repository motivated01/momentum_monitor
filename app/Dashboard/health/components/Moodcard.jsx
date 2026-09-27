"use client"
import React from 'react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { MOODS } from '../lib/constants';

export default function MoodCard() {
  const { mood, setMood, moodNotes, setMoodNotes } = useHealth();

  return (
    <Card title="How I Feel" bg="bg-violet-50">
      <div className="flex justify-between mb-3">
        {MOODS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setMood(id)}
            className={`flex flex-col items-center gap-1.5 px-2 py-2 rounded-xl transition-colors ${
              mood === id ? 'bg-violet-100' : 'hover:bg-white/60'
            }`}
          >
            <Icon className={`w-7 h-7 ${mood === id ? 'text-violet-600' : 'text-gray-400'}`} />
            <span className={`text-sm ${mood === id ? 'text-violet-700 font-medium' : 'text-gray-500'}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
      <textarea
        value={moodNotes}
        onChange={(e) => setMoodNotes(e.target.value)}
        placeholder="Notes..."
        rows={2}
        className="w-full text-base text-gray-800 placeholder-gray-500 outline-none resize-none border-t border-black/10 pt-2 bg-transparent"
      />
    </Card>
  );
}