"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Huile CBD 10%", volume: "10 ml", cost: 7.0, retailPrice: 24.9 },
  { name: "Huile CBD 20%", volume: "10 ml", cost: 12.0, retailPrice: 39.9 },
  { name: "Fleur CBD Premium", volume: "5 g", cost: 12.5, retailPrice: 34.9 },
  { name: "Baume CBD", volume: "50 ml", cost: 8.0, retailPrice: 29.9 },
  { name: "Infusion CBD", volume: "20 sachets", cost: 5.0, retailPrice: 14.9 },
  { name: "Serum Visage CBD", volume: "30 ml", cost: 12.0, retailPrice: 44.9 },
];

type TabType = "savings" | "roi";

export function ProfitCalculator() {
  const [productIndex, setProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(25);
  const [tab, setTab] = useState<TabType>("roi");

  const product = products[productIndex];
  const totalCost = product.cost * quantity;
  const totalEarnings = product.retailPrice * quantity;
  const profit = totalEarnings - totalCost;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const savings = product.retailPrice - product.cost;
  const totalSavings = savings * quantity;
  const savingsPercent = product.retailPrice > 0 ? (savings / product.retailPrice) * 100 : 0;

  const prevProduct = () =>
    setProductIndex((i) => (i === 0 ? products.length - 1 : i - 1));
  const nextProduct = () =>
    setProductIndex((i) => (i === products.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Calculator */}
          <div className="bg-white rounded-[2rem] border shadow-sm p-8 lg:p-10 max-w-[500px]">
            {/* Product selector */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={prevProduct}
                className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-colors shrink-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-14 h-14 bg-[#f2f2f3] rounded-xl flex items-center justify-center shrink-0">
                  <div className="w-6 h-10 bg-gradient-to-b from-amber-200 to-amber-400 rounded-md" />
                </div>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold truncate">{product.name}</p>
                  <p className="text-[12px] text-[#4d4f56]">{product.volume}</p>
                </div>
              </div>
              <button
                onClick={nextProduct}
                className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-colors shrink-0"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Quantity slider */}
            <div className="mb-8">
              <p className="text-[14px] font-semibold text-center mb-4">Quantite</p>
              <input
                type="range"
                min={1}
                max={500}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-1.5 bg-[#e5e5e5] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="mt-2 flex justify-start">
                <span className="bg-foreground text-white text-[13px] font-semibold px-3 py-1 rounded-lg">
                  {quantity}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-[#f2f2f3] rounded-full p-1 mb-6">
              <button
                onClick={() => setTab("savings")}
                className={`flex-1 text-[13px] font-semibold py-2.5 rounded-full transition-colors ${
                  tab === "savings"
                    ? "bg-foreground text-white"
                    : "text-[#4d4f56] hover:text-foreground"
                }`}
              >
                Economies
              </button>
              <button
                onClick={() => setTab("roi")}
                className={`flex-1 text-[13px] font-semibold py-2.5 rounded-full transition-colors ${
                  tab === "roi"
                    ? "bg-foreground text-white"
                    : "text-[#4d4f56] hover:text-foreground"
                }`}
              >
                Retour sur investissement
              </button>
            </div>

            {/* Results */}
            <div className="space-y-0">
              {tab === "roi" ? (
                <>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-[14px] text-[#4d4f56]">Prix de vente recommande</span>
                    <span className="text-[14px] font-semibold">
                      {product.retailPrice.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-[14px] text-[#4d4f56]">Revenus totaux</span>
                    <span className="text-[14px] font-semibold">
                      {totalEarnings.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between py-4">
                    <span className="text-[18px] font-bold">Votre profit</span>
                    <span className="text-[18px] font-bold">
                      {profit.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[14px] text-[#4d4f56]">Retour sur investissement</span>
                    <span className="text-[14px] font-semibold">{roi.toFixed(2)}%</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-[14px] text-[#4d4f56]">Prix grossiste CBD3</span>
                    <span className="text-[14px] font-semibold">
                      {product.cost.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-[14px] text-[#4d4f56]">Prix de vente recommande</span>
                    <span className="text-[14px] font-semibold">
                      {product.retailPrice.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between py-4">
                    <span className="text-[18px] font-bold">Economies totales</span>
                    <span className="text-[18px] font-bold">
                      {totalSavings.toFixed(2)}EUR
                    </span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[14px] text-[#4d4f56]">Marge par unite</span>
                    <span className="text-[14px] font-semibold">{savingsPercent.toFixed(0)}%</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[50px] gap-2">
                <ShoppingCart className="h-4 w-4" />
                Commencer a vendre
              </Button>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Large product bottle */}
              <div className="relative">
                <div className="w-40 h-64 bg-gradient-to-b from-amber-100 to-amber-300 rounded-2xl shadow-xl mx-auto">
                  <div className="w-14 h-8 bg-[#2a2a2a] rounded-t-lg mx-auto" />
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-28 h-32 bg-white/90 rounded-md flex flex-col items-center justify-center p-2">
                    <span className="text-[8px] font-medium text-muted-foreground">CBD3</span>
                    <span className="text-[14px] font-bold mt-1">Votre</span>
                    <span className="text-[14px] font-bold">Marque</span>
                    <span className="text-[14px] font-bold">CBD</span>
                    <span className="text-[7px] text-muted-foreground mt-2">HUILE CBD 10%</span>
                  </div>
                </div>
              </div>
              {/* Smaller product */}
              <div className="absolute -right-16 top-8">
                <div className="w-20 h-36 bg-white rounded-xl shadow-lg">
                  <div className="w-8 h-5 bg-gray-200 rounded-t-md mx-auto" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-14 h-16 bg-[#f5f5f5] rounded-sm flex items-center justify-center">
                    <span className="text-[6px] font-bold text-center text-muted-foreground">Serum<br />CBD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
