"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CART_FREE_SHIPPING_THRESHOLD } from "@/lib/cart-store";
import { ProductImage } from "@/components/catalog/product-image";

export function CartDrawer() {
  const {
    items,
    open,
    setOpen,
    removeItem,
    updateQty,
    clear,
    subtotalPda,
    subtotalPdvc,
    margin,
    marginPct,
    vat,
    totalTtc,
    count,
  } = useCart();

  // Close on escape + lock body scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  const toFree = Math.max(0, CART_FREE_SHIPPING_THRESHOLD - subtotalPda);
  const freeProgress = Math.min(100, (subtotalPda / CART_FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[100] w-full sm:w-[440px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* HEADER */}
        <header className="relative px-6 py-5 border-b border-[#f1f1f3]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center">
                <ShoppingBag className="h-4 w-4" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {count}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-[16px] font-semibold leading-none">Votre panier</h2>
                <p className="text-[11px] text-[#9ca3af] mt-0.5">
                  {items.length === 0
                    ? "Aucun article"
                    : `${items.length} reference${items.length > 1 ? "s" : ""} — ${count} unite${count > 1 ? "s" : ""}`}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e7] flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Free shipping progress */}
          {items.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px] font-medium mb-1.5">
                <span className="flex items-center gap-1.5 text-[#4d4f56]">
                  <Truck className="h-3.5 w-3.5" />
                  {toFree === 0 ? (
                    <span className="text-green-700 font-semibold">Livraison Europe offerte !</span>
                  ) : (
                    <span>
                      Plus que <strong>{toFree.toFixed(2)} EUR</strong> pour la livraison offerte
                    </span>
                  )}
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#f1f1f3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                  style={{ width: `${freeProgress}%` }}
                />
              </div>
            </div>
          )}
        </header>

        {/* BODY */}
        {items.length === 0 ? (
          <EmptyState onClose={() => setOpen(false)} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Margin strip — B2B value prop */}
              <div className="mx-6 mt-5 rounded-2xl bg-gradient-to-br from-[#faf5ed] to-[#f5edd8] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <TrendingUp className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#4d4f56]">
                      Marge potentielle estimee
                    </p>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-[22px] font-semibold text-green-800">
                        +{margin.toFixed(2)} EUR
                      </span>
                      <span className="text-[11px] font-bold bg-green-50 text-green-700 px-1.5 py-0.5 rounded-full">
                        {marginPct}%
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4d4f56] mt-1 leading-snug">
                      Si vous revendez {subtotalPdvc.toFixed(2)} EUR au PDVC conseille
                    </p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <ul className="px-6 py-5 space-y-4">
                {items.map((it) => (
                  <CartLine
                    key={it.id}
                    item={it}
                    onRemove={() => removeItem(it.id)}
                    onQty={(qty) => updateQty(it.id, qty)}
                  />
                ))}
              </ul>

              {/* Promo code */}
              <div className="mx-6 rounded-2xl border border-dashed border-[#e5e5e7] p-4 mb-5">
                <label className="flex items-center gap-2 text-[12px] font-semibold mb-2">
                  <Tag className="h-3.5 w-3.5" />
                  Code promo
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="BIENVENUE10"
                    className="flex-1 h-10 rounded-full border border-[#e5e5e7] px-4 text-[13px] focus:outline-none focus:border-foreground"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full h-10 text-[11px] font-bold uppercase tracking-wider"
                  >
                    Appliquer
                  </Button>
                </div>
              </div>

              {/* Upsell hint */}
              <div className="mx-6 mb-5 flex items-start gap-2 rounded-xl bg-[#f7f7f8] p-3">
                <Sparkles className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#4d4f56] leading-snug">
                  <strong>Astuce :</strong> en passant au format superieur vous pouvez
                  gagner jusqu&apos;a 35% sur le PDA.
                </p>
              </div>

              {/* Clear */}
              <div className="px-6 pb-5 text-center">
                <button
                  type="button"
                  onClick={clear}
                  className="text-[11px] font-medium text-[#9ca3af] hover:text-red-600 underline underline-offset-4 transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            </div>

            {/* FOOTER SUMMARY */}
            <footer className="border-t border-[#f1f1f3] px-6 pt-4 pb-5 bg-white">
              <dl className="space-y-1.5 text-[13px] mb-4">
                <div className="flex justify-between text-[#4d4f56]">
                  <dt>Sous-total HT</dt>
                  <dd>{subtotalPda.toFixed(2)} EUR</dd>
                </div>
                <div className="flex justify-between text-green-700">
                  <dt className="flex items-center gap-1.5">
                    <TrendingUp className="h-3 w-3" />
                    Marge potentielle
                  </dt>
                  <dd className="font-semibold">+{margin.toFixed(2)} EUR</dd>
                </div>
                <div className="flex justify-between text-[#4d4f56]">
                  <dt>TVA 20%</dt>
                  <dd>{vat.toFixed(2)} EUR</dd>
                </div>
                <div className="flex justify-between text-[#4d4f56]">
                  <dt className="flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5" />
                    Livraison
                  </dt>
                  <dd>{toFree === 0 ? <span className="text-green-700 font-semibold">Offerte</span> : "Calculee au checkout"}</dd>
                </div>
                <div className="flex justify-between text-[16px] pt-2 border-t border-[#f1f1f3]">
                  <dt className="font-semibold">Total TTC</dt>
                  <dd className="font-semibold">{totalTtc.toFixed(2)} EUR</dd>
                </div>
              </dl>

              <Link href="/profile" onClick={() => setOpen(false)} className="block mb-2">
                <Button className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]">
                  Passer au checkout
                  <span className="ml-2 font-normal">&middot; {totalTtc.toFixed(2)} EUR</span>
                </Button>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full text-[12px] font-semibold text-[#4d4f56] hover:text-foreground transition-colors py-2"
              >
                Continuer mes achats
              </button>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-[#9ca3af]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Paiement securise
                </span>
                <span>&middot;</span>
                <span>THC &lt; 0.3% EU</span>
                <span>&middot;</span>
                <span>COA inclus</span>
              </div>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

function CartLine({
  item,
  onRemove,
  onQty,
}: {
  item: ReturnType<typeof useCart>["items"][number];
  onRemove: () => void;
  onQty: (q: number) => void;
}) {
  return (
    <li className="flex gap-3 group">
      {/* Thumbnail */}
      <div className="shrink-0 w-[72px] h-[72px]">
        <ProductImage src={item.image} alt={item.productName} variant="thumb" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af]">
              {item.categoryName}
            </p>
            <h3 className="text-[13px] font-semibold leading-snug truncate">
              {item.productName}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mt-1">
              <span className="text-[10px] font-semibold bg-[#faf5ed] text-foreground px-2 py-0.5 rounded-full">
                {item.format}
              </span>
              {item.kind === "sample" && (
                <span className="text-[10px] font-semibold bg-[#f1eefe] text-[#6c3fee] px-2 py-0.5 rounded-full">
                  Echantillon
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-[#9ca3af] hover:text-red-600 transition-colors shrink-0 p-1 -m-1"
            aria-label="Supprimer"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Qty + Price */}
        <div className="flex items-center justify-between gap-3 mt-2.5">
          <div className="inline-flex items-center bg-[#f7f7f8] rounded-full h-8 text-[12px] font-semibold">
            <button
              type="button"
              onClick={() => onQty(item.qty - 1)}
              disabled={item.qty <= 1}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#ebebed] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Diminuer"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-2 min-w-[24px] text-center">{item.qty}</span>
            <button
              type="button"
              onClick={() => onQty(item.qty + 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#ebebed] transition-colors"
              aria-label="Augmenter"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <div className="text-right">
            <p className="text-[13px] font-semibold leading-none">
              {(item.pdaUnit * item.qty).toFixed(2)} EUR
            </p>
            <p className="text-[10px] text-green-700 font-medium mt-0.5">
              Marge : +{((item.pdvcUnit - item.pdaUnit) * item.qty).toFixed(2)} EUR
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <div className="w-20 h-20 rounded-full bg-[#faf5ed] flex items-center justify-center mb-5">
        <ShoppingBag className="h-8 w-8 text-[#9ca3af]" />
      </div>
      <h3 className="text-[18px] font-semibold mb-2">Votre panier est vide</h3>
      <p className="text-[13px] text-[#4d4f56] mb-8 max-w-[260px] leading-[1.5]">
        Ajoutez des produits CBD sous marque blanche pour voir apparaitre votre
        marge potentielle en temps reel.
      </p>
      <Link href="/catalog" onClick={onClose} className="w-full max-w-xs">
        <Button className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]">
          Explorer le catalogue
        </Button>
      </Link>
    </div>
  );
}
