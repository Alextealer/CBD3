import { Store, Zap, RefreshCw, Globe, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../../dashboard-header";

export const dynamic = "force-dynamic";

const perks = [
  {
    icon: Zap,
    title: "Synchro instantanee",
    desc: "Vos produits Unsigned poussent automatiquement dans votre catalogue.",
  },
  {
    icon: RefreshCw,
    title: "Commandes auto",
    desc: "Chaque commande client declenche la fabrication on demand et l'expedition.",
  },
  {
    icon: Globe,
    title: "Multi-boutiques",
    desc: "Connectez autant de boutiques que vous voulez sur une meme enseigne.",
  },
];

const providers = [
  {
    name: "Shopify",
    desc: "L'integration la plus rapide — cliquez et c'est connecte.",
    bg: "bg-[#95bf47]",
    initial: "S",
    fg: "text-white",
  },
  {
    name: "WooCommerce",
    desc: "Plugin officiel pour WordPress & WooCommerce.",
    bg: "bg-[#7f54b3]",
    initial: "Wo",
    fg: "text-white",
  },
  {
    name: "API / Custom",
    desc: "Notre API REST pour tout autre site ou marketplace.",
    bg: "bg-[#1a1a1a]",
    initial: "{ }",
    fg: "text-white",
  },
];

export default function StoresPage() {
  return (
    <div className="px-10 py-8 max-w-[1120px]">
      <DashboardHeader title="Mes boutiques" />

      {/* EMPTY STATE */}
      <section
        data-reveal
        className="bg-[#f7f7f8] rounded-[1.5rem] p-10 text-center mb-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-5">
          <Store className="h-7 w-7 text-[#6c3fee]" />
        </div>
        <h2 className="text-[24px] font-semibold tracking-[-0.02em] mb-2">
          Connectez votre premiere boutique
        </h2>
        <p className="text-[13px] text-[#4d4f56] max-w-md mx-auto mb-6 leading-snug">
          Branchez Shopify, WooCommerce ou notre API pour que vos produits CBD en
          marque blanche soient pousses automatiquement et que chaque commande
          declenche la fabrication.
        </p>
        <Button className="rounded-full h-11 px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
          <Plus className="h-4 w-4 mr-1.5" />
          Ajouter une boutique
        </Button>
      </section>

      {/* PERKS */}
      <section data-reveal className="grid md:grid-cols-3 gap-4 mb-10">
        {perks.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f1eefe] flex items-center justify-center mb-4">
                <Icon className="h-4 w-4 text-[#6c3fee]" />
              </div>
              <h3 className="text-[15px] font-semibold mb-1.5">{p.title}</h3>
              <p className="text-[12px] text-[#4d4f56] leading-snug">{p.desc}</p>
            </div>
          );
        })}
      </section>

      {/* PROVIDERS */}
      <section data-reveal>
        <h2 className="text-[18px] font-semibold mb-4">Plateformes compatibles</h2>
        <div className="space-y-3">
          {providers.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-4 flex items-center gap-4"
            >
              <div className={`${p.bg} ${p.fg} w-14 h-14 rounded-xl flex items-center justify-center font-bold text-[22px]`}>
                {p.initial}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold">{p.name}</h3>
                <p className="text-[12px] text-[#4d4f56]">{p.desc}</p>
              </div>
              <Button
                variant="outline"
                className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider"
              >
                Connecter
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
