import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ImageGallery } from "@/components/products/ImageGallery";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { ProductInfoTabs } from "@/components/products/ProductInfoTabs";
import { RelatedProducts } from "@/components/products/RelatedProducts";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  // product.image can be a plain URL string or a statically-imported image
  // object (StaticImageData) — Open Graph only accepts a URL string, so
  // pull out the .src when it's the latter.
  const ogImageUrl =
    typeof product.image === "string" ? product.image : product.image.src;

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Serena Cemilan`,
      description: product.description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="bg-background py-12 lg:py-16">
      <div className="container-app">
        <Breadcrumb
          items={[
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ImageGallery images={product.gallery} alt={product.name} />
          <ProductDetailClient product={product} />
        </div>

        <ProductInfoTabs product={product} />
        <RelatedProducts products={related} />
      </div>
    </div>
  );
}