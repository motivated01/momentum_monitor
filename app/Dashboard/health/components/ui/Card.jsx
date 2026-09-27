"use client"
import React from 'react';

/**
 * bg accepts a Tailwind background class so each card on the dashboard
 * can carry its own soft color instead of the whole page being flat white.
 * Text stays dark gray/black on every tint so contrast stays high (all the
 * tints below are the lightest step in their scale, ~AAA against gray-900).
 */
export default function Card({ title, icon: Icon, children, className = '', bg = 'bg-white' }) {
  return (
    <div className={`${bg} rounded-2xl border border-black/5 shadow-sm p-5 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {Icon && <Icon className="w-5 h-5 text-blue-600" />}
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
}