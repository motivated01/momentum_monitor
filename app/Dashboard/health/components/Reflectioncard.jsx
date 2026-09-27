"use client"
import React from 'react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { REFLECTION_PROMPTS } from '../lib/constants';

export default function ReflectionCard({ className = '' }) {
  const { reflection, updateReflection } = useHealth();

  return (
    <Card title="End of Day Reflection" bg="bg-teal-50" className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {REFLECTION_PROMPTS.map(({ key, q }) => (
          <div key={key}>
            <p className="text-sm text-gray-600 mb-1.5">{q}</p>
            <textarea
              value={reflection[key]}
              onChange={(e) => updateReflection(key, e.target.value)}
              rows={2}
              className="w-full text-base text-gray-800 outline-none resize-none border-b border-black/10 pb-1 bg-transparent"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}