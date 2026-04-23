"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Brush } from "lucide-react";
import { SampleOrderModal } from "./sample-order-modal";
import { BulkOrderModal } from "./bulk-order-modal";
import { ProductImage } from "./product-image";

export type Tier = {
  format: string;
  qty: number;
  pdaUnit: number;
  pdvcUnit: number;
  pdaTotal: number;
  pdvcTotal: number;
  discount: number;
  margin: number;
};

interface Props {
  tiers: Tier[];
  unitShort: string;
  unitLabel: string;
  weightBased: boolean;
  productName: string;
  productImage?: string;
  productSlug: string;
  categoryName: string;
}

export function FormatSelector({
  tiers,
  unitShort,
  unitLabel,
  weightBased,
  productName,
  productImage,
  productSlug,
  categoryName,
}: Props) {
  const [selected, setSelected] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [bulkOpen, setBulkOpen] = useState(false);
  const t = tiers[selected];
  const bulkUnit = weightBased ? "g" : "u.";

  return (
    <div className="bg-[#faf5ed] rounded-2xl p-5 mb-6">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4d4f56]">
          {weightBased ? "Choisissez un format" : "Choisissez une quantite"}
        </span>
        <span className="text-[11px] font-bold text-green-700 uppercase tracking-wider">
          Jusqu&apos;a {tiers[tiers.length - 1].discount}% en volume
        </span>
      </div>

      {/* Format pills — clickable */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-5">
        {tiers.map((tier, i) => {
          const active = selected === i;
          return (
            <button
              key={tier.format}
              type="button"
              onClick={() => setSelected(i)}
              className={`relative rounded-xl overflow-hidden text-center transition-all ${
                active
                  ? "ring-2 ring-green-600 ring-offset-2 ring-offset-[#faf5ed] shadow-md scale-[1.02]"
                  : "ring-1 ring-[#ede4cc] hover:ring-[#d9caa0]"
              }`}
            >
              {tier.discount > 0 && (
                <span
                  className={`absolute top-1.5 right-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10 ${
                    active
                      ? "bg-green-600 text-white"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  -{tier.discount}%
                </span>
              )}

              {/* Always gray bg for the image so mix-blend stays clean */}
              <ProductImage
                src={productImage}
                alt={productName}
                variant="pill"
                className="rounded-none"
              />

              {/* Label footer — stays light in all states, just accent on active */}
              <div className="px-2 py-2 bg-white text-foreground">
                <span className="block text-[14px] font-bold leading-none mb-0.5">
                  {tier.format}
                </span>
                <span
                  className={`block text-[10px] font-medium ${
                    active ? "text-green-700 font-semibold" : "text-[#9ca3af]"
                  }`}
                >
                  {tier.pdaUnit.toFixed(2)}&thinsp;EUR {unitShort}
                </span>
              </div>
            </button>
          );
        })}

      </div>

      {/* Detail of selected format */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ede4cc]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
            PDA &middot; Votre prix d&apos;achat
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold tracking-[-0.02em]">
              {t.pdaTotal.toFixed(2)}
            </span>
            <span className="text-[14px] font-medium">EUR</span>
          </div>
          <p className="text-[11px] text-[#4d4f56] mt-0.5">
            soit {t.pdaUnit.toFixed(2)}&thinsp;EUR {unitShort} HT
          </p>
        </div>
        <div className="border-l border-[#ede4cc] pl-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1">
            PDVC &middot; Prix conseille client
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold tracking-[-0.02em] text-green-800">
              {t.pdvcTotal.toFixed(2)}
            </span>
            <span className="text-[14px] font-medium text-green-800">EUR</span>
          </div>
          <p className="text-[11px] text-[#4d4f56] mt-0.5">
            soit {t.pdvcUnit.toFixed(2)}&thinsp;EUR {unitShort} TTC
          </p>
        </div>
      </div>

      {/* Margin highlight */}
      <div className="mt-4 flex items-center justify-between bg-white rounded-xl px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full" />
          <span className="text-[12px] font-medium text-[#4d4f56]">Marge nette sur ce format</span>
        </div>
        <span className="text-[15px] font-bold text-green-700">
          +{(t.pdvcTotal - t.pdaTotal).toFixed(2)} EUR
          <span className="text-[11px] font-semibold ml-1.5 bg-green-50 px-1.5 py-0.5 rounded-full">
            {t.margin}%
          </span>
        </span>
      </div>

      {/* CTAs — 2 primary side by side */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Link
          href={`/studio/${productSlug}?format=${encodeURIComponent(t.format)}`}
          className="flex-1 min-w-[180px]"
        >
          <Button
            type="button"
            className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]"
          >
            <Brush className="h-4 w-4 mr-2" />
            Ajouter mon design
          </Button>
        </Link>
        <Button
          type="button"
          variant="outline"
          onClick={() => setModalOpen(true)}
          className="flex-1 min-w-[140px] rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]"
        >
          Echantillon
        </Button>
      </div>

      {/* Bulk order — single button under the 2 CTAs */}
      <button
        type="button"
        onClick={() => setBulkOpen(true)}
        className="group mt-2 w-full flex items-center justify-between gap-3 rounded-full border border-dashed border-[#ede4cc] bg-white/60 hover:bg-white hover:border-[#8b6914]/40 px-4 h-[42px] transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="w-6 h-6 rounded-full bg-[#faf0d4] flex items-center justify-center shrink-0">
            <Building2 className="h-3 w-3 text-[#8b6914]" />
          </span>
          <span className="text-[12px] font-semibold truncate">
            Commande de gros &middot; 500&thinsp;{bulkUnit}+
          </span>
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914] group-hover:underline shrink-0">
          Demander un devis B2B
        </span>
      </button>

      <p className="text-[10px] text-center text-[#9ca3af] mt-3">
        {weightBased
          ? `${tiers.length} formats de ${tiers[0].format} a ${tiers[tiers.length - 1].format} disponibles`
          : `${tiers.length} paliers de ${tiers[0].format} a ${tiers[tiers.length - 1].format}`}
        &nbsp;&middot;&nbsp; {unitLabel} sous votre marque
      </p>

      <SampleOrderModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={productName}
        categoryName={categoryName}
        productSlug={productSlug}
        productImage={productImage}
        format={t.format}
        pdaUnit={t.pdaUnit * t.qty}
        pdvcUnit={t.pdvcUnit * t.qty}
        pdaTotal={t.pdaTotal}
      />
      <BulkOrderModal
        open={bulkOpen}
        onClose={() => setBulkOpen(false)}
        productName={productName}
        categoryName={categoryName}
        unitLabel={bulkUnit}
      />
    </div>
  );
}
