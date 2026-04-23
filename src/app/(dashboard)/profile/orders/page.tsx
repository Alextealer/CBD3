import { AlertCircle, Search, ArrowDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../../dashboard-header";

export const dynamic = "force-dynamic";

const TABS = ["Tous statuts", "Commandes manuelles", "Unsigned Store"] as const;
const COLS = ["Statut", "ID commande", "Date", "Client", "Suivi", "Total"] as const;

// Sample rows for demo
const rows = [
  {
    status: "En cours",
    color: "bg-[#e3d4ff] text-[#6c3fee]",
    id: "#CBD-08412",
    date: "19.04.2026",
    customer: "Your Store CBD",
    tracking: "FR0012345",
    total: "128,40 EUR",
  },
  {
    status: "Expedie",
    color: "bg-[#d4e4d8] text-[#3d6b1e]",
    id: "#CBD-08399",
    date: "17.04.2026",
    customer: "Your Store CBD",
    tracking: "FR0012298",
    total: "68,00 EUR",
  },
  {
    status: "En attente",
    color: "bg-[#faf0d4] text-[#8b6914]",
    id: "#CBD-08310",
    date: "12.04.2026",
    customer: "Commande manuelle",
    tracking: "—",
    total: "12,48 EUR",
  },
];

export default function OrdersPage() {
  return (
    <div className="px-10 py-8 max-w-[1320px]">
      <DashboardHeader title="Commandes" />

      {/* TABS */}
      <div data-reveal className="flex items-center gap-2 mb-5">
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

      {/* ALERT */}
      <div
        data-reveal
        className="bg-[#fff3c2] border border-[#f5d57e] rounded-2xl px-5 py-4 flex items-center gap-3 mb-5"
      >
        <AlertCircle className="h-4 w-4 shrink-0 text-[#8b6914]" />
        <p className="flex-1 text-[13px]">
          <strong>Attention !</strong> Ajoutez un moyen de paiement pour que nous
          calculions la TVA sur les commandes entrantes de votre boutique
          &quot;Unsigned Store&quot;.
        </p>
        <Button className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider shrink-0">
          Ajouter un moyen de paiement
        </Button>
      </div>

      {/* SEARCH + SORT */}
      <div data-reveal className="flex items-center gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 -translate-y-1/2 left-4 h-3.5 w-3.5 text-[#9ca3af]" />
          <input
            type="search"
            placeholder="Chercher un ID de commande..."
            className="w-full h-11 pl-10 pr-4 rounded-full bg-white border border-[#f1f1f3] text-[13px] focus:outline-none focus:border-foreground"
          />
        </div>
        <button
          type="button"
          className="h-11 px-4 rounded-full bg-white border border-[#f1f1f3] hover:bg-[#f7f7f8] flex items-center gap-1.5 text-[12px] font-semibold"
        >
          <ArrowDown className="h-3 w-3" />
          Trier par
        </button>
        <button
          type="button"
          className="h-11 px-4 rounded-full bg-white border border-[#f1f1f3] hover:bg-[#f7f7f8] flex items-center gap-1.5 text-[12px] font-semibold"
        >
          <SlidersHorizontal className="h-3 w-3" />
          Filtres
        </button>
      </div>

      {/* TABLE */}
      <div data-reveal className="bg-white rounded-[1.25rem] border border-[#f1f1f3] overflow-hidden">
        <div className="grid grid-cols-[140px_160px_120px_1fr_140px_120px] gap-4 px-5 py-4 bg-[#fafafa] text-[11px] font-bold uppercase tracking-wider text-[#4d4f56]">
          {COLS.map((c) => (
            <div key={c}>{c}</div>
          ))}
        </div>
        {rows.length === 0 ? (
          <div className="px-5 py-14 text-center text-[13px] text-[#9ca3af]">
            Aucune commande pour l&apos;instant.
          </div>
        ) : (
          rows.map((r, i) => (
            <div
              key={r.id}
              className={`grid grid-cols-[140px_160px_120px_1fr_140px_120px] gap-4 px-5 py-4 items-center text-[13px] ${
                i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
              } border-t border-[#f1f1f3]`}
            >
              <div>
                <span
                  className={`inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full ${r.color}`}
                >
                  {r.status}
                </span>
              </div>
              <div className="font-semibold">{r.id}</div>
              <div className="text-[#4d4f56]">{r.date}</div>
              <div>{r.customer}</div>
              <div className="text-[#4d4f56]">{r.tracking}</div>
              <div className="font-semibold">{r.total}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
