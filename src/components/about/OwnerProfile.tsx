"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Mail, MessageCircle, Sparkles, Award } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/common/SocialIcons';

export default function OwnerProfile() {
  const socialLinks = [
    { icon: InstagramIcon, label: 'Instagram', href: '#' },
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/60 relative overflow-hidden">
      <div className="container-app">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#FFF8F0] card-shadow-lg p-6 sm:p-10 lg:p-12 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] card-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                  alt="Serena Family - Founders of Serena Cemilan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6E4A2E]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D8A25E] text-[#6E4A2E] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Award className="w-3 h-3" />
                    FOUNDER & MASTER BAKER
                  </div>
                  <p className="font-display font-bold text-2xl text-white">
                    Serena Rahardjo & Family
                  </p>
                  <p className="text-xs text-white/80 font-medium">
                    Crafting Heritage Snacks Since 2014
                  </p>
                </div>
              </div>

              {/* Decorative Heart Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center card-shadow">
                <Heart className="w-6 h-6 text-[#D8A25E] fill-[#D8A25E]" />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8F0] text-[#8B5E3C] text-xs font-semibold tracking-wider uppercase border border-[#D8A25E]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
                MEET THE HEART BEHIND SERENA
              </div>

              <h2 className="font-display text-3xl sm:text-4xl text-[#6E4A2E] font-bold">
                Serena Family
              </h2>

              <p className="text-[#51443C] text-base leading-relaxed">
                Serena Cemilan is a family-owned business built with love, dedication, and an uncompromising commitment to quality. Passed down through generations, our family personally oversees every single batch—from hand-selecting raw unrefined sugars and fresh spices to inspecting each vacuum-sealed package.
              </p>

              <div className="p-4 rounded-2xl bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#6E4A2E] space-y-1">
                <p className="text-sm font-display italic leading-relaxed">
                  &ldquo;To us, baking traditional Indonesian snacks is not just a business—it is an act of love to share warmth, comfort, and memories of home with families across the nation.&rdquo;
                </p>
                <p className="text-xs font-bold text-[#8B5E3C] text-right font-display">
                  — Serena Rahardjo, Founder
                </p>
              </div>

              {/* Social Placeholders */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-[#83746B] uppercase tracking-wider block mb-3">
                  Connect with the Founder
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    
                    {/* PENGAMAN: Jika ikon bernilai undefined, jangan render elemen tersebut agar tidak error */}
                    if (!Icon) return null; 

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

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}