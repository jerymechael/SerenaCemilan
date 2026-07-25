import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PaymentClient } from "@/components/payment/PaymentClient";

export const metadata = {
  title: "Payment",
};

export default function PaymentPage() {
  return (
    <div className="bg-background py-12 lg:py-16">
      <div className="container-app max-w-5xl">
        <Breadcrumb
          items={[
            { label: "Cart", href: "/cart" },
            { label: "Checkout", href: "/checkout" },
            { label: "Payment" },
          ]}
        />
        <h1 className="mt-6 mb-8 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Payment
        </h1>
        <PaymentClient />
      </div>
    </div>
  );
}
