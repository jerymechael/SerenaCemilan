"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Sparkles,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/6281290655797?text=Halo%20Serena%20Cemilan%2C%20saya%20tertarik%20dengan%20produknya.%20Bisa%20dibantu%20info%20lebih%20lanjut%3F";

  const highlights = [
    {
      icon: MessageCircle,
      title: 'Quick WhatsApp Response',
      value: '< 15 mins response time',
      href: whatsappUrl,
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'halo@serenacemilan.id',
      href: 'mailto:halo@serenacemilan.id',
    },
    {
      icon: MapPin,
      title: 'Kitchen & Gallery',
      value: 'Cilegon, Banten, Indonesia',
      href: 'https://maps.app.goo.gl/CBvkhC7toBdG6Ygv5',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      value: 'Mon - Sat: 08.00 - 18.00 WIB',
      href: '#',
    },
  ];

  return (
    <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Hero Photo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1600&auto=format&fit=crop"
          alt="Indonesian Traditional Snacks Kitchen Background"
          fill
          priority
          className="object-cover object-center opacity-20 scale-105"
        />
        {/* Soft Warm Gradients for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/95 via-[#FAFAFA]/90 to-[#FAFAFA]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#D8A25E]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-[#8B5E3C]/20 blur-3xl pointer-events-none" />
      </div>

      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D8A25E]/40 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
            CONTACT US
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#6E4A2E] font-bold leading-tight">
            We'd Love to Hear From You
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#51443C] font-medium leading-relaxed max-w-2xl mx-auto">
            Have questions about our authentic Indonesian snacks, custom gift hampers, or bulk event orders? Send us a message or connect directly with our friendly team.
          </p>

          {/* WhatsApp Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE57] hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Order Via WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith('http') || item.href.startsWith('mailto');
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#FFF8F0] card-shadow flex items-center gap-4 hover:-translate-y-1 hover:border-[#D8A25E]/40 hover:bg-white transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 border border-[#D8A25E]/20 group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#83746B] font-medium uppercase tracking-wide">
                    {item.title}
                  </div>
                  <div className="font-display font-bold text-sm text-[#6E4A2E] mt-0.5 group-hover:text-[#8B5E3C] transition-colors">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
