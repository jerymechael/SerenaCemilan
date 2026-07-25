Serena Cemilan is a Next.js 15 (App Router) e-commerce site for a family-owned Indonesian snack brand — built with TypeScript, Tailwind CSS v4, Framer Motion, react-hook-form + zod, and lucide-react.

## Pages included in this build

- `/` — Home / landing page (Hero, Crafted with Excellence, Browse Our Collections, Most Popular Treats, Special Family Package, Journey of Freshness, Testimonials, FAQ preview, CTA)
- `/products` — Product listing with search, category filter, sorting, pagination
- `/products/[slug]` — Product detail (gallery, description/ingredients/shipping tabs, quantity selector, Add to Cart, Buy Now, WhatsApp, related products)
- `/cart` — Shopping cart (quantity editing, remove item, coupon code, order notes, summary)
- `/checkout` — Customer + shipping form (react-hook-form + zod validated), live order total
- `/payment` — Payment method selection (QRIS / bank VA / e-wallets), countdown timer, proof-of-payment upload, agreement checkbox
- `/order-success` — Confirmation with order number, invoice summary, estimated delivery, downloadable invoice, WhatsApp/Track Order links
- `/track-order` — Look up an order by number and see its shipment timeline

**Not yet built** (left as-is per your priority order — nav links to them will 404 until added): `/about`, `/gallery`, `/contact`, `/faq`, `/privacy`, `/terms`.

Try coupon codes on `/cart`: `SERENA10`, `KELUARGA15`, or `ONGKIR20K`.

Cart, coupon, and the last order are stored in the browser's `localStorage`, so there's no backend yet — Midtrans/Xendit, auth, and an admin dashboard are natural next additions.

## Getting Started

Install dependencies first (this zip does not include `node_modules`):

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
