"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cookie, Flame, Gift, HeartHandshake, Camera } from 'lucide-react';

export interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Photos', icon: Sparkles },
  { id: 'snacks', label: 'Traditional Snacks', icon: Cookie },
  { id: 'kitchen', label: 'Kitchen & Process', icon: Flame },
  { id: 'hampers', label: 'Gift Hampers', icon: Gift },
  { id: 'customers', label: 'Customer Moments', icon: HeartHandshake },
];

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 py-6">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-[#8B5E3C] text-white shadow-md scale-105'
                : 'bg-white text-[#51443C] border border-[#FFF8F0] hover:bg-[#FFF8F0] hover:text-[#8B5E3C] card-shadow'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-[#D8A25E]' : 'text-[#8B5E3C]'}`} />
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
