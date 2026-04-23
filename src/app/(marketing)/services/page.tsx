"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Brush,
  Tag,
  ArrowRight,
  ArrowLeft,
  Check,
  Minus,
  Plus,
  Sparkles,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  title: string;
  price: number; // EUR
  highlight?: boolean;
  description?: string;
};

const services: Service[] = [
  {
    id: "plan-dropshipping",
    title: "Plan Dropshipping -15%",
    price: 29,
    highlight: true,
    description:
      "Economisez 15% sur toutes vos commandes dropshipping pendant 1 mois. Passez commande, attendez la confirmation dans votre dashboard sous 48 h et profitez d'une grosse remise tout de suite.",
  },
  {
    id: "tech-design",
    title: "Customisation technique",
    price: 249,
    description:
      "Notre studio retravaille votre fichier existant aux bonnes cotes, calages et profils d'impression. Pret pour la fabrication.",
  },
  {
    id: "one-adapt",
    title: "Adaptation de design",
    price: 39,
    description:
      "Une adaptation de votre design pour un autre format (flacon 10 ml to 30 ml, pot a sachet, etc.).",
  },
  {
    id: "concept",
    title: "Concept de design produit",
    price: 149,
    description:
      "Un concept design exclusif (etiquette + coffret) cree par notre equipe a partir de votre brief.",
  },
  {
    id: "starter",
    title: "Starter Pack design",
    price: 349,
    description:
      "2 concepts + 5 adaptations sur la gamme de votre choix. Le meilleur rapport qualite/prix pour demarrer.",
  },
  {
    id: "custom-fragrance",
    title: "Produit a fragrance personnalisee",
    price: 2900,
    description:
      "Developpement olfactif sur mesure pour un produit existant (huile de massage, baume corps, creme, etc.).",
  },
  {
    id: "custom-fragrance-ingredients",
    title: "Fragrance + ingredients actifs sur mesure",
    price: 3500,
    description:
      "Formulation semi-custom : vous choisissez un actif signature et nous l'integrons dans une base existante.",
  },
  {
    id: "full-custom",
    title: "Formulation complete & packaging",
    price: 6900,
    description:
      "Un produit 100% exclusif — formule, contenant, packaging, mentions, COA — developpe de zero avec notre R&D.",
  },
];

const steps = [
  {
    icon: ShoppingCart,
    n: "01",
    title: "Reservez votre service",
    text: "Ajoutez le service au panier et remplissez le brief en ligne (logo, inspirations, moodboard).",
  },
  {
    icon: Brush,
    n: "02",
    title: "On cree vos concepts",
    text: "Notre equipe design livre 2 concepts et jusqu'a 5 adaptations en 5 a 10 jours ouvres.",
  },
  {
    icon: Tag,
    n: "03",
    title: "On imprime, on expedie",
    text: "Valide le bon a tirer, on lance la fabrication on demand, on livre chez vous ou votre client.",
  },
];

const showcase = [
  { label: "Serum peptides", bg: "bg-[#e8d5d0]" },
  { label: "Huile 10%", bg: "bg-[#cfe5f3]" },
  { label: "Creme nuit", bg: "bg-[#f3dfe6]" },
  { label: "Coffret luxe", bg: "bg-[#1a1a1a] text-white" },
  { label: "Baume corps", bg: "bg-[#e3d4ff]" },
  { label: "Huile visage", bg: "bg-[#ece4d8]" },
];

export default function ServicesPage() {
  const [qty, setQty] = useState<Record<string, number>>(() =>
    Object.fromEntries(services.map((s) => [s.id, 1])),
  );

  function add(id: string) {
    setQty((p) => ({ ...p, [id]: (p[id] ?? 1) + 1 }));
  }
  function sub(id: string) {
    setQty((p) => ({ ...p, [id]: Math.max(1, (p[id] ?? 1) - 1) }));
  }

  const [showcaseIdx, setShowcaseIdx] = useState(0);
  function next() {
    setShowcaseIdx((i) => (i + 1) % showcase.length);
  }
  function prev() {
    setShowcaseIdx((i) => (i - 1 + showcase.length) % showcase.length);
  }
  const visible = [
    showcase[(showcaseIdx - 2 + showcase.length) % showcase.length],
    showcase[(showcaseIdx - 1 + showcase.length) % showcase.length],
    showcase[showcaseIdx],
    showcase[(showcaseIdx + 1) % showcase.length],
    showcase[(showcaseIdx + 2) % showcase.length],
  ];

  return (
    <>
      {/* =================== HERO =================== */}
      <section className="pt-16 pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Montrez-nous votre vision, on designe vos produits CBD
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[500px]">
              Lancez votre marque CBD ou developpez celle qui existe avec des
              produits certifies, fabriques en UE. Notre studio design s&apos;occupe
              de l&apos;etiquette, du coffret et du rendu 3D pour vous.
            </p>
            <div className="mt-9 flex items-center gap-3 flex-wrap">
              <Link href="#services">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Acheter maintenant
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  Centre d&apos;aide
                </Button>
              </Link>
            </div>
          </div>

          {/* visual composition */}
          <div className="relative h-[420px] lg:h-[480px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 3 stacked cards */}
              <div className="relative w-[260px] h-[340px]">
                <div className="absolute -left-8 top-10 w-[160px] h-[280px] rounded-[1.5rem] bg-gradient-to-br from-[#ffb39b] via-[#f8b6d6] to-[#c2b6ff] rotate-[-14deg] shadow-xl" />
                <div className="absolute left-4 top-4 w-[180px] h-[300px] rounded-[1.5rem] bg-gradient-to-br from-[#cbeff2] to-[#e8d5d0] rotate-[6deg] shadow-xl flex flex-col items-center justify-end pb-6">
                  <div className="text-center">
                    <p className="text-[28px] font-black tracking-[-0.04em] leading-none">SOL</p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mt-1.5">
                      Caffeine Gel
                    </p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                      Booster
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating pricing card */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-white rounded-full px-5 py-3 flex items-center gap-3 shadow-xl">
              <span className="w-6 h-6 rounded-full bg-[#6c3fee] flex items-center justify-center">
                <Brush className="h-3 w-3" />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider">
                Starter pack design
              </span>
            </div>

            {/* floating badges */}
            <div className="absolute top-[22%] right-0 bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-[11px] font-semibold">5 produits inclus</span>
            </div>
            <div className="absolute bottom-[22%] left-2 bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-[11px] font-semibold">2 concepts</span>
            </div>
            <div className="absolute bottom-[8%] right-4 bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              <span className="text-[11px] font-semibold">5 adaptations</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================== 3 STEPS =================== */}
      <section data-reveal className="pb-8">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-5">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="bg-[#fafafa] rounded-[1.5rem] p-10 text-center border border-[#f1f1f3]"
              >
                <div className="w-14 h-14 rounded-full bg-foreground text-background mx-auto flex items-center justify-center mb-6">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4d4f56] mb-3">
                  Etape {s.n}
                </p>
                <h3 className="text-[18px] font-semibold leading-snug">{s.title}</h3>
                <p className="text-[13px] text-[#4d4f56] mt-3 leading-[1.6]">{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================== LEARN MORE BANNER =================== */}
      <section data-reveal className="pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f7f7f8] py-10 px-8 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e3d4ff] to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-[18px] font-medium text-foreground">
                Vous voulez en savoir plus ? Notre Centre d&apos;aide repond a toutes
                vos questions.
              </h3>
              <Link href="/faq" className="inline-block mt-5">
                <Button className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================== SERVICES LIST =================== */}
      <section id="services" data-reveal className="py-8">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight max-w-[560px]">
            Obtenez votre service design personnalise
          </h2>
        </div>

        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 mt-10">
          <div className="bg-[#f7f7f8] rounded-[2rem] p-6 lg:p-10 grid lg:grid-cols-[420px_1fr] gap-8">
            {/* LEFT — service list */}
            <div className="space-y-4 relative">
              {/* Highlighted plan */}
              {services[0] && (
                <ServiceCard
                  service={services[0]}
                  qty={qty[services[0].id] ?? 1}
                  onAdd={() => add(services[0].id)}
                  onSub={() => sub(services[0].id)}
                  onCart={() => add(services[0].id)}
                />
              )}

              {/* OR divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-[#d4d4d8]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
                  ou
                </span>
                <div className="flex-1 h-px bg-[#d4d4d8]" />
              </div>

              {/* Other services */}
              {services.slice(1).map((s) => (
                <ServiceCard
                  key={s.id}
                  service={s}
                  qty={qty[s.id] ?? 1}
                  onAdd={() => add(s.id)}
                  onSub={() => sub(s.id)}
                  onCart={() => add(s.id)}
                />
              ))}

              <p className="text-[11px] text-center text-[#9ca3af] pt-4">
                Ces services ne sont pas remboursables apres validation du brief.
              </p>
            </div>

            {/* RIGHT — product mockup */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
                {/* main product */}
                <div className="relative w-[160px] h-[380px] rounded-[2rem] bg-gradient-to-b from-white via-white to-[#ededed] shadow-xl flex flex-col items-center justify-end pb-10 border border-[#f1f1f3]">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-10 bg-[#f5f5f5] rounded-lg" />
                  <p className="text-[26px] font-bold tracking-[-0.03em] rotate-90 origin-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Tenebra
                  </p>
                </div>

                {/* floating design tools */}
                <div className="absolute top-4 right-10 bg-white rounded-xl p-2 shadow-lg flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md border-2 border-[#6c3fee] border-dashed" />
                  <ArrowRight className="h-3 w-3 text-[#6c3fee]" />
                </div>

                <div className="absolute top-1/3 right-0 bg-white rounded-xl p-3 shadow-lg">
                  <div className="w-12 h-8 bg-[#f5f5f5] rounded-md flex items-center justify-center text-[14px] font-bold">
                    T
                  </div>
                </div>

                <div className="absolute bottom-24 left-4 bg-white rounded-full p-2 shadow-lg flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-white border-2 border-[#1a1a1a]" />
                  <span className="w-4 h-4 rounded-full bg-[#6c3fee]" />
                  <span className="w-4 h-4 rounded-full bg-[#1a1a1a]" />
                </div>

                <div className="absolute bottom-10 right-6 bg-white rounded-2xl px-3 py-2 shadow-lg text-center">
                  <p className="text-[9px] font-bold uppercase tracking-wider">
                    Votre
                    <br />
                    Logo
                  </p>
                  <div className="flex justify-center mt-1">
                    <ArrowRight className="h-3 w-3 text-[#6c3fee] rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== BRAND SHOWCASE =================== */}
      <section data-reveal className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight text-center mb-12">
            Votre marque &mdash; votre vision.
          </h2>

          <div className="relative">
            {/* carousel */}
            <div className="flex items-center justify-center gap-4">
              {visible.map((item, i) => {
                const isCenter = i === 2;
                return (
                  <div
                    key={`${item.label}-${i}`}
                    className={`rounded-[1.25rem] overflow-hidden shrink-0 transition-all duration-500 ${item.bg} ${
                      isCenter
                        ? "w-[320px] h-[420px]"
                        : "w-[180px] h-[240px] opacity-70"
                    }`}
                  >
                    <div className="w-full h-full flex items-end justify-center p-5">
                      <p
                        className={`text-[13px] font-semibold ${
                          item.bg.includes("text-white") ? "text-white" : "text-foreground"
                        }`}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:opacity-90"
                aria-label="Precedent"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:opacity-90"
                aria-label="Suivant"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-[14px] font-medium text-[#4d4f56]">
                {showcase[showcaseIdx].label}
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/catalog">
                <Button className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Tous les produits
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================== BRIEF CTA =================== */}
      <section className="pb-24">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="rounded-[2rem] bg-foreground text-background p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#6c3fee]/30 rounded-full blur-3xl" />
            <div className="relative max-w-2xl">
              <Sparkles className="h-6 w-6 text-[#a488ff] mb-4" />
              <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
                Pas sur du service a choisir ?
              </h2>
              <p className="mt-4 text-[14px] text-background/70 leading-[1.7] max-w-xl">
                Dites-nous votre brief en 2 minutes et un design manager vous
                rappelle sous 24 h avec la meilleure option pour votre budget et
                vos delais.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="#services">
                  <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90">
                    Voir les services
                  </Button>
                </Link>
                <Link href="mailto:design@unsigned.fr">
                  <Button
                    variant="outline"
                    className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider border-background/20 text-background hover:bg-background/10"
                  >
                    Parler a un design manager
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Subcomponent
   ============================================================ */

function ServiceCard({
  service,
  qty,
  onAdd,
  onSub,
  onCart,
}: {
  service: Service;
  qty: number;
  onAdd: () => void;
  onSub: () => void;
  onCart: () => void;
}) {
  return (
    <div
      className={`rounded-2xl ${
        service.highlight ? "bg-[#1a1a1a] text-white" : "bg-white border border-[#f1f1f3]"
      } p-5`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={`text-[14px] font-semibold ${service.highlight ? "text-white" : ""}`}>
              {service.title}
            </h3>
            {service.highlight && (
              <span className="inline-flex items-center gap-1 bg-[#6c3fee] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                <Percent className="h-2.5 w-2.5" />
                Populaire
              </span>
            )}
          </div>
          <p
            className={`text-[20px] font-semibold mt-1 ${
              service.highlight ? "text-white" : ""
            }`}
          >
            {service.price.toFixed(2)} EUR
          </p>
        </div>

        {/* qty + add — only for non-highlighted rows */}
        {!service.highlight ? (
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center h-9 rounded-full border border-[#f1f1f3] bg-white text-[12px] font-semibold">
              <button
                type="button"
                onClick={onSub}
                disabled={qty <= 1}
                className="w-8 h-full rounded-l-full hover:bg-[#f7f7f8] flex items-center justify-center disabled:opacity-30"
                aria-label="Diminuer"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-7 text-center">{qty}</span>
              <button
                type="button"
                onClick={onAdd}
                className="w-8 h-full rounded-r-full hover:bg-[#f7f7f8] flex items-center justify-center"
                aria-label="Augmenter"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
            <Button
              onClick={onCart}
              className="h-9 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white"
            >
              Ajouter
            </Button>
          </div>
        ) : (
          <Button
            onClick={onCart}
            className="h-9 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white shrink-0"
          >
            Activer
            <Plus className="h-3 w-3 ml-1" />
          </Button>
        )}
      </div>

      {service.description && (
        <p
          className={`text-[12px] leading-[1.6] mt-3 pt-3 border-t ${
            service.highlight ? "text-white/70 border-white/10" : "text-[#4d4f56] border-[#f1f1f3]"
          }`}
        >
          {service.description}
        </p>
      )}
    </div>
  );
}
