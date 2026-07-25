"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/data/content";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

export function FaqPreview() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const preview = faqItems.slice(0, 4);

  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="container-app grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-sm text-foreground/60">
            Quick answers about shipping, payment, and freshness. Have another question?
          </p>
          <Button href="/faq" variant="outline" className="mt-6">
            View All FAQs
          </Button>
        </Reveal>

        <Reveal direction="left" className="space-y-3">
          {preview.map((item) => {
            const open = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-brown/10 bg-white card-shadow"
              >
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[15px] font-medium text-foreground">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cream text-brown">
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/60">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
