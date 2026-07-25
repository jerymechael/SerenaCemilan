"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Star, Quote, Sparkles } from 'lucide-react';

export default function CustomerMoments() {
  const reviews = [
    {
      name: 'Dewi Lestari',
      role: 'Jakarta Selatan',
      comment: 'Nastar Serena luar biasa enaknya! Selainya asli nanas segar, lumer di mulut. Selalu jadi pilihan utama hampers Lebaran keluarga.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
      rating: 5,
      product: 'Kue Nastar Premium',
    },
    {
      name: 'Rian Hidayat',
      role: 'Bandung',
      comment: 'Keripik Tempe renyah bumbu ketumbarnya pas banget. Pas dikirim ke Bandung tetap utuh tidak hancur sama sekali. Packaging super aman!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      rating: 5,
      product: 'Crispy Tempe Savory',
    },
    {
      name: 'Anita Wijaya',
      role: 'Surabaya',
      comment: 'Pesan 20 paket Hampers Perusahaan untuk souvenir event katering. Respon WhatsApp admin super cepat & sangat ramah. Semua klien puas!',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
      rating: 5,
      product: 'Heritage Gift Hamper',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container-app">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-[#D8A25E] fill-[#D8A25E]" />
            CUSTOMER STORIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            Moments Shared With Serena
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            Real stories and reviews from customers who love bringing authentic traditional flavors to their warm homes.
          </p>
        </motion.div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#FFF8F0] card-shadow relative flex flex-col justify-between hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon background */}
              <Quote className="w-10 h-10 text-[#D8A25E]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D8A25E] fill-[#D8A25E]" />
                  ))}
                </div>

                <p className="text-sm text-[#51443C] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-[#FFF8F0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#D8A25E]/40 shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#6E4A2E]">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-[#83746B]">
                      {rev.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#8B5E3C] bg-[#FFF8F0] px-2.5 py-1 rounded-full border border-[#D8A25E]/20">
                  {rev.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
