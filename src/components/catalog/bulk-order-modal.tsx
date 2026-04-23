"use client";

import { useEffect, useState } from "react";
import {
  X,
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
  productName: string;
  categoryName: string;
  /** Unit the quote is expressed in (kg / u.) */
  unitLabel: string;
}

export function BulkOrderModal({
  open,
  onClose,
  productName,
  categoryName,
  unitLabel,
}: Props) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: "",
    email: "",
    phone: "",
    qty: "1",
    message: "",
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    // Reset form on open
    setSent(false);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[1.5rem] shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e7] flex items-center justify-center z-10 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="px-8 py-14 text-center">
            <div className="inline-flex w-14 h-14 rounded-full bg-green-50 text-green-600 items-center justify-center mb-5">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] mb-2">
              Demande envoyee !
            </h2>
            <p className="text-[14px] text-[#4d4f56] max-w-sm mx-auto mb-6">
              Notre equipe B2B vous contacte sous <strong>24h ouvrees</strong>
              &nbsp;avec un devis personnalise pour <strong>{productName}</strong>.
            </p>
            <Button
              onClick={onClose}
              className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]"
            >
              Fermer
            </Button>
          </div>
        ) : (
          <>
            {/* Header — dark wholesale accent */}
            <div className="relative bg-[#faf5ed] px-8 pt-8 pb-6 border-b border-[#ede4cc]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-1">
                    Service B2B dedie &middot; 500 {unitLabel}+
                  </span>
                  <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.02em]">
                    Demande de devis gros volume
                  </h2>
                  <p className="text-[13px] text-[#4d4f56] mt-1">
                    {productName} &middot; {categoryName}
                  </p>
                </div>
              </div>

              {/* Why B2B */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  { icon: FileText, label: "Contrat sur mesure" },
                  { icon: Truck, label: "Logistique dediee" },
                  { icon: ShieldCheck, label: "COA par lot" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-green-700" />
                    <span className="text-[10px] font-semibold truncate">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info strip */}
            <div className="px-8 pt-5 text-[12px] text-[#4d4f56] leading-snug">
              Au-dela de <strong>500 {unitLabel}</strong>, votre commande sort du
              parcours e-commerce automatise (Shopify connecte) et passe par notre
              cellule B2B : tarifs negocies, paiement par virement, livraison sur palette.
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire real endpoint
                setTimeout(() => setSent(true), 150);
              }}
              className="px-8 py-6 grid grid-cols-2 gap-3"
            >
              <Field label="Entreprise" required>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="cbd-input"
                  placeholder="Votre enseigne"
                />
              </Field>
              <Field label={`Quantite estimee (${unitLabel})`} required>
                <input
                  required
                  type="number"
                  min={500}
                  step={100}
                  value={form.qty}
                  onChange={(e) => setForm((f) => ({ ...f, qty: e.target.value }))}
                  className="cbd-input"
                  placeholder="500"
                />
              </Field>
              <Field label="Email pro" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="cbd-input"
                  placeholder="contact@votreboite.com"
                />
              </Field>
              <Field label="Telephone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="cbd-input"
                  placeholder="+33 6 ..."
                />
              </Field>
              <Field label="Message (optionnel)" full>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="cbd-input h-20 py-3 rounded-2xl resize-none"
                  placeholder="Delais souhaites, packaging, specificites..."
                />
              </Field>

              <div className="col-span-2 flex items-center gap-3 pt-1">
                <Button
                  type="submit"
                  className="flex-1 rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]"
                >
                  Envoyer la demande de devis
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[52px] px-6"
                >
                  Annuler
                </Button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* shared input style */}
      <style jsx>{`
        .cbd-input {
          width: 100%;
          height: 44px;
          border-radius: 9999px;
          border: 1px solid #e5e5e7;
          padding: 0 18px;
          font-size: 13px;
          background: white;
          outline: none;
          transition: border-color 0.15s;
        }
        .cbd-input:focus {
          border-color: var(--foreground, #0a0a0a);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
  required,
  full,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "col-span-2" : ""}`}>
      <span className="text-[11px] font-semibold text-[#4d4f56]">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
