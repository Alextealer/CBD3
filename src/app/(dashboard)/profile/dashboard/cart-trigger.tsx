"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function DashboardCartTrigger() {
  const { count, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="relative w-11 h-11 rounded-full border border-[#f1f1f3] hover:bg-[#f7f7f8] flex items-center justify-center transition-colors"
      aria-label={`Panier (${count})`}
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[#6c3fee] text-white text-[10px] font-bold flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
