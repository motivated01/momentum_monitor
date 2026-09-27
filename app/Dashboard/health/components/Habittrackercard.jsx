"use client"
import React from 'react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { DAYS, HABITS } from '../lib/constants';

export default function HabitTrackerCard({ className = '' }) {
  const { habitData, toggleHabit } = useHealth();

  return (
    <Card title="Daily Habit Tracker" bg="bg-white" className={className}>
      <table className="w-full text-base">
        <thead>
          <tr>
            <th className="text-left pb-2" />
            {DAYS.map((d, i) => (
              <th key={i} className="text-center font-medium text-gray-500 text-sm pb-2 w-8">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HABITS.map((h) => (
            <tr key={h.id} className="border-t border-black/5">
              <td className="py-2.5 pr-2">
                <div className="flex items-center gap-2">
                  <h.icon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-gray-800 text-sm whitespace-nowrap">{h.label}</span>
                </div>
              </td>
              {habitData[h.id].map((checked, dayIdx) => (
                <td key={dayIdx} className="text-center">
                  <button
                    onClick={() => toggleHabit(h.id, dayIdx)}
                    aria-label={`${h.label} — ${DAYS[dayIdx]}`}
                    className={`w-5 h-5 rounded-full border transition-colors ${
                      checked ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-blue-400'
                    }`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}