import Link from "next/link";
import { ChevronDown, ArrowDown, SlidersHorizontal } from "lucide-react";
import { DashboardHeader } from "../../dashboard-header";
import { categoriesData, slugify } from "@/data/products";

export const dynamic = "force-dynamic";

const FILTERS = [
  "Categorie",
  "Tag",
  "Type",
  "Concentration",
  "Bienfait",
  "Ingredients actifs",
  "Packaging",
];

export default function CatalogPage() {
  // All products, flattened
  const all: {
    categorySlug: string;
    slug: string;
    name: string;
    volume: string;
    price: string;
    image?: string;
    tags: string[];
    badge?: string;
    variants?: number;
  }[] = [];
  for (const [catSlug, cat] of Object.entries(categoriesData)) {
    for (const p of cat.products) {
      all.push({
        categorySlug: catSlug,
        slug: slugify(p.name),
        name: p.name,
        volume: p.volume,
        price: p.price,
        image: p.image,
        tags: p.tags,
        badge: p.badge,
        variants: p.variants,
      });
    }
  }

  return (
    <div className="px-10 py-8 max-w-[1320px]">
      <DashboardHeader title="Catalogue produits" />

      {/* ===== FILTER BAR ===== */}
      <div
        data-reveal
        className="bg-white border border-[#f1f1f3] rounded-[1.25rem] px-5 py-4 mb-6 flex flex-wrap items-center gap-2"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className="h-9 px-3.5 rounded-full bg-[#f7f7f8] text-[12px] font-semibold hover:bg-[#ebebed] flex items-center gap-1.5"
          >
            {f}
            <ChevronDown className="h-3 w-3" />
          </button>
        ))}

        <div className="flex-1" />

        {/* VAT toggle */}
        <div className="flex items-center gap-2 text-[12px] font-medium">
          <span>TTC</span>
          <span className="relative inline-flex w-9 h-5 bg-[#d4d4d8] rounded-full cursor-pointer">
            <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow" />
          </span>
        </div>

        <button
          type="button"
          className="h-9 px-3.5 rounded-full bg-[#f7f7f8] text-[12px] font-semibold hover:bg-[#ebebed] flex items-center gap-1.5"
        >
          <ArrowDown className="h-3 w-3" />
          Trier par
        </button>
        <button
          type="button"
          className="h-9 px-3.5 rounded-full bg-[#f7f7f8] text-[12px] font-semibold hover:bg-[#ebebed] flex items-center gap-1.5"
        >
          <SlidersHorizontal className="h-3 w-3" />
          Filtres
        </button>
      </div>

      {/* ===== GRID ===== */}
      <div data-reveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {all.map((p, i) => (
          <Link
            key={`${p.slug}-${i}`}
            href={`/catalog/${p.categorySlug}/${p.slug}`}
            className="group relative rounded-2xl overflow-hidden bg-[#eeeeee] flex flex-col hover:shadow-md transition-shadow"
          >
            {p.badge && (
              <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#d4e4a8] text-[#3d6b1e]">
                {p.badge}
              </span>
            )}
            <div className="aspect-square flex items-center justify-center">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain p-4 mix-blend-multiply"
                />
              ) : (
                <div className="relative">
                  <div className="w-10 h-14 bg-white rounded-md shadow-sm" />
                  <div className="w-12 h-5 bg-[#2a2a2a] rounded-t mx-auto -mt-0.5" />
                </div>
              )}
            </div>
            <div className="px-3.5 pb-3.5 pt-2 bg-white">
              {p.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-[#4d4f56] bg-[#f7f7f8] px-1.5 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-[10px] text-[#9ca3af]">
                {p.volume}
                {p.variants ? ` · ${p.variants} Variantes` : ""}
              </p>
              <h3 className="text-[12px] font-semibold leading-tight mt-0.5 mb-1 truncate group-hover:underline">
                {p.name}
              </h3>
              <p className="text-[13px] font-bold">
                {p.price} EUR{" "}
                <span className="text-[10px] font-normal text-[#9ca3af]">TTC</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
