import { Product } from "@/lib/types";

import nastar from "@/lib/data/gallery/nastar.jpeg";
import kuebawang from "@/lib/data/gallery/kuebawang.jpeg";
import kacangbawang from "@/lib/data/gallery/kacangbawang.jpeg";
import kacangtoples from "@/lib/data/gallery/kacangtoples.jpeg";
import kembangloyang from "@/lib/data/gallery/kembangloyang.jpeg";
import keripikpisang from "@/lib/data/gallery/keripikpisang.jpeg";
import rempeyek from "@/lib/data/gallery/rempeyek.jpeg";
import hampersPaket from "@/lib/data/categoryproduct/Hampers.jpeg";

export const products: Product[] = [
  {
    id: "p1",
    slug: "premium-nastar",
    name: "Premium Nastar",
    category: "Cookies",
    price: 85000,
    compareAtPrice: 95000,
    rating: 4.9,
    reviewCount: 128,
    image: nastar,
    gallery: [nastar],
    description: "Buttery pineapple jam cookies, hand-rolled in small batches.",
    longDescription:
      "Our Premium Nastar is made from a family recipe passed down three generations — a melt-in-your-mouth buttery shell wrapped around slow-cooked pineapple jam. Each cookie is hand-rolled and baked in small batches to keep the texture light and the jam perfectly balanced between sweet and tangy.",
    ingredients: ["Wheat flour", "Butter", "Pineapple jam", "Egg yolk", "Cheddar cheese", "Sugar"],
    shelfLife: "3 months (sealed jar, room temperature)",
    weight: "500g / jar",
    packaging: "Reusable glass jar with airtight seal",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "p2",
    slug: "kue-bawang",
    name: "Kue Bawang",
    category: "Traditional Snacks",
    price: 40000,
    rating: 4.8,
    reviewCount: 92,
    image: kuebawang,
    gallery: [kuebawang],
    description: "Crispy savory crackers with a fragrant garlic aroma.",
    longDescription:
      "Kue Bawang is a savory, garlic-scented cracker fried until deeply golden and shatteringly crisp. Made in small batches with real garlic and a touch of white pepper, it's the snack that disappears fastest at every gathering.",
    ingredients: ["Wheat flour", "Garlic", "Palm oil", "White pepper", "Salt"],
    shelfLife: "3 months (sealed pouch, room temperature)",
    weight: "300g / pouch",
    packaging: "Resealable foil pouch",
    inStock: true,
  },
  {
    id: "p3",
    slug: "kacang-bawang",
    name: "Kacang Bawang",
    category: "Crackers",
    price: 38000,
    rating: 4.7,
    reviewCount: 75,
    image: kacangbawang,
    gallery: [kacangbawang],
    description: "Crunchy fried peanuts seasoned with garlic and a hint of sea salt.",
    longDescription:
      "Whole peanuts fried in garlic-infused oil until perfectly crisp, then lightly salted. A pantry staple in every Indonesian household — equally good with rice or straight from the jar.",
    ingredients: ["Peanuts", "Garlic", "Palm oil", "Salt"],
    shelfLife: "4 months (sealed jar, room temperature)",
    weight: "400g / jar",
    packaging: "Reusable glass jar with airtight seal",
    inStock: true,
  },
  {
    id: "p4",
    slug: "keripik-pisang",
    name: "Keripik Pisang",
    category: "Chips",
    price: 32000,
    rating: 4.6,
    reviewCount: 61,
    image: keripikpisang,
    gallery: [keripikpisang],
    description: "Thin-cut banana chips fried to a light, honey-sweet crisp.",
    longDescription:
      "Sliced paper-thin from ripe plantains and fried in small batches, our banana chips land the balance between crisp and naturally sweet — no artificial flavoring needed.",
    ingredients: ["Plantain", "Palm oil", "Sugar (optional coating)"],
    shelfLife: "4 months (sealed pouch, room temperature)",
    weight: "250g / pouch",
    packaging: "Resealable foil pouch",
    inStock: true,
  },
  {
    id: "p5",
    slug: "kembang-loyang",
    name: "Kembang Loyang",
    category: "Traditional Snacks",
    price: 42000,
    rating: 4.8,
    reviewCount: 54,
    image: kembangloyang,
    gallery: [kembangloyang],
    description: "Flower-shaped crispy fritters, lightly sweet and delicately thin.",
    longDescription:
      "Pressed in a traditional flower-shaped mold and fried until golden and airy, Kembang Loyang is a nostalgic treat with a delicate crunch and just a whisper of sweetness in every bite.",
    ingredients: ["Rice flour", "Coconut milk", "Egg", "Sugar", "Palm oil"],
    shelfLife: "2 months (sealed pouch, room temperature)",
    weight: "250g / pouch",
    packaging: "Resealable foil pouch",
    inStock: true,
  },
  {
    id: "p6",
    slug: "kacang-toples",
    name: "Kacang Toples",
    category: "Crackers",
    price: 90000,
    compareAtPrice: 105000,
    rating: 4.9,
    reviewCount: 40,
    image: kacangtoples,
    gallery: [kacangtoples],
    description: "A generous jar of our signature seasoned peanuts, ready to gift or keep.",
    longDescription:
      "Kacang Toples packs a full jar of our seasoned peanuts — the same recipe as Kacang Bawang, scaled up into a reusable glass jar that's ready to gift, restock, or set out for guests.",
    ingredients: ["Peanuts", "Garlic", "Palm oil", "Salt"],
    shelfLife: "4 months (sealed jar, room temperature)",
    weight: "1kg / jar",
    packaging: "Large reusable glass jar",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "p7",
    slug: "rempeyek",
    name: "Rempeyek",
    category: "Crackers",
    price: 35000,
    rating: 5.0,
    reviewCount: 33,
    image: rempeyek,
    gallery: [rempeyek],
    description: "Thin, crackly rice-flour crisps studded with peanuts.",
    longDescription:
      "Rempeyek is a paper-thin, intensely crackly fritter made from a seasoned rice-flour batter studded with whole peanuts, deep-fried until lace-like and audibly crisp — a classic side for rice dishes or a snack on its own.",
    ingredients: ["Rice flour", "Peanuts", "Coconut milk", "Coriander", "Garlic", "Palm oil"],
    shelfLife: "2 months (sealed pouch, room temperature)",
    weight: "250g / pouch",
    packaging: "Resealable foil pouch",
    badge: "Limited",
    inStock: true,
  },
  {
    id: "p8",
    slug: "paket-hampers-keluarga",
    name: "Paket Hampers Keluarga",
    category: "Hampers",
    price: 150000,
    compareAtPrice: 175000,
    rating: 4.9,
    reviewCount: 21,
    image: hampersPaket,
    gallery: [hampersPaket],
    description: "A curated gift box of our best-selling snacks, ready to share.",
    longDescription:
      "Our Family Hampers Package brings together a hand-picked selection of Serena Cemilan favorites — Premium Nastar, Kacang Bawang, and Rempeyek — packed in an elegant reusable box. Perfect for holidays, celebrations, or simply spoiling someone you love.",
    ingredients: ["Assorted snacks (see individual items for full ingredient list)"],
    shelfLife: "2 months (sealed box, room temperature)",
    weight: "1.2kg / box (3 items)",
    packaging: "Reusable gift box with ribbon",
    badge: "New",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}