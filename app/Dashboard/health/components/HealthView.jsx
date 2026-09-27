"use client"
import React from 'react';
import Header from './Header ';
import SelfCareCard from './Selfcarecard';
import HabitTrackerCard from './Habittrackercard';
import WaterIntakeCard from './Waterintakecard';
import MovementCard from './Movementcard';
import MealsCard from './Mealscard';
import MoodCard from './Moodcard';
import EnergyCard from './Energycard';
import SleepCard from './Sleepcard';
import GratitudeCard from './Gratitudecard';
import GoalsCard from './Goalscard';
import SupportsCard from './Supportscard';
import ReflectionCard from './Reflectioncard';
import Footer from './Footer';
import PrioritiesCard from './Prioritiescard ';


/**
 * Pure layout — every widget reads/writes its own slice of state via
 * useHealth(), so this component doesn't need to touch the context itself.
 */
export default function HealthView() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-gray-900 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-5">
          <div className="flex flex-col gap-5">
            <PrioritiesCard />
            <SelfCareCard />
          </div>
          <HabitTrackerCard className="lg:col-span-2" />
          <div className="flex flex-col gap-5">
            <WaterIntakeCard />
            <MovementCard />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          <MealsCard />
          <MoodCard/>
          <EnergyCard />
          <SleepCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          <GratitudeCard />
          <GoalsCard />
          <SupportsCard />
        </div>

        <ReflectionCard className="mb-5" />

        <Footer />
      </div>
    </div>
  );
}