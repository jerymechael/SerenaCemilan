"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, ExternalLink, Share2, Youtube } from 'lucide-react';

export default function InfoSidebar() {
  const socialCards = [
    {
      name: 'Instagram',
      handle: '@serenacemilan',
      followers: '24.5K Followers',
      icon: Instagram,
      href: '#',
      color: 'hover:border-pink-500 hover:text-pink-600',
    },
    {
      name: 'WhatsApp Business',
      handle: '+62 812-8888-9900',
      followers: 'Fast Reply (08.00 - 18.00)',
      icon: MessageCircle,
      href: 'https://wa.me/',
      color: 'hover:border-emerald-500 hover:text-emerald-600',
    },
    {
      name: 'Facebook',
      handle: 'Serena Cemilan Indonesia',
      followers: '12K Likes',
      icon: Facebook,
      href: '#',
      color: 'hover:border-blue-600 hover:text-blue-600',
    },
    {
      name: 'YouTube',
      handle: 'Serena Heritage Kitchen',
      followers: 'Artisanal Recipe Videos',
      icon: Youtube,
      href: '#',
      color: 'hover:border-red-600 hover:text-red-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Location & Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FFF8F0] card-shadow relative overflow-hidden"
      >
        <h3 className="font-display text-xl font-bold text-[#6E4A2E] mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#8B5E3C]" />
          Kitchen & Gallery Location
        </h3>

        <div className="space-y-5 text-sm text-[#51443C]">
          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#6E4A2E]">Serena Heritage Kitchen</div>
              <p className="text-xs text-[#83746B] mt-0.5 leading-relaxed">
                Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190, Indonesia
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#6E4A2E]">Kitchen Hours</div>
              <p className="text-xs text-[#83746B] mt-0.5">
                Monday – Saturday: 08:00 – 18:00 WIB
              </p>
              <p className="text-xs text-[#83746B]">
                Sunday: Closed (Online orders dispatched Monday)
              </p>
            </div>
          </div>

          {/* Direct Phone / WhatsApp */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#6E4A2E]">Phone / WhatsApp Hotline</div>
              <p className="text-xs text-[#83746B] mt-0.5">
                +62 812-8888-9900
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#6E4A2E]">Direct Email</div>
              <p className="text-xs text-[#83746B] mt-0.5">
                halo@serenacemilan.id
              </p>
            </div>
          </div>
        </div>

        {/* Map Preview Box */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-[#D8A25E]/30 bg-[#FFF8F0] p-4 text-center relative group">
          <div className="aspect-[16/9] w-full rounded-xl bg-cover bg-center relative flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-[#6E4A2E]/50 backdrop-blur-[1px]" />
            <div className="relative z-10 text-white space-y-1 p-2">
              <MapPin className="w-8 h-8 text-[#D8A25E] mx-auto animate-bounce" />
              <p className="font-display font-bold text-sm">Open in Google Maps</p>
              <p className="text-[10px] text-white/80">Jakarta Selatan, Indonesia</p>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5E3C] hover:text-[#6E4A2E] transition-colors"
          >
            Get Driving Directions
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Social Media Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FFF8F0] card-shadow space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-bold text-[#6E4A2E] flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#8B5E3C]" />
            Connect & Follow
          </h3>
          <span className="text-xs font-semibold text-[#8B5E3C] bg-[#FFF8F0] px-2.5 py-1 rounded-full border border-[#D8A25E]/20">
            @serenacemilan
          </span>
        </div>

        <p className="text-xs text-[#83746B] leading-relaxed">
          Stay updated with our daily baking schedules, seasonal snack hampers, and exclusive discounts.
        </p>

        {/* Social Cards List */}
<div className="space-y-3 pt-2">
  {socialCards.map((social) => {
    const Icon = social.icon ?? Share2;

    return (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className={`p-4 rounded-2xl bg-[#FAFAFA] border border-[#FFF8F0]
        flex items-center justify-between
        transition-all duration-300
        hover:bg-white hover:shadow-lg
        ${social.color}`}
      >
        <div className="flex items-center gap-3">
          <div
            className="
            w-11 h-11
            rounded-xl
            bg-[#FFF8F0]
            text-[#8B5E3C]
            flex
            items-center
            justify-center
            shrink-0"
          >
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <h4 className="font-semibold text-[#6E4A2E]">
              {social.name}
            </h4>

            <p className="text-xs text-[#83746B]">
              {social.handle}
            </p>
          </div>
        </div>

        <span
          className="
          text-[10px]
          px-2 py-1
          rounded-full
          bg-[#FFF8F0]
          text-[#8B5E3C]
          font-semibold"
        >
          {social.followers}
        </span>
      </a>
    );
  })}
</div>
      </motion.div>
    </div>
  );
}
