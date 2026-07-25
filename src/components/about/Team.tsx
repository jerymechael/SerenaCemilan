"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail, MessageCircle, Sparkles } from 'lucide-react';

export default function Team() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/60 relative overflow-hidden">
      <div className="container-app">
        
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#FFF8F0] card-shadow-lg p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] card-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                  alt="Serena Family - Founders of Serena Cemilan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6E4A2E]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white text-center sm:text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D8A25E]">
                    FOUNDERS & MASTER BAKERS
                  </span>
                  <p className="font-display font-bold text-xl text-white">
                    Serena Family
                  </p>
                </div>
              </div>

              {/* Decorative Heart Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center card-shadow">
                <Heart className="w-6 h-6 text-[#D8A25E] fill-[#D8A25E]" />
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8F0] text-[#8B5E3C] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
                MEET THE HEART BEHIND SERENA
              </div>

              <h2 className="font-display text-3xl sm:text-4xl text-[#6E4A2E] font-bold">
                Serena Family
              </h2>

              <p className="text-[#51443C] text-base leading-relaxed">
                Serena Cemilan is a family-owned business built with love, dedication, and an uncompromising commitment to quality. Passed down through three generations, our family personally oversees every step—from selecting raw palm sugars and aromatic pandan leaves to hand-inspecting each baked package.
              </p>

              <p className="text-[#51443C] text-base leading-relaxed italic border-l-2 border-[#D8A25E] pl-4">
                "To us, baking is not just work—it is an act of love to share warmth, happiness, and authentic Indonesian flavors with families across the nation."
              </p>

              {/* Social Placeholders */}
              <div className="pt-4">
                <span className="text-xs font-semibold text-[#83746B] uppercase tracking-wider block mb-3">
                  Connect with us
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition-all duration-300 flex items-center justify-center card-shadow cursor-pointer"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
