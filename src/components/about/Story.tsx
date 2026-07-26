"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Calendar, HeartHandshake } from 'lucide-react';
import storyImage from '@/lib/data/about/story.jpeg';

export default function Story() {
  const quickFacts = [
    { icon: MapPin, label: 'Jakarta, Indonesia' },
    { icon: Calendar, label: 'Est. 2020' },
    { icon: HeartHandshake, label: 'Family-Owned' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Business Started',
      desc: 'Founded in a home kitchen in Jakarta with a passion for traditional family snack recipes.',
    },
    {
      year: '2022',
      title: 'Expanded Product Line',
      desc: 'Introduced over 20 artisanal variants including signature cookies and savory traditional bites.',
    },
    {
      year: '2024',
      title: 'Online Ordering',
      desc: 'Launched digital store enabling seamless ordering for sweet and savory Indonesian snack lovers.',
    },
    {
      year: '2026',
      title: 'Nationwide Delivery',
      desc: 'Established dedicated packaging & express logistics serving customers across all islands of Indonesia — and still growing today.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/60 relative overflow-hidden">
      {/* Soft decorative glow for depth, echoes other sections on the site */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#D8A25E]/15 blur-3xl" />

      <div className="container-app relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 relative"
          >
            <div className="relative rounded-3xl overflow-hidden card-shadow-lg border-4 border-white">
              <div className="aspect-[4/5] relative">
                <Image
                  src={storyImage}
                  alt="Authentic handcrafted snack making process"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6E4A2E]/60 via-transparent to-transparent" />
              </div>

              {/* Overlay quote box */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#FFF8F0] bg-white/95 p-5 card-shadow backdrop-blur-md">
                <span className="font-display text-4xl leading-none text-[#D8A25E]">&ldquo;</span>
                <p className="-mt-2 font-display text-xs italic leading-relaxed text-[#6E4A2E] sm:text-sm">
                  Every batch is baked with the exact care and authentic ingredients passed down from our grandmother.
                </p>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#8B5E3C]">
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
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D8A25E]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#D8A25E]">
                <Sparkles className="h-3.5 w-3.5" />
                Heritage &amp; Journey
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#6E4A2E] sm:text-4xl lg:text-5xl">
                Our <span className="italic font-medium text-[#8B5E3C]">Story</span>
              </h2>

              {/* Quick facts row */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                {quickFacts.map((fact, i) => (
                  <React.Fragment key={fact.label}>
                    {i > 0 && <span className="hidden h-4 w-px bg-[#8B5E3C]/15 sm:block" />}
                    <span className="flex items-center gap-1.5 text-xs font-medium text-[#83746B]">
                      <fact.icon className="h-3.5 w-3.5 text-[#8B5E3C]" />
                      {fact.label}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-justify text-base leading-relaxed text-[#51443C]">
              <p>
                Serena Cemilan started as a humble small family business driven by a heartfelt mission: to keep Indonesia&rsquo;s rich culinary heritage alive in every home. What began in a warm family kitchen with simple baking sheets has grown into a beloved name cherished by snack enthusiasts nationwide.
              </p>
              <p>
                We strictly honor traditional recipes and select only premium local ingredients—from pure palm sugar and freshly harvested spices to unrefined coconut and high-grade flour. Our handcrafted process ensures every cookie, crisp, and traditional delicacy delivers an authentic taste that evokes memories of warmth and celebration.
              </p>
              <p>
                Today, Serena Cemilan proudly serves customer orders across Indonesia, maintaining our original standard of freshness, love, and compromise-free quality.
              </p>
            </div>

            {/* Timeline — connected vertical rail instead of a plain card grid */}
            <div className="pt-4">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#8B5E3C]">
                <Calendar className="h-4 w-4 text-[#D8A25E]" />
                Key Milestones
              </h3>

              <div className="relative space-y-7 pl-9">
                <div className="absolute left-[13px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-[#D8A25E]/60 via-[#8B5E3C]/25 to-transparent" />

                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group relative"
                  >
                    <span className="absolute -left-9 top-0.5 flex h-[27px] w-[27px] items-center justify-center rounded-full border-2 border-[#FFF8F0] bg-[#8B5E3C] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8A25E]" />
                    </span>

                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <span className="font-display text-lg font-semibold text-[#8B5E3C]">
                        {item.year}
                      </span>
                      <h4 className="text-sm font-bold text-[#6E4A2E] transition-colors group-hover:text-[#8B5E3C]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-[#83746B]">
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