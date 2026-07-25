"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { useCart } from "@/components/cart/CartContext";
import logo from "@/lib/data/Home/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="h-[3px] w-full bg-gradient-to-r from-brown via-caramel to-brown" />

      <div
        className={cn(
          "w-full border-b transition-all duration-300",
          scrolled
            ? "glass border-brown/10"
            : "border-transparent bg-cream"
        )}
      >
        <div
          className={cn(
            "container-app flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-brown transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logo}
                alt="Serena Cemilan logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight text-brown">
                Serena Cemilan
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/40">
                Family Recipe · Since 2020
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 rounded-full border border-brown/10 bg-white/50 p-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-200",
                    active ? "text-cream" : "text-foreground/65 hover:text-brown"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-brown"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-brown/8"
              aria-label="Cart"
            >
              <ShoppingBag
                size={19}
                strokeWidth={1.8}
                className="text-brown/75 transition-colors group-hover:text-brown"
              />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-caramel px-1 text-[10px] font-bold text-white"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              className="hidden h-10 w-10 items-center justify-center rounded-full text-brown/75 transition-colors duration-200 hover:bg-brown/8 hover:text-brown sm:flex"
              aria-label="Account"
            >
              <User size={19} strokeWidth={1.8} />
            </button>

            <span className="mx-2 hidden h-6 w-px bg-brown/12 sm:block" />

            <div className="hidden sm:block">
              <Button href="/products" size="sm">
                Order Now
              </Button>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-brown lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-brown/10 bg-cream lg:hidden"
          >
            <nav className="container-app flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
                      pathname === link.href
                        ? "bg-white text-brown"
                        : "text-foreground/70 hover:bg-white/60"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex items-center gap-3 border-t border-brown/10 pt-4">
                <button
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-brown/15 text-brown"
                  aria-label="Account"
                >
                  <User size={18} strokeWidth={1.8} />
                </button>
                <Button href="/products" size="sm" className="flex-1">
                  Order Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}