"use client"
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { HABITS } from '../lib/constants';

const HealthContext = createContext(null);

/**
 * Builds the default shape of the day's data. The server component
 * (page.jsx) can fetch a saved entry for "today" and pass it in as
 * `initialData` so the provider hydrates with real data instead of blanks.
 */
function buildDefaultState(initialData = {}) {
  return {
    intention: initialData.intention ?? '',
    priorities: initialData.priorities ?? ['', '', ''],
    habitData:
      initialData.habitData ??
      Object.fromEntries(HABITS.map((h) => [h.id, Array(7).fill(false)])),
    waterGoal: initialData.waterGoal ?? 8,
    waterCount: initialData.waterCount ?? 0,
    movement: initialData.movement ?? { walk: false, strength: false, yoga: false, cardio: false },
    movementOther: initialData.movementOther ?? '',
    selfCare: initialData.selfCare ?? '',
    meals: initialData.meals ?? { breakfast: '', lunch: '', dinner: '', snacks: '' },
    mood: initialData.mood ?? null,
    moodNotes: initialData.moodNotes ?? '',
    energy: initialData.energy ?? null,
    sleep: initialData.sleep ?? { toBed: '', wokeUp: '', quality: 0 },
    gratitude: initialData.gratitude ?? ['', '', '', '', ''],
    goals: initialData.goals ?? [],
    supports: initialData.supports ?? [''],
    reflection: initialData.reflection ?? { wentWell: '', improve: '', learned: '', better: '' },
  };
}

export function HealthProvider({ initialData, children }) {
  const [state, setState] = useState(() => buildDefaultState(initialData));

  const setIntention = useCallback((v) => setState((s) => ({ ...s, intention: v })), []);

  const updatePriority = useCallback(
    (i, val) => setState((s) => ({ ...s, priorities: s.priorities.map((p, idx) => (idx === i ? val : p)) })),
    []
  );

  const toggleHabit = useCallback(
    (habitId, dayIdx) =>
      setState((s) => ({
        ...s,
        habitData: {
          ...s.habitData,
          [habitId]: s.habitData[habitId].map((v, i) => (i === dayIdx ? !v : v)),
        },
      })),
    []
  );

  const setWaterCount = useCallback((n) => setState((s) => ({ ...s, waterCount: n })), []);

  const toggleMovement = useCallback(
    (key) => setState((s) => ({ ...s, movement: { ...s.movement, [key]: !s.movement[key] } })),
    []
  );
  const setMovementOther = useCallback((v) => setState((s) => ({ ...s, movementOther: v })), []);

  const setSelfCare = useCallback((v) => setState((s) => ({ ...s, selfCare: v })), []);

  const updateMeal = useCallback(
    (key, val) => setState((s) => ({ ...s, meals: { ...s.meals, [key]: val } })),
    []
  );

  const setMood = useCallback((id) => setState((s) => ({ ...s, mood: id })), []);
  const setMoodNotes = useCallback((v) => setState((s) => ({ ...s, moodNotes: v })), []);
  const setEnergy = useCallback((level) => setState((s) => ({ ...s, energy: level })), []);

  const updateSleep = useCallback(
    (patch) => setState((s) => ({ ...s, sleep: { ...s.sleep, ...patch } })),
    []
  );

  const updateGratitude = useCallback(
    (i, val) => setState((s) => ({ ...s, gratitude: s.gratitude.map((g, idx) => (idx === i ? val : g)) })),
    []
  );

  const addGoal = useCallback(
    (text) => {
      if (!text.trim()) return;
      setState((s) => ({ ...s, goals: [...s.goals, { id: Date.now(), text: text.trim(), done: false }] }));
    },
    []
  );
  const toggleGoal = useCallback(
    (id) => setState((s) => ({ ...s, goals: s.goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g)) })),
    []
  );
  const removeGoal = useCallback(
    (id) => setState((s) => ({ ...s, goals: s.goals.filter((g) => g.id !== id) })),
    []
  );

  const updateSupport = useCallback(
    (i, val) => setState((s) => ({ ...s, supports: s.supports.map((sup, idx) => (idx === i ? val : sup)) })),
    []
  );
  const addSupport = useCallback(() => setState((s) => ({ ...s, supports: [...s.supports, ''] })), []);
  const removeSupport = useCallback(
    (i) => setState((s) => ({ ...s, supports: s.supports.filter((_, idx) => idx !== i) })),
    []
  );

  const updateReflection = useCallback(
    (key, val) => setState((s) => ({ ...s, reflection: { ...s.reflection, [key]: val } })),
    []
  );

  const value = useMemo(
    () => ({
      ...state,
      setIntention,
      updatePriority,
      toggleHabit,
      setWaterCount,
      toggleMovement,
      setMovementOther,
      setSelfCare,
      updateMeal,
      setMood,
      setMoodNotes,
      setEnergy,
      updateSleep,
      updateGratitude,
      addGoal,
      toggleGoal,
      removeGoal,
      updateSupport,
      addSupport,
      removeSupport,
      updateReflection,
    }),
    [state, setIntention, updatePriority, toggleHabit, setWaterCount, toggleMovement, setMovementOther,
     setSelfCare, updateMeal, setMood, setMoodNotes, setEnergy, updateSleep, updateGratitude, addGoal,
     toggleGoal, removeGoal, updateSupport, addSupport, removeSupport, updateReflection]
  );

  return <HealthContext.Provider value={value}>{children}</HealthContext.Provider>;
}

export function useHealth() {
  const ctx = useContext(HealthContext);
  if (!ctx) throw new Error('useHealth must be used within a HealthProvider');
  return ctx;
}