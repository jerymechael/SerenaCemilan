"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Sparkles, Heart, Tag } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  likes: number;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Kue Nastar Keju Premium',
    category: 'snacks',
    categoryLabel: 'Traditional Snacks',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop',
    description: 'Freshly baked pineapple tarts made with real New Zealand butter and homemade pineapple jam.',
    likes: 342,
  },
  {
    id: '2',
    title: 'Hand-selecting Fresh Coconut',
    category: 'kitchen',
    categoryLabel: 'Kitchen & Process',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    description: 'Our master bakers inspect raw coconut and palm sugar daily before starting small artisanal batches.',
    likes: 189,
  },
  {
    id: '3',
    title: 'Lebaran Heritage Gift Hamper',
    category: 'hampers',
    categoryLabel: 'Gift Hampers',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    description: 'Curated artisanal snack hamper containing Kastengel, Nastar, Putri Salju, and traditional batik ribbons.',
    likes: 512,
  },
  {
    id: '4',
    title: 'Crispy Keripik Tempe Savory',
    category: 'snacks',
    categoryLabel: 'Traditional Snacks',
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000&auto=format&fit=crop',
    description: 'Thinly sliced artisan fermented tempeh seasoned with coriander and lime leaves.',
    likes: 276,
  },
  {
    id: '5',
    title: 'Family Gathering Moments',
    category: 'customers',
    categoryLabel: 'Customer Moments',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    description: 'Sharing warmth and laughter over Serena traditional tea-time snacks during weekend reunions.',
    likes: 420,
  },
  {
    id: '6',
    title: 'Slow-baking Oven Process',
    category: 'kitchen',
    categoryLabel: 'Kitchen & Process',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
    description: 'Slow-baked at controlled temperatures to ensure golden crusts and irresistible aromatic flavors.',
    likes: 310,
  },
  {
    id: '7',
    title: 'Kastengel Keju Edam',
    category: 'snacks',
    categoryLabel: 'Traditional Snacks',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    description: 'Rich and crunchy savory cheese cookies loaded with genuine aged Edam cheese.',
    likes: 298,
  },
  {
    id: '8',
    title: 'Exclusive Corporate Souvenir Set',
    category: 'hampers',
    categoryLabel: 'Gift Hampers',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop',
    description: 'Elegant wooden box gift hampers tailored with custom corporate branding for year-end appreciation.',
    likes: 445,
  },
  {
    id: '9',
    title: 'Sip & Snack Afternoon Tea',
    category: 'customers',
    categoryLabel: 'Customer Moments',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000&auto=format&fit=crop',
    description: 'Customer review photo featuring our Putri Salju melt-in-your-mouth cookies paired with hot jasmine tea.',
    likes: 388,
  },
];

export interface GalleryGridProps {
  selectedCategory: string;
}

export default function GalleryGrid({ selectedCategory }: GalleryGridProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-8 lg:py-12 bg-[#FAFAFA]">
      <div className="container-app">
        
        {/* Grid layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveItem(item)}
                className="group relative bg-white rounded-3xl border border-[#FFF8F0] card-shadow overflow-hidden cursor-pointer hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8F0]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6E4A2E]/80 via-[#6E4A2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#8B5E3C] flex items-center justify-center card-shadow group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#8B5E3C] uppercase tracking-wider card-shadow border border-[#D8A25E]/30">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-[#6E4A2E] group-hover:text-[#8B5E3C] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-[#83746B] font-semibold">
                      <Heart className="w-3.5 h-3.5 text-[#D8A25E] fill-[#D8A25E]" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#51443C] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 bg-[#2F2F2F]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full card-shadow-lg relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-[#6E4A2E] hover:bg-white flex items-center justify-center card-shadow transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/10] w-full bg-[#FFF8F0]">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#8B5E3C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {activeItem.categoryLabel}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl text-[#6E4A2E]">
                      {activeItem.title}
                    </h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF8F0] text-xs font-bold text-[#8B5E3C] border border-[#D8A25E]/30">
                      <Heart className="w-4 h-4 text-[#D8A25E] fill-[#D8A25E]" />
                      <span>{activeItem.likes} Likes</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#51443C] leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
