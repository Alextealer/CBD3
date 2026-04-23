"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Package,
  Palette,
  Truck,
  ShieldCheck,
  CreditCard,
  Store,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type FaqItem = { q: string; a: string };
type Category = { id: string; label: string; icon: React.ComponentType<{ className?: string }>; items: FaqItem[] };

const categories: Category[] = [
  {
    id: "produits",
    label: "Produits & formules",
    icon: Package,
    items: [
      {
        q: "Quels types de produits CBD proposez-vous ?",
        a: "Notre catalogue inclut fleur (indoor/outdoor/greenhouse), hash, pre roll, huiles sublinguales, extractions (wax, shatter, live resin), cartridges 510, edibles (gummies, chocolat, infusions) et cosmetique CBD. Tous sont formules et fabriques en UE pour repondre aux exigences de qualite et de conformite EU/FR.",
      },
      {
        q: "Puis-je demander une formulation sur mesure ?",
        a: "Oui, notre equipe R&D peut developper une formule exclusive sur demande. Cela concerne principalement les commandes a partir de 2000 unites. Contactez-nous pour un brief produit.",
      },
      {
        q: "Quels sont les taux de CBD disponibles ?",
        a: "Les huiles existent en 5%, 10%, 15%, 20%, 25% et 30%. Les fleurs ont des taux entre 10% et 26%. Les cosmetiques sont doses en mg (de 25mg a 500mg par produit).",
      },
      {
        q: "Proposez-vous des produits broad spectrum ou isolat ?",
        a: "Oui. Spectre complet, broad spectrum (sans THC detectable) et isolat CBD pur sont disponibles selon les produits. Chaque formule est indiquee sur la fiche produit.",
      },
    ],
  },
  {
    id: "personnalisation",
    label: "Design & personnalisation",
    icon: Palette,
    items: [
      {
        q: "Jusqu'ou peut-on personnaliser un produit ?",
        a: "100% du packaging externe : etiquette, couleurs, typographies, sleeve, coffret et inserts. La formule interne reste celle de notre catalogue (sauf formule sur mesure).",
      },
      {
        q: "Qu'est-ce que le Design Studio ?",
        a: "C'est notre outil en ligne gratuit pour uploader votre logo, ajuster les couleurs, ajouter votre texte et visualiser le rendu 3D avant de valider le bon a tirer. Pas besoin d'Illustrator.",
      },
      {
        q: "Puis-je telecharger les templates Illustrator ou Figma ?",
        a: "Oui, depuis votre dashboard vous telechargez les gabarits aux bonnes cotes pour chaque produit. Disponibles en Ai et Figma avec les guides de securite.",
      },
      {
        q: "Proposez-vous un service design pro ?",
        a: "Oui, notre equipe graphique peut creer votre identite de A a Z ou adapter vos visuels existants. Forfait Extras a partir de 390 EUR / gamme.",
      },
    ],
  },
  {
    id: "commandes",
    label: "Commandes & production",
    icon: Store,
    items: [
      {
        q: "Y a-t-il un minimum de commande ?",
        a: "Non. Vous commandez a l'unite pour tester, puis scalez quand vous etes pret. Seul l'achat en gros au-dela de 500 g passe par notre service B2B avec un devis personnalise.",
      },
      {
        q: "Comment fonctionne la fabrication on demand ?",
        a: "Chaque commande declenche une fabrication en flux tendu dans nos ateliers UE. Pas de stock mort, pas de minimum, mais un delai de fabrication de 5 a 10 jours ouvres selon le produit.",
      },
      {
        q: "Quelle est la difference PDA / PDVC ?",
        a: "PDA = votre prix d'achat chez nous. PDVC = prix de vente conseille a vos clients finaux. La difference est votre marge. Les deux sont affiches sur chaque fiche produit pour vous aider a fixer votre prix public.",
      },
      {
        q: "Comment sont calcules les paliers degressifs ?",
        a: "Plus la quantite augmente, plus le PDA unitaire baisse (jusqu'a -35% sur les grammes, -32% sur les unites). Les paliers sont automatiques et visibles sur la grille tarifaire de chaque produit.",
      },
    ],
  },
  {
    id: "livraison",
    label: "Livraison & logistique",
    icon: Truck,
    items: [
      {
        q: "Ou expediez-vous ?",
        a: "Toute l'Union Europeenne + Suisse + Royaume-Uni. Expedition depuis la France metropolitaine par Colissimo, Chronopost ou DHL selon la destination.",
      },
      {
        q: "Proposez-vous le dropshipping ?",
        a: "Oui. Chaque commande de votre boutique Shopify / WooCommerce declenche l'expedition directe au client final, sous votre marque (pas de trace Unsigned sur le colis ni la facture).",
      },
      {
        q: "Combien coute la livraison ?",
        a: "Europe offerte des 500 EUR de commande. En dessous, frais calcules au checkout selon le poids et la destination.",
      },
      {
        q: "Quels sont les delais ?",
        a: "2-5 jours ouvres dans l'UE apres fabrication. Les commandes sont traceables avec un numero de suivi envoye automatiquement.",
      },
    ],
  },
  {
    id: "conformite",
    label: "Conformite & qualite",
    icon: ShieldCheck,
    items: [
      {
        q: "Les produits sont-ils conformes a la reglementation EU / FR ?",
        a: "Oui. Tous nos produits ont un taux de THC < 0,3% (limite EU) et sont fabriques a partir de chanvre certifie UE. L'etiquetage suit les normes CE, INCI et novel food le cas echeant.",
      },
      {
        q: "Chaque lot a-t-il un COA ?",
        a: "Oui, un Certificat d'Analyse (COA) est delivre par un laboratoire tiers accredite ISO 17025, par lot de production. Vous le recevez automatiquement et pouvez le partager avec vos clients.",
      },
      {
        q: "D'ou vient le chanvre ?",
        a: "De cultures certifiees dans l'UE (principalement France, Italie, Espagne). Tracabilite complete de la graine au produit fini.",
      },
      {
        q: "Les analyses couvrent-elles les pesticides et metaux lourds ?",
        a: "Oui. Chaque lot est analyse pour cannabinoides, terpenes, metaux lourds, pesticides, solvants residuels et microbiologie.",
      },
    ],
  },
  {
    id: "paiement",
    label: "Paiement & facturation",
    icon: CreditCard,
    items: [
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Carte bancaire, SEPA, Apple Pay, Google Pay via notre prestataire PCI-DSS. Pour les gros volumes, virement bancaire possible.",
      },
      {
        q: "Puis-je recuperer la TVA ?",
        a: "Oui, vos factures affichent la TVA deductible si vous etes assujetti UE. Fournissez votre numero TVA intra et c'est pris en compte automatiquement.",
      },
      {
        q: "Y a-t-il un abonnement ?",
        a: "Le plan Standard est gratuit (vous payez uniquement les produits). Le plan Pro (49 EUR/mois) debloque des fonctionnalites avancees (packaging premium, bundles, formules exclusives).",
      },
    ],
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(categories[0].id);
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([`${categories[0].id}-0`]));

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  const activeCat = filtered.find((c) => c.id === active) ?? filtered[0];

  function toggle(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-14 pb-10 bg-[#faf5ed]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
            Centre d&apos;aide
          </span>
          <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
            Questions frequentes
          </h1>
          <p className="mt-4 text-[15px] text-[#4d4f56] max-w-xl mx-auto">
            Tout ce qu&apos;il faut savoir pour lancer votre marque CBD en marque
            blanche avec Unsigned. Vous ne trouvez pas votre reponse ?{" "}
            <Link href="#contact" className="font-semibold underline">
              Parlez-nous.
            </Link>
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute top-1/2 -translate-y-1/2 left-5 h-4 w-4 text-[#9ca3af]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Chercher une question, un mot-cle..."
              className="w-full h-14 pl-12 pr-5 rounded-full bg-white border border-[#e5e5e7] text-[14px] shadow-sm focus:outline-none focus:border-foreground"
            />
          </div>
        </div>
      </section>

      {/* BODY — sidebar + accordion */}
      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
          {/* SIDEBAR */}
          <aside>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9ca3af] mb-3 px-3">
              Categories
            </h3>
            <ul className="space-y-0.5 sticky top-24">
              {filtered.map((c) => {
                const Icon = c.icon;
                const isActive = c.id === active;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`w-full text-left flex items-center gap-3 px-3 h-11 rounded-xl text-[13px] font-semibold transition-colors ${
                        isActive
                          ? "bg-foreground text-background"
                          : "text-[#1a1a1a] hover:bg-[#f7f7f8]"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={isActive ? 2.25 : 1.75} />
                      <span className="flex-1 truncate">{c.label}</span>
                      <span
                        className={`text-[10px] font-bold ${
                          isActive ? "bg-background/15 text-background" : "bg-[#f7f7f8] text-[#4d4f56]"
                        } px-1.5 py-0.5 rounded-full`}
                      >
                        {c.items.length}
                      </span>
                    </button>
                  </li>
                );
              })}
              {filtered.length === 0 && (
                <li className="text-[12px] text-[#9ca3af] px-3 py-3">
                  Aucune categorie ne correspond a cette recherche.
                </li>
              )}
            </ul>
          </aside>

          {/* ACCORDION */}
          <div>
            {activeCat ? (
              <>
                <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-6">
                  {activeCat.label}
                </h2>
                <div className="space-y-2">
                  {activeCat.items.map((it, i) => {
                    const id = `${activeCat.id}-${i}`;
                    const open = openItems.has(id) || !!query.trim();
                    return (
                      <div
                        key={id}
                        data-reveal
                        className={`bg-white border rounded-2xl overflow-hidden transition-colors ${
                          open ? "border-foreground" : "border-[#f1f1f3]"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                        >
                          <span className="text-[15px] font-semibold leading-snug">{it.q}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-5 pb-5 text-[13px] text-[#4d4f56] leading-[1.7]">{it.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="py-24 text-center">
                <HelpCircle className="h-8 w-8 text-[#9ca3af] mx-auto mb-3" />
                <p className="text-[14px] text-[#4d4f56]">
                  Aucune question ne correspond. Essayez un autre mot-cle ou{" "}
                  <Link href="#contact" className="font-semibold underline">
                    contactez-nous
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 bg-[#faf5ed]">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight mb-3">
            Toujours une question ?
          </h2>
          <p className="text-[14px] text-[#4d4f56] max-w-md mx-auto mb-7">
            Notre equipe repond sous 24 h ouvrees. Reponse directe, sans
            chatbot.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="mailto:contact@unsigned.fr">
              <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider">
                Contacter l&apos;equipe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                variant="outline"
                className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
              >
                Explorer les ressources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
