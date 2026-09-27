"use client"
import React from 'react';
import { Utensils } from 'lucide-react';
import Card from './ui/Card';
import { useHealth } from '../context/Healthcontext';
import { MEAL_KEYS } from '../lib/constants';

export default function MealsCard() {
  const { meals, updateMeal } = useHealth();

  return (
    <Card title="Meals" icon={Utensils} bg="bg-lime-50">
      <div className="space-y-3">
        {MEAL_KEYS.map((key) => (
          <div key={key}>
            <label className="text-sm text-gray-600 capitalize block mb-1">{key}</label>
            <input
              value={meals[key]}
              onChange={(e) => updateMeal(key, e.target.value)}
              className="w-full text-base text-gray-800 border-b border-black/10 pb-1 outline-none focus:border-lime-600 bg-transparent"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}