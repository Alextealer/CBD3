"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartTrigger({ className = "" }: { className?: string }) {
  const { count, setOpen } = useCart();
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={`relative w-10 h-10 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center transition-colors ${className}`}
      aria-label={`Panier (${count})`}
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
