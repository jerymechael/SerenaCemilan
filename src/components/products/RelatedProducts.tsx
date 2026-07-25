import { Product } from "@/lib/types";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/common/Reveal";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="mt-20">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
          You Might Also Like
        </h2>
      </Reveal>
      <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
