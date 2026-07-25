import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serenacemilan.com"),
  title: {
    default: "Serena Cemilan — Traditional Indonesian Snacks Made with Love",
    template: "%s | Serena Cemilan",
  },
  description:
    "Serena Cemilan is a family-owned Indonesian snack brand crafting traditional snacks, homemade cookies, snack jars, bulk snacks, and gift hampers with heirloom recipes.",
  openGraph: {
    title: "Serena Cemilan — Traditional Indonesian Snacks Made with Love",
    description:
      "Handcrafted traditional snacks, cookies, snack jars, and hampers from a family-owned Indonesian heritage brand.",
    type: "website",
    locale: "en_US",
    siteName: "Serena Cemilan",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
