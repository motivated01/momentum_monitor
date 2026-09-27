"use client"
import React from 'react';
import { Sun } from 'lucide-react';
import { useHealth } from '../context/Healthcontext';
import { todayLabel } from '../lib/constants';

export default function Header() {
  const { intention, setIntention } = useHealth();

  return (
    <header className="flex items-center justify-between flex-wrap gap-4 mb-8">
      <div>
        <p className="text-base font-medium text-blue-600">{todayLabel()}</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-1">Health &amp; Wellness</h1>
      </div>
      <div className="flex items-center gap-2 bg-white border border-black/10 rounded-xl px-4 py-3 shadow-sm flex-1 max-w-md">
        <Sun className="w-5 h-5 text-amber-500 shrink-0" />
        <input
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Today's intention..."
          className="w-full text-base text-gray-800 placeholder-gray-500 outline-none bg-transparent"
        />
      </div>
    </header>
  );
}