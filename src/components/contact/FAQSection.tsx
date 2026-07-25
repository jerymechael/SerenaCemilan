"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are all Serena Cemilan products 100% Halal certified?',
      answer: 'Yes! All our traditional snacks, cookies, and crisps are produced in a strictly Halal kitchen using 100% Halal-certified ingredients, free from artificial preservatives or synthetic additives.',
    },
    {
      question: 'How long do Serena snacks stay fresh?',
      answer: 'Our artisanal cookies and crispy snacks retain peak freshness and crispiness for 3 to 6 months when kept sealed in a cool, dry place away from direct sunlight.',
    },
    {
      question: 'Do you ship to cities outside of Jakarta?',
      answer: 'Yes! We ship across all islands of Indonesia using express protective courier packaging (bubble wrap + sturdy corrugated gift boxes) to ensure zero breakage.',
    },
    {
      question: 'Can I order custom hampers for corporate events or weddings?',
      answer: 'Absolutely! We specialize in custom heritage hampers tailored for Eid/Lebaran, Lunar New Year, Christmas, corporate gifts, and wedding souvenirs with personalized greeting cards.',
    },
    {
      question: 'What is the minimum order quantity for bulk orders?',
      answer: 'For regular retail orders, there is no minimum quantity! For custom corporate gift hampers, our minimum order quantity starts at just 10 packages with full logo customization.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Bank Transfer (BCA, Mandiri, BRI, BNI), QRIS (Gopay, OVO, ShopeePay, DANA), and major Credit Cards.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container-app">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8F0] border border-[#D8A25E]/30 text-[#8B5E3C] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#6E4A2E] font-bold mt-3">
            Got Questions? We Have Answers
          </h2>
          <p className="text-[#83746B] text-base mt-3">
            Here are the most common questions from our customers about ordering, delivery, and ingredients.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl bg-white border border-[#FFF8F0] card-shadow overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#6E4A2E] hover:text-[#8B5E3C] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D8A25E] shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FFF8F0] text-[#8B5E3C] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8B5E3C] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#51443C] leading-relaxed border-t border-[#FFF8F0]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
