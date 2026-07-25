"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartHandshake, UtensilsCrossed, Sparkles, MapPin, Calendar } from 'lucide-react';

export default function Story() {
  const timeline = [
    {
      year: '2014',
      title: 'Business Started',
      desc: 'Founded in a home kitchen in Jakarta with a passion for traditional family snack recipes.',
    },
    {
      year: '2018',
      title: 'Expanded Product Line',
      desc: 'Introduced over 20 artisanal variants including signature cookies and savory traditional bites.',
    },
    {
      year: '2021',
      title: 'Online Ordering',
      desc: 'Launched digital store enabling seamless ordering for sweet and savory Indonesian snack lovers.',
    },
    {
      year: '2025',
      title: 'Nationwide Delivery',
      desc: 'Established dedicated packaging & express logistics serving customers across all islands of Indonesia.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/60 relative overflow-hidden">
      <div className="container-app">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden card-shadow-lg border-4 border-white">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
                  alt="Authentic handcrafted snack making process"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6E4A2E]/60 via-transparent to-transparent" />
              </div>

              {/* Overlay quote box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#FFF8F0] card-shadow">
                <p className="text-xs sm:text-sm text-[#6E4A2E] italic font-display">
                  "Every batch is baked with the exact care and authentic ingredients passed down from our grandmother."
                </p>
                <div className="mt-2 text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider">
                  — Serena Family Kitchen
                </div>
              </div>
            </div>

            {/* Decorative background block */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#D8A25E]/20 rounded-3xl -z-10 blur-xl" />
          </motion.div>

          {/* Right Column: Story text and Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D8A25E] bg-white px-3 py-1 rounded-full border border-[#D8A25E]/20">
                HERITAGE & JOURNEY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
                Our Story
              </h2>
            </div>

            <div className="space-y-4 text-[#51443C] text-base leading-relaxed">
              <p>
                Serena Cemilan started as a humble small family business driven by a heartfelt mission: to keep Indonesia’s rich culinary heritage alive in every home. What began in a warm family kitchen with simple baking sheets has grown into a beloved name cherished by snack enthusiasts nationwide.
              </p>
              <p>
                We strictly honor traditional recipes and select only premium local ingredients—from pure palm sugar and freshly harvested spices to unrefined coconut and high-grade flour. Our handcrafted process ensures every cookie, crisp, and traditional delicacy delivers an authentic taste that evokes memories of warmth and celebration.
              </p>
              <p>
                Today, Serena Cemilan proudly serves customer orders across Indonesia, maintaining our original standard of freshness, love, and compromise-free quality.
              </p>
            </div>

            {/* Timeline Cards */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-[#8B5E3C] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D8A25E]" />
                Key Milestones
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-4 rounded-2xl bg-white border border-[#FFF8F0] card-shadow hover:border-[#D8A25E] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#8B5E3C] text-white text-xs font-bold font-display">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-[#6E4A2E] text-sm group-hover:text-[#8B5E3C] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#83746B] leading-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
