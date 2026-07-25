"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { UploadCloud, CheckCircle2, Copy } from "lucide-react";
import { formatIDR, generateOrderNumber } from "@/lib/utils";
import { paymentMethods } from "@/lib/data/payment-methods";
import { PaymentMethodSelector } from "@/components/payment/PaymentMethodSelector";
import { PaymentTimer } from "@/components/payment/PaymentTimer";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Loading";
import { useCart } from "@/components/cart/CartContext";
import { getCheckoutDraft, saveOrder } from "@/lib/orderStore";
import { OrderRecord } from "@/lib/types";

export function PaymentClient() {
  const router = useRouter();
  const { lines, subtotal, discount, clear } = useCart();
  const [draft, setDraft] = useState(getCheckoutDraft());
  const [methodId, setMethodId] = useState(paymentMethods[0].id);
  const [proofFileName, setProofFileName] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!draft) {
      const found = getCheckoutDraft();
      if (found) setDraft(found);
      else router.replace("/checkout");
    }
  }, [draft, router]);

  if (!draft) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const method = paymentMethods.find((m) => m.id === methodId) ?? paymentMethods[0];
  const requiresProof = method.type !== "qris";

  const handleCopy = () => {
    if (!method.accountNumber) return;
    navigator.clipboard?.writeText(method.accountNumber.replace(/\s|-/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleComplete = () => {
    setError(null);
    if (!agreed) {
      setError("Please confirm the order agreement before continuing.");
      return;
    }
    if (requiresProof && !proofFileName) {
      setError("Please upload your proof of payment.");
      return;
    }

    setSubmitting(true);

    const order: OrderRecord = {
      orderNumber: generateOrderNumber(),
      createdAt: new Date().toISOString(),
      customer: draft.customer,
      lines: lines.map((l) => ({
        productId: l.product.id,
        name: l.product.name,
        quantity: l.quantity,
        price: l.product.price,
      })),
      subtotal: draft.subtotal,
      shippingCost: draft.shippingCost,
      discount: draft.discount,
      total: draft.total,
      paymentMethod: method.name,
      paymentStatus: method.type === "qris" ? "verifying" : "verifying",
    };

    setTimeout(() => {
      saveOrder(order);
      clear();
      router.push("/order-success");
    }, 900);
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
          <h2 className="font-display text-lg font-semibold text-foreground">Choose Payment Method</h2>
          <div className="mt-5">
            <PaymentMethodSelector methods={paymentMethods} selectedId={methodId} onSelect={setMethodId} />
          </div>
        </div>

        <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow">
          <PaymentTimer minutes={15} />

          {method.type === "qris" && (
            <div className="mt-6 flex flex-col items-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-3xl border-2 border-dashed border-brown/20 bg-cream">
                <Image
                  src="https://picsum.photos/seed/qris-placeholder/300/300"
                  alt="QRIS payment code placeholder"
                  width={220}
                  height={220}
                  className="rounded-2xl opacity-80"
                />
              </div>
              <p className="mt-4 text-center text-sm text-foreground/60">
                Scan this QRIS code using any e-wallet or mobile banking app to pay{" "}
                <span className="font-semibold text-brown">{formatIDR(draft.total)}</span>.
              </p>
            </div>
          )}

          {method.type !== "qris" && (
            <div className="mt-6 rounded-2xl bg-cream p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
                {method.type === "bank" ? "Virtual Account Number" : "Transfer To"}
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="font-display text-xl font-semibold text-brown">{method.accountNumber}</p>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brown transition-colors hover:bg-brown hover:text-white"
                >
                  <Copy size={13} />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="mt-1 text-sm text-foreground/60">a.n. {method.accountName}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Transfer exactly {formatIDR(draft.total)}
              </p>
            </div>
          )}

          {requiresProof && (
            <div className="mt-6">
              <label className="mb-1.5 block text-sm font-medium text-foreground/80">
                Upload Proof of Payment
              </label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-brown/20 bg-cream/50 py-8 text-center transition-colors hover:bg-cream">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => setProofFileName(e.target.files?.[0]?.name ?? null)}
                />
                {proofFileName ? (
                  <>
                    <CheckCircle2 size={24} className="text-success" />
                    <span className="text-sm font-medium text-foreground">{proofFileName}</span>
                  </>
                ) : (
                  <>
                    <UploadCloud size={24} className="text-brown/60" />
                    <span className="text-sm text-foreground/60">
                      Click to upload screenshot or receipt
                    </span>
                  </>
                )}
              </label>
            </div>
          )}

          <label className="mt-6 flex items-start gap-3 text-sm text-foreground/70">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[#8B5E3C]"
            />
            I confirm my order details are correct and agree to Serena Cemilan&apos;s
            <a href="/terms" className="mx-1 font-medium text-brown underline">
              Terms of Service
            </a>
            .
          </label>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          <Button size="lg" className="mt-6 w-full" onClick={handleComplete} disabled={submitting}>
            {submitting ? "Processing Payment..." : "Complete Payment"}
          </Button>
        </div>
      </div>

      <div className="rounded-3xl border border-brown/10 bg-white p-6 card-shadow lg:sticky lg:top-28 lg:h-fit">
        <h2 className="font-display text-lg font-semibold text-foreground">Order Summary</h2>
        <div className="mt-4 space-y-3">
          {lines.map((line) => (
            <div key={line.product.id} className="flex justify-between text-sm">
              <span className="text-foreground/70">
                {line.product.name} <span className="text-foreground/40">×{line.quantity}</span>
              </span>
              <span className="font-medium text-foreground">{formatIDR(line.lineTotal)}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2.5 border-t border-brown/10 pt-4 text-sm">
          <div className="flex justify-between text-foreground/70">
            <span>Subtotal</span>
            <span>{formatIDR(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-success">
              <span>Discount</span>
              <span>-{formatIDR(discount)}</span>
            </div>
          )}
          <div className="flex justify-between text-foreground/70">
            <span>Shipping</span>
            <span>{formatIDR(draft.shippingCost)}</span>
          </div>
          <div className="flex justify-between border-t border-brown/10 pt-3 font-display text-base font-semibold text-foreground">
            <span>Total</span>
            <span className="text-brown">{formatIDR(draft.total)}</span>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-cream p-4 text-xs text-foreground/60">
          <p className="font-semibold text-foreground">{draft.customer.fullName}</p>
          <p className="mt-1">{draft.customer.address}</p>
          <p>
            {draft.customer.city}, {draft.customer.province} {draft.customer.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
}
