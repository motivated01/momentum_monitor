"use client"
import React from 'react';
import { Heart } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';

export default function SelfCareCard() {
  const { selfCare, setSelfCare } = useHealth();

  return (
    <Card title="Self-Care Reminder" icon={Heart} bg="bg-rose-50">
      <textarea
        value={selfCare}
        onChange={(e) => setSelfCare(e.target.value)}
        placeholder="One kind thing I'll do for myself today..."
        rows={3}
        className="w-full text-base text-gray-800 placeholder-gray-500 outline-none resize-none bg-transparent"
      />
    </Card>
  );
}