"use client"
import React from 'react';
import { Moon, Star } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function SleepCard() {
  const { sleep, updateSleep } = useHealth();

  return (
    <Card title="Sleep Tracker" icon={Moon} bg="bg-indigo-50">
      <div className="space-y-2.5 text-base">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">To bed</span>
          <input
            type="time"
            value={sleep.toBed}
            onChange={(e) => updateSleep({ toBed: e.target.value })}
            className="text-base text-gray-800 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Woke up</span>
          <input
            type="time"
            value={sleep.wokeUp}
            onChange={(e) => updateSleep({ wokeUp: e.target.value })}
            className="text-base text-gray-800 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center gap-1 pt-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => updateSleep({ quality: n })} aria-label={`${n} stars`}>
              <Star className={`w-5 h-5 ${n <= sleep.quality ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}