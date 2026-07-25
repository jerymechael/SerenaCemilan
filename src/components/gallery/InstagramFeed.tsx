"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/common/SocialIcons';

export default function InstagramFeed() {
  const posts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop',
      likes: '1.2k',
      comments: '84',
      tag: '#SerenaNastar',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
      likes: '890',
      comments: '42',
      tag: '#DapurSerena',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
      likes: '2.4k',
      comments: '150',
      tag: '#HampersLebaran',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=600&auto=format&fit=crop',
      likes: '750',
      comments: '39',
      tag: '#KeripikTempe',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFF8F0]/50 relative overflow-hidden">
      <div className="container-app">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8A25E]/30 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              INSTAGRAM GALLERY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#6E4A2E] font-bold mt-2">
              Follow Us @serenacemilan
            </h2>
            <p className="text-[#83746B] text-sm mt-1">
              Tag us in your photos to get featured on our page!
            </p>
          </motion.div>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 py-3 rounded-full bg-[#8B5E3C] hover:bg-[#6E4A2E] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4 text-[#D8A25E]" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* 4 Instagram Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-[#FFF8F0] card-shadow cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.tag}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#6E4A2E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-2 p-4 text-center">
                <div className="flex items-center gap-4 text-sm font-bold">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span className="text-xs text-[#D8A25E] font-bold">
                  {post.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}