"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShoppingCart, Brush, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Step = "auth" | "options";

import { useCart } from "@/lib/cart-store";

interface Props {
  open: boolean;
  onClose: () => void;
  productName: string;
  categoryName: string;
  format: string;
  pdaUnit: number;
  pdvcUnit: number;
  pdaTotal: number;
  productSlug: string;
  productImage?: string;
}

export function SampleOrderModal({
  open,
  onClose,
  productName,
  categoryName,
  format,
  pdaUnit,
  pdvcUnit,
  pdaTotal,
  productSlug,
  productImage,
}: Props) {
  const { addItem } = useCart();
  const [step, setStep] = useState<Step>("auth");
  const [email, setEmail] = useState("");

  // Reset step every time the modal opens
  useEffect(() => {
    if (open) setStep("auth");
  }, [open]);

  // Close on escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[1.5rem] shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e7] flex items-center justify-center z-10 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        {step === "auth" ? (
          // ============ STEP 1 — AUTH GATE ============
          <div className="px-8 py-10 lg:px-14 lg:py-14 text-center">
            <div className="inline-flex w-11 h-11 bg-foreground text-background rounded-xl items-center justify-center mb-5">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] leading-[1.1] mb-3">
              Creez votre compte
            </h2>
            <p className="text-[14px] text-[#4d4f56] mb-8 max-w-md mx-auto">
              Pour commander un echantillon de <strong>{productName}</strong>,
              connectez-vous ou creez un compte gratuit en 30 secondes.
            </p>

            {/* Social auth */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <button
                type="button"
                className="w-11 h-11 rounded-full border border-[#e5e5e7] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-colors"
                aria-label="Continuer avec Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1877F2]" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                type="button"
                className="w-11 h-11 rounded-full border border-[#e5e5e7] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-colors"
                aria-label="Continuer avec Google"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 max-w-xs mx-auto mb-6">
              <div className="flex-1 h-px bg-[#e5e5e7]" />
              <span className="text-[12px] text-[#9ca3af]">ou</span>
              <div className="flex-1 h-px bg-[#e5e5e7]" />
            </div>

            {/* Email form — stub: just moves to next step */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("options");
              }}
              className="max-w-sm mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full h-[52px] rounded-full border border-[#e5e5e7] px-5 text-[14px] mb-3 focus:outline-none focus:border-foreground"
              />
              <Button
                type="submit"
                className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]"
              >
                Continuer avec cet email
              </Button>
            </form>

            <p className="text-[12px] text-[#4d4f56] mt-5">
              Deja un compte ? <Link href="/profile" className="font-semibold underline">Se connecter</Link>
            </p>
          </div>
        ) : (
          // ============ STEP 2 — OPTIONS ============
          <>
            <div className="px-8 py-5 border-b border-[#f1f1f3] flex items-center justify-between pr-16">
              <h2 className="text-[18px] font-semibold">Options de commande</h2>
              <span className="text-[11px] font-medium text-[#4d4f56] hidden sm:block">
                {productName} &middot; {format}
              </span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#f1f1f3]">
              {/* Option 1 — Design */}
              <div className="p-8 lg:p-10">
                <div className="w-11 h-11 rounded-xl bg-[#f1eefe] flex items-center justify-center mb-5">
                  <Brush className="h-5 w-5 text-[#6c3fee]" />
                </div>
                <h3 className="text-[18px] font-semibold leading-snug mb-3">
                  Personnaliser le design &amp; telecharger les templates
                </h3>
                <p className="text-[13px] text-[#4d4f56] leading-[1.6] mb-8">
                  Utilisez notre studio pour appliquer votre marque sur l&apos;etiquette
                  et le packaging. Design 100% personnalise.
                </p>
                <Link href="/profile">
                  <Button
                    className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px] bg-[#6c3fee] text-white hover:bg-[#5a2fd8]"
                  >
                    <Brush className="h-4 w-4 mr-2" />
                    Ajouter un design
                  </Button>
                </Link>
              </div>

              {/* Option 2 — Preset */}
              <div className="p-8 lg:p-10">
                <div className="w-11 h-11 rounded-xl bg-[#f7f7f8] flex items-center justify-center mb-5">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-semibold leading-snug mb-3">
                  Commander un echantillon avec notre design preset
                </h3>
                <p className="text-[13px] text-[#4d4f56] leading-[1.6] mb-8">
                  Pour un checkout plus rapide. L&apos;echantillon en taille reelle
                  est imprime avec notre design par defaut (sans vos assets).
                </p>
                <Button
                  onClick={() => {
                    addItem({
                      id: `${productSlug}::${format}::sample`,
                      productName,
                      categoryName,
                      format,
                      pdaUnit,
                      pdvcUnit,
                      image: productImage,
                      kind: "sample",
                    });
                    onClose();
                  }}
                  className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
