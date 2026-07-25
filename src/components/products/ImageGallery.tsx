"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-[28px] card-shadow-lg">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-2xl border-2 transition-colors",
              active === i ? "border-brown" : "border-transparent"
            )}
          >
            <Image src={src} alt={`${alt} ${i + 1}`} fill sizes="150px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
