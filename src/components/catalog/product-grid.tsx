"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, SlidersHorizontal, Leaf, X } from "lucide-react";

export interface Product {
  name: string;
  volume: string;
  cbdRange: string;
  thc: string;
  price: string;
  tags: string[];
  badge?: "Nouveau" | "Bientot";
  variants?: number;
  type?: string;
  concern?: string;
  ingredients?: string[];
  packaging?: string;
}

interface ProductGridProps {
  products: Product[];
  categoryName: string;
  categoryDescription: string;
}

type SortOption = "default" | "price-asc" | "price-desc" | "name";

export function ProductGrid({ products, categoryName, categoryDescription }: ProductGridProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOption>("default");
  const [showVAT, setShowVAT] = useState(false);

  // Build filter options from data
  const filters = useMemo(() => {
    const extract = (getter: (p: Product) => string | string[] | undefined) => {
      const s = new Set<string>();
      products.forEach((p) => {
        const v = getter(p);
        if (Array.isArray(v)) v.forEach((x) => s.add(x));
        else if (v) s.add(v);
      });
      return [...s].sort();
    };
    const defs = [
      { key: "tag", label: "Tag", options: extract((p) => p.tags) },
      { key: "concentration", label: "Concentration", options: extract((p) => p.cbdRange) },
      { key: "badge", label: "Nouveaute", options: ["Nouveau", "Standard"] },
      { key: "type", label: "Type", options: extract((p) => p.type) },
      { key: "concern", label: "Bienfait", options: extract((p) => p.concern) },
      { key: "ingredients", label: "Ingredients actifs", options: extract((p) => p.ingredients) },
      { key: "packaging", label: "Packaging", options: extract((p) => p.packaging) },
    ];
    return defs.filter((d) => d.options.length > 0);
  }, [products]);

  const toggleFilter = (key: string, value: string) => {
    setActiveFilters((prev) => {
      const cur = prev[key] || [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      if (next.length === 0) { const c = { ...prev }; delete c[key]; return c; }
      return { ...prev, [key]: next };
    });
  };

  const clearAll = () => setActiveFilters({});
  const filterCount = Object.values(activeFilters).reduce((n, a) => n + a.length, 0);

  const filtered = useMemo(() => {
    let r = [...products];
    if (activeFilters.tag?.length) r = r.filter((p) => p.tags.some((t) => activeFilters.tag.includes(t)));
    if (activeFilters.concentration?.length) r = r.filter((p) => activeFilters.concentration.includes(p.cbdRange));
    if (activeFilters.badge?.length) r = r.filter((p) => {
      if (activeFilters.badge.includes("Standard") && !p.badge) return true;
      return p.badge ? activeFilters.badge.includes(p.badge) : false;
    });
    if (activeFilters.type?.length) r = r.filter((p) => p.type && activeFilters.type.includes(p.type));
    if (activeFilters.concern?.length) r = r.filter((p) => p.concern && activeFilters.concern.includes(p.concern));
    if (activeFilters.ingredients?.length) r = r.filter((p) => p.ingredients?.some((i) => activeFilters.ingredients.includes(i)));
    if (activeFilters.packaging?.length) r = r.filter((p) => p.packaging && activeFilters.packaging.includes(p.packaging));
    if (sort === "price-asc") r.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    else if (sort === "price-desc") r.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    else if (sort === "name") r.sort((a, b) => a.name.localeCompare(b.name));
    return r;
  }, [products, activeFilters, sort]);

  const fmtPrice = (p: string) => (showVAT ? (parseFloat(p) * 1.2).toFixed(2) : parseFloat(p).toFixed(2));

  return (
    <div>
      {/* ===== FILTER BAR ===== */}
      <div className="sticky top-[60px] z-40 bg-white py-3 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3">
          {/* Pills background */}
          <div className="flex items-center gap-2 bg-[#f2f2f3] rounded-full px-2 py-1.5">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setOpenFilter(openFilter === f.key ? null : f.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-medium transition-colors shrink-0 ${
                  activeFilters[f.key]?.length ? "bg-foreground text-white" : "bg-white hover:bg-white/80 shadow-sm"
                }`}
              >
                {f.label}
                {activeFilters[f.key]?.length ? (
                  <span className="bg-white text-foreground text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilters[f.key].length}
                  </span>
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>

          {filterCount > 0 && (
            <button onClick={clearAll} className="flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-medium text-red-600 hover:bg-red-50 transition-colors shrink-0">
              <X className="h-3.5 w-3.5" /> Effacer ({filterCount})
            </button>
          )}

          <div className="flex-1" />

          {/* VAT toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[14px] font-medium">TVA</span>
            <button onClick={() => setShowVAT(!showVAT)} className={`relative w-11 h-[26px] rounded-full transition-colors ${showVAT ? "bg-foreground" : "bg-[#d4d4d8]"}`}>
              <span className={`absolute top-[3px] w-5 h-5 bg-white rounded-full shadow transition-transform ${showVAT ? "translate-x-[22px]" : "translate-x-[3px]"}`} />
            </button>
          </div>

          {/* Sort */}
          <button onClick={() => setOpenFilter(openFilter === "sort" ? null : "sort")} className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-[14px] font-medium hover:bg-muted transition-colors shrink-0">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Trier
          </button>
        </div>
      </div>

      {/* ===== DROPDOWNS (outside overflow container) ===== */}
      {openFilter && openFilter !== "sort" && (
        <div className="fixed inset-0 z-50" onClick={() => setOpenFilter(null)}>
          <div
            className="absolute bg-white rounded-xl shadow-xl border p-2 min-w-[220px] max-h-[320px] overflow-y-auto"
            style={{ top: 160, left: 40 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="px-3 py-1.5 text-[12px] font-semibold text-[#4d4f56] uppercase tracking-wider">{filters.find((f) => f.key === openFilter)?.label}</p>
            {filters.find((f) => f.key === openFilter)?.options.map((opt) => {
              const active = activeFilters[openFilter]?.includes(opt);
              return (
                <button
                  key={opt}
                  onClick={() => toggleFilter(openFilter, opt)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors flex items-center justify-between gap-4 ${active ? "bg-[#f0f0f0]" : "hover:bg-[#f7f7f8]"}`}
                >
                  {opt}
                  {active && (
                    <span className="w-5 h-5 bg-foreground rounded-full flex items-center justify-center shrink-0">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Sort dropdown */}
      {openFilter === "sort" && (
        <div className="fixed inset-0 z-50" onClick={() => setOpenFilter(null)}>
          <div
            className="absolute bg-white rounded-xl shadow-xl border p-2 min-w-[200px]"
            style={{ top: 160, right: 40 }}
            onClick={(e) => e.stopPropagation()}
          >
            {(["default", "price-asc", "price-desc", "name"] as SortOption[]).map((val) => {
              const labels: Record<SortOption, string> = { default: "Par defaut", "price-asc": "Prix croissant", "price-desc": "Prix decroissant", name: "Nom A-Z" };
              return (
                <button
                  key={val}
                  onClick={() => { setSort(val); setOpenFilter(null); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${sort === val ? "bg-[#f0f0f0]" : "hover:bg-[#f7f7f8]"}`}
                >
                  {labels[val]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ===== HEADER ===== */}
      <div className="pt-8 pb-4 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h1 className="text-[24px] font-medium tracking-[-0.03em]">{categoryName}</h1>
            <p className="text-[13px] text-[#4d4f56] mt-1">{filtered.length} produit{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <p className="text-[14px] text-[#4d4f56] max-w-[500px] text-right leading-relaxed hidden lg:block">
            {categoryDescription.substring(0, 80)}...{" "}
            <button className="font-medium text-foreground underline underline-offset-4">Lire plus</button>
          </p>
        </div>
      </div>

      {/* ===== PRODUCT GRID ===== */}
      <div className="pb-16 max-w-[1400px] mx-auto px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Leaf className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-[16px] font-medium mb-2">Aucun produit trouve</p>
            <p className="text-[14px] text-[#4d4f56] mb-6">Essayez de modifier vos filtres</p>
            <button onClick={clearAll} className="text-[14px] font-medium underline">Effacer les filtres</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filtered.map((product, idx) => (
              <React.Fragment key={product.name}>
                {idx === 3 && (
                  <div className="row-span-2 rounded-2xl overflow-hidden relative bg-gradient-to-b from-[#f0f7e6] to-[#d4e8a8] flex flex-col">
                    <div className="p-5 pt-6">
                      <p className="text-[24px] font-semibold tracking-[-0.03em] leading-[1.2]">
                        Nourrissez en profondeur.<br />
                        <span className="text-[#3d6b1e]">Brillez naturellement.</span>
                      </p>
                    </div>
                    <div className="flex-1 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative rotate-[-15deg]">
                          <div className="w-16 h-40 bg-white/80 rounded-xl shadow-md">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-[#2a2a2a] rounded-t-md" />
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-16 bg-[#4a8c2a]/20 rounded border border-[#4a8c2a]/30 flex items-center justify-center">
                              <span className="text-[6px] font-bold text-[#3d6b1e] text-center leading-tight">CBD<br />OIL</span>
                            </div>
                          </div>
                        </div>
                        <div className="relative rotate-[10deg] -ml-4 mt-12">
                          <div className="w-14 h-36 bg-white/70 rounded-xl shadow-md">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-5 bg-[#2a2a2a] rounded-t-md" />
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-9 h-14 bg-[#4a8c2a]/20 rounded border border-[#4a8c2a]/30 flex items-center justify-center">
                              <span className="text-[5px] font-bold text-[#3d6b1e] text-center leading-tight">SERUM<br />CBD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 pb-6">
                      <Link href="/catalog">
                        <Button className="rounded-full px-5 text-[11px] font-bold uppercase tracking-[0.02em] h-[42px]">Explorer</Button>
                      </Link>
                    </div>
                  </div>
                )}
                <div className="group cursor-pointer">
                  <div className="relative aspect-square bg-[#f2f2f3] rounded-2xl overflow-hidden mb-3">
                    {product.badge && (
                      <span className={`absolute top-3 left-3 z-10 text-[11px] font-semibold px-2.5 py-1 rounded-full ${product.badge === "Nouveau" ? "bg-[#e8f5e9] text-green-800" : "bg-amber-100 text-amber-800"}`}>
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        <div className="w-12 h-20 bg-white/80 rounded-lg shadow-sm mx-auto" />
                        <div className="w-6 h-3 bg-white/60 rounded-t-sm mx-auto -mt-0.5" />
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-10 bg-white rounded-sm flex items-center justify-center">
                          <span className="text-[5px] font-bold text-center leading-tight text-muted-foreground">Votre<br />Marque</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium text-[#4d4f56] border rounded-full px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <p className="text-[12px] text-[#4d4f56] mb-1">{product.volume}{product.variants ? ` · ${product.variants} Variantes` : ""}</p>
                  <h3 className="text-[14px] font-medium leading-tight mb-1.5">{product.name}</h3>
                  <p className="text-[14px] font-semibold">{fmtPrice(product.price)}EUR <span className="text-[12px] font-normal text-[#4d4f56]">{showVAT ? "TTC" : "HT"}</span></p>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
