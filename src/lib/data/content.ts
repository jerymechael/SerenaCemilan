import { FaqItem, Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sari Widowati",
    location: "Jakarta",
    rating: 5,
    quote:
      "The nastar is exactly like my grandmother used to make. Melt-in-the-mouth texture and perfect pineapple jam. Been I've ever ordered online!",
    avatar: "https://picsum.photos/seed/avatar-1/100/100",
  },
  {
    id: "t2",
    name: "Budi Santoso",
    location: "Bandung",
    rating: 5,
    quote:
      "Impressed by the packaging. Everything arrived crisp and well-sealed. The kastengel pisang is addictive.",
    avatar: "https://picsum.photos/seed/avatar-2/100/100",
  },
  {
    id: "t3",
    name: "Maya Anjani",
    location: "Surabaya",
    rating: 5,
    quote:
      "Ordered the family hamper for Lebaran and everyone at the gathering asked where it was from. Will order every year.",
    avatar: "https://picsum.photos/seed/avatar-3/100/100",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    category: "Shipping",
    question: "How long does delivery take?",
    answer:
      "Most orders within Java arrive in 2–4 business days via JNE, J&T, or SiCepat. Outside Java typically takes 4–7 business days. Same-day delivery is available in select cities via GoSend or GrabExpress.",
  },
  {
    id: "f2",
    category: "Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept QRIS, bank transfer (BCA, BNI, BRI, Mandiri), and e-wallets including GoPay, OVO, DANA, and ShopeePay. All payments are confirmed automatically once verified.",
  },
  {
    id: "f3",
    category: "Wholesale",
    question: "Do you offer wholesale or bulk pricing?",
    answer:
      "Yes — our Bulk Snacks category is priced for offices, events, and resellers. For custom bulk orders above 10kg, reach out via WhatsApp for a tailored quote.",
  },
  {
    id: "f4",
    category: "Shelf Life",
    question: "How long do the snacks stay fresh?",
    answer:
      "Shelf life varies by product, from 2 to 5 months when unopened and stored at room temperature. Each product page lists its specific shelf life and storage recommendation.",
  },
  {
    id: "f5",
    category: "Returns",
    question: "What's your return policy?",
    answer:
      "Because these are perishable food items, we don't accept returns once opened. If your order arrives damaged or incorrect, contact us within 24 hours with photos and we'll arrange a replacement or refund.",
  },
  {
    id: "f6",
    category: "Custom Orders",
    question: "Can I customize a hamper for a special occasion?",
    answer:
      "Absolutely — we offer custom hampers for weddings, corporate gifting, and holidays. Message us on WhatsApp with your budget, quantity, and occasion and we'll put together options.",
  },
];
