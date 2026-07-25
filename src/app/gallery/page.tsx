"use client";

import { useState } from "react";
import Hero from "@/components/gallery/Hero";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import BehindTheScenes from "@/components/gallery/BehindTheScenes";
import CustomerMoments from "@/components/gallery/CustomerMoments";
import InstagramFeed from "@/components/gallery/InstagramFeed";
import CTA from "@/components/gallery/CTA";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <GalleryGrid selectedCategory={selectedCategory} />
      <BehindTheScenes />
      <CustomerMoments />
      <InstagramFeed />
      <CTA />
    </main>
  );
}