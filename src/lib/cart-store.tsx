"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;              // unique: productSlug + format + kind
  productName: string;
  categoryName: string;
  format: string;          // "10 g" or "50 u."
  pdaUnit: number;
  pdvcUnit: number;
  qty: number;             // number of packs (of `format`)
  kind: "sample" | "order";
  image?: string;
};

type Ctx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  // computed
  subtotalPda: number;
  subtotalPdvc: number;
  margin: number;
  marginPct: number;
  vat: number;
  totalTtc: number;
  count: number;
};

const CartContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "Unsigned:cart:v1";
const FREE_SHIPPING_THRESHOLD = 500;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const addItem = useCallback<Ctx["addItem"]>((item) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + (item.qty ?? 1) } : p));
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
    setOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const computed = useMemo(() => {
    const subtotalPda = items.reduce((s, i) => s + i.pdaUnit * i.qty, 0);
    const subtotalPdvc = items.reduce((s, i) => s + i.pdvcUnit * i.qty, 0);
    const margin = subtotalPdvc - subtotalPda;
    const marginPct = subtotalPdvc > 0 ? Math.round((margin / subtotalPdvc) * 100) : 0;
    const vat = +(subtotalPda * 0.2).toFixed(2);
    const totalTtc = +(subtotalPda + vat).toFixed(2);
    const count = items.reduce((s, i) => s + i.qty, 0);
    return { subtotalPda, subtotalPdvc, margin, marginPct, vat, totalTtc, count };
  }, [items]);

  const value: Ctx = {
    items,
    open,
    setOpen,
    addItem,
    removeItem,
    updateQty,
    clear,
    ...computed,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export const CART_FREE_SHIPPING_THRESHOLD = FREE_SHIPPING_THRESHOLD;
