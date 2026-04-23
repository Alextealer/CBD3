import { notFound } from "next/navigation";
import { categoriesData, slugify } from "@/data/products";
import { StudioApp } from "./studio-app";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ format?: string }>;
}

export const dynamic = "force-dynamic";

export default async function StudioPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { format } = await searchParams;

  // Resolve product across all categories
  for (const [catSlug, cat] of Object.entries(categoriesData)) {
    const p = cat.products.find((x) => slugify(x.name) === slug);
    if (p) {
      return (
        <StudioApp
          productName={p.name}
          productVolume={p.volume}
          format={format || p.volume}
          categorySlug={catSlug}
        />
      );
    }
  }
  notFound();
}
