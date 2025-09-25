import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export function StatsCard({ title, value, icon: Icon, color = '#E9B7C6' }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-2">{title}</p>
          <p className="text-3xl font-bold text-black">{value}</p>
        </div>
        <div
          className="p-4 rounded-2xl shadow-md"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-7 w-7" style={{ color }} />
        </div>
      </div>
    </div>
  );
}