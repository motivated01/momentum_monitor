import {
  Droplet, Footprints, BookOpen, Moon, Sparkles, Heart,
  Smile, Meh, Frown,
} from 'lucide-react';

export const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const HABITS = [
  { id: 'water', label: 'Drink water', icon: Droplet },
  { id: 'move', label: 'Move my body', icon: Footprints },
  { id: 'read', label: 'Read', icon: BookOpen },
  { id: 'sleep', label: 'Sleep 7+ hrs', icon: Moon },
  { id: 'mindful', label: 'Mindful minute', icon: Sparkles },
  { id: 'gratitude', label: 'Gratitude', icon: Heart },
];

export const MOODS = [
  { id: 'great', label: 'Great', Icon: Smile },
  { id: 'okay', label: 'Okay', Icon: Meh },
  { id: 'rough', label: 'Rough', Icon: Frown },
];

export const ENERGY_LEVELS = ['High', 'Good', 'Medium', 'Low', 'Drained'];
export const ENERGY_FILL = { High: 100, Good: 80, Medium: 55, Low: 30, Drained: 10 };

export const MEAL_KEYS = ['breakfast', 'lunch', 'dinner', 'snacks'];

export const MOVEMENT_OPTIONS = [
  { key: 'walk', label: 'Walk' },
  { key: 'strength', label: 'Strength training' },
  { key: 'yoga', label: 'Yoga / Pilates' },
  { key: 'cardio', label: 'Cardio' },
];

export const REFLECTION_PROMPTS = [
  { key: 'wentWell', q: 'What went well today?' },
  { key: 'improve', q: 'What can I improve?' },
  { key: 'learned', q: 'What did I learn?' },
  { key: 'better', q: 'How can I make tomorrow better?' },
];

export function todayLabel() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}