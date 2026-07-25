import Link from "next/link";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/common/SocialIcons";

const productLinks = [
  { label: "Traditional Snacks", href: "/products?category=Traditional+Snacks" },
  { label: "Premium Cookies", href: "/products?category=Cookies" },
  { label: "Gift Hampers", href: "/products?category=Hampers" },
  { label: "Kilo Snacks", href: "/products?category=Bulk+Snacks" },
];

const companyLinks = [
  { label: "Production Process", href: "/about" },
  { label: "Testimonials", href: "/about" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-cream">
      <div className="container-app grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-brown">Serena Cemilan</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/60">
            Preserving Indonesian snack heritage through original quality and time-honored recipes.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[FacebookIcon, InstagramIcon, TikTokIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brown transition-colors hover:bg-brown hover:text-white"
                aria-label="Social link"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Products</p>
          <ul className="mt-4 space-y-2.5">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-foreground/70 transition-colors hover:text-brown">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Company</p>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-foreground/70 transition-colors hover:text-brown">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Newsletter</p>
          <p className="mt-4 text-sm text-foreground/60">
            Get updates on new arrivals and seasonal offers.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-full border border-brown/15 bg-white pl-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-foreground/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center bg-brown px-4 text-white transition-colors hover:bg-brown-dark"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-brown/10 py-6">
        <p className="container-app text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Serena Cemilan. Artisanal Indonesian Heritage.
        </p>
      </div>
    </footer>
  );
}
