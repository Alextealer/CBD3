import Link from "next/link";
import { ArrowDown, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../../dashboard-header";
import { categoriesData, slugify } from "@/data/products";

export const dynamic = "force-dynamic";

const TABS = ["Templates produits", "Commandes manuelles", "Unsigned Store"] as const;

// mock of the user's saved templates — first 6 catalog products
function getUserTemplates() {
  const items: {
    categorySlug: string;
    productSlug: string;
    name: string;
    volume: string;
    image?: string;
    createdAt: string;
  }[] = [];
  const dates = ["21.04.2026", "08.04.2026", "02.04.2026", "28.03.2026", "20.03.2026", "15.03.2026"];
  let i = 0;
  for (const [catSlug, cat] of Object.entries(categoriesData)) {
    for (const p of cat.products) {
      items.push({
        categorySlug: catSlug,
        productSlug: slugify(p.name),
        name: p.name,
        volume: p.volume,
        image: p.image,
        createdAt: dates[i] || "01.03.2026",
      });
      i++;
      if (items.length >= 6) return items;
    }
  }
  return items;
}

export default function MyProductsPage() {
  const items = getUserTemplates();

  return (
    <div className="px-10 py-8 max-w-[1120px]">
      <DashboardHeader title="Mes produits" />

      {/* ===== TABS ===== */}
      <div data-reveal className="flex items-center gap-2 mb-6">
        {TABS.map((t, i) => (
          <button
            key={t}
            type="button"
            className={`h-9 px-4 rounded-full text-[12px] font-semibold transition-colors ${
              i === 0
                ? "bg-foreground text-background"
                : "bg-[#f7f7f8] text-[#4d4f56] hover:bg-[#ebebed]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ===== SORT ===== */}
      <div data-reveal className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 text-[12px]">
          <span className="text-[#4d4f56]">Trier par</span>
          <button
            type="button"
            className="h-8 px-3 rounded-full bg-[#f7f7f8] border border-[#f1f1f3] flex items-center gap-1.5 font-semibold"
          >
            Mise a jour <ArrowDown className="h-3 w-3" />
          </button>
        </div>
        <Link href="/profile/catalog">
          <Button className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            Creer un template
          </Button>
        </Link>
      </div>

      {/* ===== LIST ===== */}
      <div data-reveal className="space-y-3">
        {items.map((it) => (
          <div
            key={`${it.productSlug}-${it.createdAt}`}
            className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-4 flex items-center gap-5"
          >
            <div className="w-[76px] h-[76px] shrink-0 rounded-xl bg-[#eeeeee] flex items-center justify-center overflow-hidden">
              {it.image ? (
                <img
                  src={it.image}
                  alt={it.name}
                  className="w-full h-full object-contain p-2 mix-blend-multiply"
                />
              ) : (
                <span className="text-[9px] font-bold text-[#9ca3af] text-center leading-tight px-2">
                  MOCKUP
                  <br />
                  EN COURS
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-[#9ca3af]">Cree le {it.createdAt}</p>
              <Link
                href={`/catalog/${it.categorySlug}/${it.productSlug}`}
                className="text-[15px] font-semibold mt-0.5 hover:underline block truncate"
              >
                {it.name}
              </Link>
              <p className="text-[12px] text-[#4d4f56] mt-0.5">{it.volume}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link href={`/studio/${it.productSlug}`}>
                <Button
                  variant="outline"
                  className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider"
                >
                  Ouvrir le studio
                </Button>
              </Link>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-[#f1f1f3] hover:bg-[#f7f7f8] flex items-center justify-center"
              >
                <MoreVertical className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
