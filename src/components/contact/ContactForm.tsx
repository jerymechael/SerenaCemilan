"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, User, Mail, Phone, MessageSquare, Tag } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate swift form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 sm:p-10 rounded-3xl bg-white border border-[#FFF8F0] card-shadow-lg relative overflow-hidden"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B5E3C] mb-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D8A25E]" />
        SEND US A MESSAGE
      </div>

      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#6E4A2E] mb-2">
        How Can We Help You?
      </h2>
      <p className="text-sm text-[#83746B] mb-8">
        Fill in the details below and our team will get back to you within 24 hours.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-[#FFF8F0] border border-[#D8A25E]/40 text-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center mx-auto card-shadow">
            <CheckCircle2 className="w-8 h-8 text-[#D8A25E]" />
          </div>
          <h3 className="font-display text-2xl font-bold text-[#6E4A2E]">
            Thank You, {formData.name || 'Friend'}!
          </h3>
          <p className="text-sm text-[#51443C] max-w-md mx-auto">
            Your message has been received. Our team will review your inquiry and reply to <span className="font-bold text-[#8B5E3C]">{formData.email || 'your email'}</span> promptly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#8B5E3C] text-white text-xs font-bold hover:bg-[#6E4A2E] transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#6E4A2E] uppercase tracking-wider mb-2">
                Full Name <span className="text-[#8B5E3C]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#83746B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Budi Santoso"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#D8A25E]/30 text-sm text-[#2F2F2F] placeholder-[#83746B]/60 focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#6E4A2E] uppercase tracking-wider mb-2">
                Email Address <span className="text-[#8B5E3C]">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#83746B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#D8A25E]/30 text-sm text-[#2F2F2F] placeholder-[#83746B]/60 focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#6E4A2E] uppercase tracking-wider mb-2">
                WhatsApp / Phone
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#83746B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+62 812-3456-7890"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#D8A25E]/30 text-sm text-[#2F2F2F] placeholder-[#83746B]/60 focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Topic Select */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-[#6E4A2E] uppercase tracking-wider mb-2">
                Inquiry Subject
              </label>
              <div className="relative">
                <Tag className="w-4 h-4 text-[#83746B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#D8A25E]/30 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all appearance-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Order & Delivery">Product Order & Delivery</option>
                  <option value="Bulk & Corporate Hampers">Bulk & Corporate Hampers</option>
                  <option value="Reseller / Partnership">Reseller / Partnership</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#6E4A2E] uppercase tracking-wider mb-2">
              Message <span className="text-[#8B5E3C]">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-[#83746B] absolute left-3.5 top-3.5" />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need or ask any questions about our traditional snacks..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#D8A25E]/30 text-sm text-[#2F2F2F] placeholder-[#83746B]/60 focus:outline-none focus:border-[#8B5E3C] focus:bg-white transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-[#8B5E3C] text-white font-bold text-sm hover:bg-[#6E4A2E] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
