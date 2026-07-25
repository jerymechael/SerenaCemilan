export type ProductCategory =
  | "Traditional Snacks"
  | "Cookies"
  | "Snack Jars"
  | "Bulk Snacks"
  | "Chips"
  | "Hampers";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  ingredients: string[];
  shelfLife: string;
  weight: string;
  packaging: string;
  badge?: "Best Seller" | "New" | "Limited";
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface CheckoutInfo {
  fullName: string;
  phone: string;
  email: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  notes?: string;
  shippingId: string;
}

export interface OrderRecord {
  orderNumber: string;
  createdAt: string;
  customer: CheckoutInfo;
  lines: { productId: string; name: string; quantity: number; price: number }[];
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  paymentMethod: string;
  paymentStatus: "pending" | "verifying" | "paid";
}
