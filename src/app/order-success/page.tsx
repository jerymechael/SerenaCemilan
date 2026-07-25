"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Download, MapPin, MessageCircle, PackageCheck } from "lucide-react";
import { formatIDR } from "@/lib/utils";
import { getLastOrder } from "@/lib/orderStore";
import { OrderRecord } from "@/lib/types";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Loading";

function buildInvoiceText(order: OrderRecord): string {
  const lines = order.lines
    .map((l) => `${l.name} x${l.quantity} — ${formatIDR(l.price * l.quantity)}`)
    .join("\n");

  return [
    "SERENA CEMILAN — INVOICE",
    `Order Number: ${order.orderNumber}`,
    `Date: ${new Date(order.createdAt).toLocaleString("id-ID")}`,
    "",
    `Customer: ${order.customer.fullName}`,
    `Phone: ${order.customer.phone}`,
    `Address: ${order.customer.address}, ${order.customer.city}, ${order.customer.province} ${order.customer.postalCode}`,
    "",
    "Items:",
    lines,
    "",
    `Subtotal: ${formatIDR(order.subtotal)}`,
    order.discount > 0 ? `Discount: -${formatIDR(order.discount)}` : "",
    `Shipping: ${formatIDR(order.shippingCost)}`,
    `Total: ${formatIDR(order.total)}`,
    "",
    `Payment Method: ${order.paymentMethod}`,
    `Payment Status: ${order.paymentStatus}`,
    "",
    "Thank you for shopping with Serena Cemilan!",
  ]
    .filter(Boolean)
    .join("\n");
}

export default function OrderSuccessPage() {
  const router = useRouter();
  const [order, setOrder] = useState<OrderRecord | null | undefined>(undefined);

  useEffect(() => {
    const found = getLastOrder();
    if (!found) {
      router.replace("/");
      return;
    }
    setOrder(found);
  }, [router]);

  if (order === undefined) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!order) return null;

  const estimatedDelivery = new Date(
    new Date(order.createdAt).getTime() + 4 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const handleDownloadInvoice = () => {
    const blob = new Blob([buildInvoiceText(order)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice-${order.orderNumber}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-background py-16 lg:py-20">
      <div className="container-app max-w-2xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success"
          >
            <CheckCircle2 size={44} />
          </motion.div>

          <h1 className="mt-6 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Order Placed Successfully!
          </h1>
          <p className="mt-2 text-foreground/60">
            Thank you, {order.customer.fullName.split(" ")[0]} — we&apos;ve received your order
            and it&apos;s being verified.
          </p>

          <div className="mt-6 rounded-full bg-cream px-5 py-2 font-display text-base font-semibold text-brown">
            {order.orderNumber}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-brown/10 bg-white p-6 card-shadow sm:p-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-cream/60 p-4">
              <PackageCheck size={20} className="text-brown" />
              <div>
                <p className="text-xs text-foreground/50">Payment Status</p>
                <p className="text-sm font-semibold capitalize text-foreground">
                  {order.paymentStatus === "verifying" ? "Verifying Payment" : order.paymentStatus}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-cream/60 p-4">
              <MapPin size={20} className="text-brown" />
              <div>
                <p className="text-xs text-foreground/50">Estimated Delivery</p>
                <p className="text-sm font-semibold text-foreground">{estimatedDelivery}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-brown/10 pt-6">
            {order.lines.map((line) => (
              <div key={line.productId} className="flex justify-between text-sm">
                <span className="text-foreground/70">
                  {line.name} <span className="text-foreground/40">×{line.quantity}</span>
                </span>
                <span className="font-medium text-foreground">
                  {formatIDR(line.price * line.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t border-brown/10 pt-5 text-sm">
            <div className="flex justify-between text-foreground/70">
              <span>Subtotal</span>
              <span>{formatIDR(order.subtotal)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-success">
                <span>Discount</span>
                <span>-{formatIDR(order.discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-foreground/70">
              <span>Shipping</span>
              <span>{formatIDR(order.shippingCost)}</span>
            </div>
            <div className="flex justify-between border-t border-brown/10 pt-3 font-display text-base font-semibold text-foreground">
              <span>Total Paid</span>
              <span className="text-brown">{formatIDR(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button href="/track-order" size="lg">
            Track Order
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Continue Shopping
          </Button>
          <Button variant="ghost" size="lg" icon={<Download size={18} />} onClick={handleDownloadInvoice}>
            Download Invoice
          </Button>
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(
              `Hi Serena Cemilan, I just placed order ${order.orderNumber}. Could you confirm it?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-success px-6 py-4 text-base font-medium text-white transition-colors hover:brightness-95"
          >
            <MessageCircle size={18} />
            Chat WhatsApp
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-foreground/50">
          Need help?{" "}
          <Link href="/contact" className="font-medium text-brown underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}
