export interface ShippingOption {
  id: string;
  courier: string;
  service: string;
  price: number;
  eta: string;
}

export const shippingOptions: ShippingOption[] = [
  { id: "jne-reg", courier: "JNE", service: "Regular", price: 15000, eta: "2–4 business days" },
  { id: "jnt-reg", courier: "J&T", service: "Regular", price: 14000, eta: "2–4 business days" },
  { id: "sicepat-reg", courier: "SiCepat", service: "Regular", price: 14000, eta: "2–3 business days" },
  { id: "anteraja-reg", courier: "AnterAja", service: "Regular", price: 13000, eta: "2–4 business days" },
  { id: "gosend-instant", courier: "GoSend", service: "Instant (same city)", price: 25000, eta: "Within hours" },
  { id: "grabexpress-instant", courier: "GrabExpress", service: "Instant (same city)", price: 25000, eta: "Within hours" },
];

export const provinces = [
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "DI Yogyakarta",
  "Banten",
  "Bali",
  "Sumatera Utara",
  "Sumatera Barat",
  "Sulawesi Selatan",
];
