"use client"
import React from 'react';
import { Heart, Plus, X } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function SupportsCard() {
  const { supports, updateSupport, addSupport, removeSupport } = useHealth();

  return (
    <Card title="Things That Support My Health" icon={Heart} bg="bg-red-50">
      <div className="space-y-2">
        {supports.map((s, i) => (
          <div key={i} className="flex items-center gap-2.5 group">
            <Heart className="w-4 h-4 text-red-500 fill-red-500 shrink-0" />
            <input
              value={s}
              onChange={(e) => updateSupport(i, e.target.value)}
              className="w-full text-base text-gray-800 border-b border-black/10 pb-1 outline-none focus:border-red-500 bg-transparent"
            />
            <button
              onClick={() => removeSupport(i)}
              aria-label="Remove"
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-opacity shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button onClick={addSupport} className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 pt-1">
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>
    </Card>
  );
}