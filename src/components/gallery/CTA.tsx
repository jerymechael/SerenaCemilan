"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

export default function CTA() {
  const whatsappUrl = "https://wa.me/6281288889900?text=Halo%20Serena%20Cemilan%2C%20saya%20tertarik%20dengan%20produk%20di%20galeri%20dan%20ingin%20memesan.";

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#8B5E3C] via-[#6E4A2E] to-[#513620] text-white p-8 sm:p-12 lg:p-16 card-shadow-lg overflow-hidden text-center"
        >
          {/* Subtle Background Glow Circles */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#D8A25E]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-[#FFF8F0]/10 blur-3xl pointer-events-none" />

          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D8A25E] text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
            FRESHLY BAKED HERITAGE DELICACIES
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight text-white">
            Tasted With Eyes? Now Experience the Authentic Flavors!
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Order your favorite traditional cookies or custom gift hampers directly via WhatsApp today.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
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

            <Button
              href="/products"
              size="lg"
              variant="glass"
              className="w-full sm:w-auto"
              icon={<ShoppingBag className="w-4 h-4 text-[#D8A25E]" />}
            >
              Browse Catalog
            </Button>
          </div>

          <p className="mt-6 text-xs text-white/70 font-medium">
            Fast Shipping Nationwide • Freshness Guaranteed • 100% Halal
          </p>
        </motion.div>
      </div>
    </section>
  );
}