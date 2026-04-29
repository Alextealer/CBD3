import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Palette,
  Package,
  Truck,
  ShieldCheck,
  Leaf,
  Star,
  FileCheck,
  Store,
  Zap,
  BarChart3,
  ShoppingBag,
  Globe,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProfitCalculator } from "@/components/marketing/profit-calculator";
import { getCategories, getHomeContent } from "@/lib/payload";

// Distinct semantic icons per feature — order-based mapping when CMS overrides
const FEATURE_ICONS = [Leaf, Zap, TrendingUp] as const;
const features = [
  { icon: FEATURE_ICONS[0], text: "50+ produits CBD premium" },
  { icon: FEATURE_ICONS[1], text: "Mise sur le marche rapide" },
  { icon: FEATURE_ICONS[2], text: "Marges elevees" },
];

const categories = [
  {
    name: "Fleur CBD",
    href: "/catalog/fleur-cbd",
    image: "/images/placeholder-flower.jpg",
    description: "Indoor, outdoor, greenhouse",
  },
  {
    name: "Hash CBD",
    href: "/catalog/hash-cbd",
    image: "/images/placeholder-hash.jpg",
    description: "Hash, pollen, moonrock",
  },
  {
    name: "Pre roll CBD",
    href: "/catalog/pre-roll-cbd",
    image: "/images/placeholder-preroll.jpg",
    description: "Joints prets a fumer",
  },
  {
    name: "Huiles CBD",
    href: "/catalog/huiles-cbd",
    image: "/images/placeholder-oil.jpg",
    description: "Sublinguales & MCT",
  },
  {
    name: "Extractions CBD",
    href: "/catalog/extractions-cbd",
    image: "/images/placeholder-extraction.jpg",
    description: "Wax, shatter, live resin",
  },
  {
    name: "Cartridges CBD",
    href: "/catalog/cartridges-cbd",
    image: "/images/placeholder-cartridge.jpg",
    description: "Vape pen 510 & disposable",
  },
  {
    name: "Edibles CBD",
    href: "/catalog/edibles-cbd",
    image: "/images/placeholder-edible.jpg",
    description: "Gummies, chocolat, infusions",
  },
  {
    name: "Cosmetique CBD",
    href: "/catalog/cosmetique-cbd",
    image: "/images/placeholder-cosmetic.jpg",
    description: "Cremes, baumes, serums",
  },
];

const steps = [
  {
    icon: Package,
    title: "Choisissez vos produits",
    description:
      "Parcourez notre catalogue de 50+ produits CBD premium. Fleur, hash, pre roll, huiles, extractions, cartridges, edibles, cosmetique — tout est pret a personnaliser.",
  },
  {
    icon: Palette,
    title: "Creez votre design",
    description:
      "Utilisez notre studio de design pour creer vos etiquettes et packaging. Uploadez votre logo, choisissez vos couleurs, personnalisez chaque detail.",
  },
  {
    icon: Truck,
    title: "Vendez & expedions",
    description:
      "Integrez votre boutique en ligne et commencez a vendre. Nous gerons le stock, la production et l'expedition pour vous.",
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: "Conforme EU/FR", desc: "THC < 0.3% garanti, COA par lot" },
  { icon: Leaf, title: "Chanvre certifie", desc: "Agriculture biologique europeenne" },
  { icon: FileCheck, title: "COA inclus", desc: "Certificat d'analyse par lot" },
  { icon: Store, title: "Sans minimum", desc: "Pas de stock, pas de MOQ" },
  { icon: Zap, title: "Livraison 48h", desc: "Expedition rapide en France" },
  { icon: BarChart3, title: "Marges 60%+", desc: "Prix grossiste competitifs" },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Fondatrice, Bloom CBD",
    text: "J'ai lance ma marque CBD en 2 semaines grace a Unsigned. Le design studio est incroyable et la qualite des produits est irreprochable.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "E-commercant",
    text: "Le concept de marque blanche CBD est revolutionnaire. Plus besoin de gerer le stock ou la conformite, Unsigned s'occupe de tout.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Naturopathe",
    text: "Mes clients adorent les produits. La qualite est au rendez-vous et les COA rassurent sur la transparence de la marque.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "Qu'est-ce que Unsigned et comment ca fonctionne ?",
    a: "Unsigned est une plateforme de marque blanche CBD. Vous choisissez vos produits dans notre catalogue, personnalisez le design avec votre marque, et nous gerons la production, le stockage et l'expedition. Vous vendez sous votre propre marque sans gerer de stock.",
  },
  {
    q: "Puis-je personnaliser le packaging des produits ?",
    a: "Oui ! Notre design studio vous permet de personnaliser entierement vos etiquettes et packaging. Uploadez votre logo, choisissez vos couleurs, ajoutez vos textes. Chaque produit peut avoir un design unique.",
  },
  {
    q: "Quel est le minimum de commande ?",
    a: "Il n'y a pas de minimum de commande. Vous pouvez commander a l'unite, ce qui est ideal pour tester vos produits avant de scaler. Pas de stock a gerer, pas de risque.",
  },
  {
    q: "Les produits sont-ils conformes a la reglementation ?",
    a: "Absolument. Tous nos produits CBD respectent la reglementation EU/FR avec un taux de THC < 0.3%. Chaque lot est accompagne d'un COA (Certificat d'Analyse) delivre par un laboratoire accredite ISO 17025.",
  },
  {
    q: "Puis-je commander des echantillons ?",
    a: "Oui, nous proposons des echantillons pour que vous puissiez tester la qualite avant de lancer votre marque. C'est la meilleure facon de valider vos choix produits.",
  },
  {
    q: "Comment integrer ma boutique en ligne ?",
    a: "Unsigned s'integre avec Shopify, WooCommerce et toute boutique via notre API. Les commandes sont synchronisees automatiquement et expediees sous 48h.",
  },
];

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [cms, cmsCategoriesRaw] = await Promise.all([
    getHomeContent() as Promise<Record<string, any> | null>,
    getCategories() as Promise<Record<string, any>[] | null>,
  ]);
  const hc = cms ?? {};
  const heroCMS = hc.hero ?? {};
  const teaserCMS = hc.signedLabelTeaser ?? {};
  const logisticsCMS = hc.logistics ?? {};
  const finalCtaCMS = hc.finalCta ?? {};

  // Inspiration gallery — CMS array with optional image/bg, fallback to hardcoded set
  const inspirationFallback = [
    { bg: "from-amber-300 to-yellow-400", label: "Bloom CBD", sub: "Huiles premium", image: "" },
    { bg: "from-stone-200 to-stone-300", label: "Herb & Co", sub: "Fleurs artisanales", image: "" },
    { bg: "from-rose-300 to-pink-400", label: "Canna Luxe", sub: "Edibles premium", image: "" },
    { bg: "from-amber-700 to-orange-800", label: "Terra Verde", sub: "Cosmetique CBD", image: "" },
    { bg: "from-emerald-300 to-green-400", label: "Pure Leaf", sub: "Pre roll bio", image: "" },
    { bg: "from-violet-300 to-purple-400", label: "Zenith CBD", sub: "Resines premium", image: "" },
  ];
  const inspirationCMS =
    Array.isArray(hc.inspiration) && hc.inspiration.length > 0
      ? hc.inspiration.map((i: Record<string, unknown>) => ({
          label: typeof i.label === "string" ? i.label : "",
          sub: typeof i.sub === "string" ? i.sub : "",
          bg:
            typeof i.bg === "string" && i.bg
              ? i.bg
              : "from-stone-200 to-stone-300",
          image:
            typeof (i.image as { url?: string } | null)?.url === "string"
              ? ((i.image as { url?: string }).url as string)
              : "",
        }))
      : inspirationFallback;

  // Map CMS categories → display shape; fallback to hardcoded list if CMS empty
  const cmsCategories =
    Array.isArray(cmsCategoriesRaw) && cmsCategoriesRaw.length > 0
      ? cmsCategoriesRaw.slice(0, 8).map((c) => ({
          name: typeof c.name === "string" ? c.name : "",
          href: typeof c.slug === "string" ? `/catalog/${c.slug}` : "/catalog",
          image:
            typeof c.coverImage?.url === "string" && c.coverImage.url
              ? c.coverImage.url
              : "",
          hoverImage:
            typeof c.hoverImage?.url === "string" && c.hoverImage.url
              ? c.hoverImage.url
              : "",
          description:
            typeof c.shortDescription === "string" && c.shortDescription
              ? c.shortDescription
              : typeof c.description === "string"
                ? c.description.slice(0, 60)
                : "",
        }))
      : categories.map((c) => ({ ...c, hoverImage: "" }));

  const cmsFeatures =
    Array.isArray(heroCMS.features) && heroCMS.features.length > 0
      ? heroCMS.features.map((f: { text: string }, i: number) => ({
          icon: FEATURE_ICONS[i % FEATURE_ICONS.length] ?? Sparkles,
          text: f.text,
        }))
      : features;

  const cmsUsefulLinks =
    Array.isArray(logisticsCMS.usefulLinks) && logisticsCMS.usefulLinks.length > 0
      ? logisticsCMS.usefulLinks
      : [
          { label: "Comment ca marche", href: "/how-it-works" },
          { label: "Expedition & logistique", href: "/fulfillment-shipping" },
          { label: "Livraison & retours", href: "/legal/shipping" },
          { label: "Integrations", href: "/integrations" },
          { label: "FAQ", href: "/faq" },
          { label: "Conformite", href: "/how-it-works#compliance" },
        ];

  const cmsFaqs =
    Array.isArray(hc.faqs) && hc.faqs.length > 0 ? hc.faqs : faqs;

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-[94px] pt-[60px] pb-8 lg:pt-[60px] lg:pb-12">
          <div className="grid lg:grid-cols-[minmax(0,448px)_1fr] gap-6 lg:gap-8 items-center">
            {/* Left — text */}
            <div>
              <h1 className="text-[2.75rem] font-semibold tracking-[-0.04em] leading-[1.2]">
                {typeof heroCMS.title === "string" && heroCMS.title.trim()
                  ? heroCMS.title
                  : "Lancez & developpez votre marque CBD"}
              </h1>
              <p className="mt-5 text-[14px] font-medium text-[#4d4f56] leading-[1.6] max-w-[420px]">
                {typeof heroCMS.subtitle === "string" && heroCMS.subtitle.trim()
                  ? heroCMS.subtitle
                  : "Profitez de notre expertise pour creer votre marque CBD en marque blanche. Sans minimum de commande, design 100% personnalisable."}
              </p>

              {/* Feature pills — semantic icon per feature, no boxy checkmarks */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                {cmsFeatures.map((f: { icon: typeof Check; text: string }) => (
                  <div
                    key={f.text}
                    className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 ring-1 ring-green-100"
                  >
                    <f.icon
                      className="h-[15px] w-[15px] text-green-700"
                      strokeWidth={2.25}
                    />
                    <span className="text-[13px] font-semibold text-green-900">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Shopify badge — like selfnamed */}
              <div className="mt-6 inline-flex items-center gap-8 bg-[#f5f5f5] rounded-2xl px-6 py-4">
                {/* Shopify logo */}
                <div className="flex items-center gap-2">
                  <svg className="h-8 w-8" viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.828-.183.05-3.37 1.042-8.646 2.673-5.161-14.889-14.271-28.561-30.244-28.561-.443 0-.9.017-1.36.05C129.401 3.407 124.024 0 119.617 0 75.458 0 54.4 55.07 47.724 83.06c-17.436 5.397-29.828 9.23-31.273 9.68-9.763 3.064-10.062 3.37-11.342 12.083C4.024 112.083 0 236.225 0 236.225l177.707 30.96 78.293-19.342S223.975 58.8 223.774 57.34z" fill="#95BF47"/>
                    <path d="M185.645 55.24c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.632-.63-1.5-.94-2.422-1.054l-10.838 221.8 78.293-19.342S223.975 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
                    <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338z" fill="#FFF"/>
                  </svg>
                  <span className="text-[22px] font-bold tracking-tight">shopify</span>
                </div>
                {/* Stars + rating */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 4 ? "fill-foreground text-foreground" : "fill-none text-foreground"}`}
                        strokeWidth={i < 4 ? 0 : 1.5}
                      />
                    ))}
                  </div>
                  <span className="text-[13px] text-muted-foreground mt-0.5">
                    4.4 out of 5
                  </span>
                </div>
              </div>

              {/* CTA buttons — exact selfnamed style: 12px, uppercase, bold, h-56px */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/profile">
                  <Button
                    className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]"
                  >
                    Commencer
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]"
                  >
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — hero visual (takes remaining space, ~55% of grid) */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-h-[520px] rounded-[1.5rem] overflow-hidden shadow-2xl">
                {/* Background — hero pouch image (CMS-overridable) */}
                <img
                  src={
                    typeof heroCMS.image?.url === "string" && heroCMS.image.url
                      ? heroCMS.image.url
                      : "/products/hero-bag-cbd.jpg"
                  }
                  alt={
                    typeof heroCMS.image?.alt === "string" && heroCMS.image.alt
                      ? heroCMS.image.alt
                      : "Pochon CBD premium marque blanche - Votre design"
                  }
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Floating UI card — top left (Design tools) */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3.5 w-[130px]">
                  <div className="grid grid-cols-2 gap-2 mb-2.5">
                    <div className="h-9 w-full bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                    <div className="h-9 w-full bg-primary rounded-lg flex items-center justify-center">
                      <Palette className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="h-9 w-full bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="h-9 w-full bg-muted rounded-lg flex items-center justify-center">
                      <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-xl px-3 py-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold">Votre Marque</span>
                    <span className="w-3.5 h-3.5 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    </span>
                  </div>
                </div>

                {/* Floating UI card — bottom right (Your Store) */}
                <div className="absolute bottom-5 right-5 bg-green-50/95 backdrop-blur-sm rounded-2xl shadow-xl p-3.5 w-[155px]">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[12px] font-semibold text-green-800">Votre Boutique</span>
                    <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-8 bg-white rounded-lg flex items-center justify-center">
                      <ShoppingBag className="h-3.5 w-3.5 text-green-700" />
                    </div>
                    <div className="h-8 bg-white rounded-lg flex items-center justify-center">
                      <Package className="h-3.5 w-3.5 text-green-700" />
                    </div>
                    <div className="h-8 bg-white rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-3.5 w-3.5 text-green-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BANNER ==================== */}
      <section data-reveal className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden py-20 px-8">
          <div className="absolute top-0 right-0 w-[320px] h-[320px] opacity-60">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0e8d8] rounded-full translate-x-16 -translate-y-8" />
            <div className="absolute top-8 right-12 w-24 h-24 bg-[#e8dcc8]/60 rounded-full" />
            <div className="absolute top-2 right-4 w-10 h-10 bg-[#e0d4c0]/40 rounded-full" />
          </div>

          <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2] text-center mb-16 relative z-10">
            Rejoignez les marques CBD qui cartonnent
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 max-w-4xl mx-auto relative z-10">
            <div className="text-center">
              <p className="text-[60px] font-semibold leading-[1] tracking-[-0.05em]">200+</p>
              <p className="text-[14px] font-medium text-[#4d4f56] mt-3 leading-snug">
                Marques CBD<br />accompagnees
              </p>
            </div>
            <div className="text-center">
              <p className="text-[60px] font-semibold leading-[1] tracking-[-0.05em]">50k</p>
              <p className="text-[14px] font-medium text-[#4d4f56] mt-3 leading-snug">
                Produits CBD premium<br />expedies
              </p>
            </div>
            <div className="text-center">
              <p className="text-[60px] font-semibold leading-[1] tracking-[-0.05em]">48h</p>
              <p className="text-[14px] font-medium text-[#4d4f56] mt-3 leading-snug">
                Delai moyen<br />d&apos;expedition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BRAND LOGOS CAROUSEL ==================== */}
      <section data-reveal className="py-12 overflow-hidden">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling track */}
          <div className="flex animate-scroll gap-20 items-center w-max">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-20 items-center shrink-0">
                {[
                  { src: "/brands/0x0-1.png", alt: "Happy Hemper", h: "h-16" },
                  { src: "/brands/0x0.png", alt: "CannaBuben Noids", h: "h-10" },
                  { src: "/brands/3e6e8e566b26fa30194a2b89a0cf00ae.webp", alt: "Buds Kings", h: "h-16" },
                  { src: "/brands/high-markets.webp", alt: "High Markets", h: "h-12" },
                  { src: "/brands/image-cbd-barato-shop.png", alt: "CBD Barato Shop", h: "h-14" },
                  { src: "/brands/LogoCBDDBleu.svg", alt: "CBDD", h: "h-14" },
                  { src: "/brands/logo.webp", alt: "The Swiss Hemp", h: "h-12" },
                  { src: "/brands/okiweed-cbd-logo.jpg", alt: "Okiweed", h: "h-16" },
                  { src: "/brands/cbd-pas-chere-logo-1706536216.webp", alt: "Weed Side Story", h: "h-10" },
                  { src: "/brands/codepromo-cbdpaschere.webp", alt: "CBD Pas Chere", h: "h-14" },
                  { src: "/brands/gempages_580385743113814788-7b9636f9-8ff0-4035-af22-607af3b7fb54.webp", alt: "Private CBD Shop", h: "h-10" },
                ].map((logo, i) => (
                  <div key={i} className="shrink-0 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`${logo.h} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONNECT — no stock / on demand ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6c3fee] bg-[#f1eefe] px-3 py-1.5 rounded-full mb-4">
              <Zap className="h-3 w-3" />
              Connexion directe
            </span>
            <h2 className="text-[40px] lg:text-[48px] font-semibold tracking-[-0.04em] leading-[1.08]">
              Connectez votre boutique. On fabrique, on expedie.
            </h2>
            <p className="mt-4 text-[15px] text-[#4d4f56] leading-[1.65] max-w-xl mx-auto">
              Pas de stock a acheter, pas de minimum de commande. Vos produits
              CBD personnalises sont fabriques <strong>on demand</strong> des
              qu&apos;un client passe commande dans votre boutique &mdash; et
              livres directement chez lui, sous votre marque.
            </p>
          </div>

          {/* FLOW DIAGRAM */}
          <div className="relative bg-gradient-to-br from-[#faf5ed] to-[#f1eefe] rounded-[2rem] p-8 lg:p-14 overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#6c3fee]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#ede4cc]/40 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-stretch">
              {/* Node 1 — Your store */}
              <div className="bg-white rounded-[1.25rem] p-6 shadow-sm border border-[#f1f1f3] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#95bf47] text-white flex items-center justify-center font-bold text-[16px]">
                    S
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[#7f54b3] text-white flex items-center justify-center font-bold text-[13px]">
                    Wo
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[#1a1a1a] text-white flex items-center justify-center font-mono text-[11px]">
                    {"{}"}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9ca3af]">
                  Etape 01
                </p>
                <h3 className="text-[18px] font-semibold mt-1 mb-2">Votre boutique</h3>
                <p className="text-[12px] text-[#4d4f56] leading-snug mt-auto">
                  Shopify, WooCommerce, Prestashop ou API. Un client commande votre
                  produit CBD sous votre marque.
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:flex items-center justify-center px-3 relative">
                <div className="w-full flex items-center">
                  <div className="flex-1 border-t-2 border-dashed border-[#6c3fee]/30" />
                  <div className="mx-2 w-8 h-8 rounded-full bg-white shadow-md border border-[#6c3fee]/20 flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-[#6c3fee]" />
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-[#6c3fee]/30" />
                </div>
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider bg-[#6c3fee] text-white px-2.5 py-1 rounded-full">
                  Sync auto
                </span>
              </div>

              {/* Node 2 — Unsigned fabric */}
              <div className="relative bg-foreground text-background rounded-[1.25rem] p-6 shadow-lg flex flex-col ring-2 ring-[#6c3fee]/40">
                <div className="absolute -top-3 left-6 bg-[#6c3fee] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  On demand
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Palette className="h-4 w-4" />
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Package className="h-4 w-4" />
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-background/60">
                  Etape 02
                </p>
                <h3 className="text-[18px] font-semibold mt-1 mb-2">
                  On fabrique sous votre marque
                </h3>
                <p className="text-[12px] text-background/70 leading-snug mt-auto">
                  Fabrication unitaire en UE. Etiquette, packaging et COA a votre
                  marque. <strong className="text-background">Zero stock</strong>,
                  zero gaspillage.
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:flex items-center justify-center px-3 relative">
                <div className="w-full flex items-center">
                  <div className="flex-1 border-t-2 border-dashed border-[#6c3fee]/30" />
                  <div className="mx-2 w-8 h-8 rounded-full bg-white shadow-md border border-[#6c3fee]/20 flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-[#6c3fee]" />
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-[#6c3fee]/30" />
                </div>
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider bg-[#6c3fee] text-white px-2.5 py-1 rounded-full">
                  Colis neutre
                </span>
              </div>

              {/* Node 3 — Customer */}
              <div className="bg-white rounded-[1.25rem] p-6 shadow-sm border border-[#f1f1f3] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div className="flex-1 h-1.5 bg-[#f1f1f3] rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-green-500 rounded-full" />
                  </div>
                  <Check className="h-4 w-4 text-green-600" strokeWidth={3} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9ca3af]">
                  Etape 03
                </p>
                <h3 className="text-[18px] font-semibold mt-1 mb-2">Livre a votre client</h3>
                <p className="text-[12px] text-[#4d4f56] leading-snug mt-auto">
                  Expedition 2 a 5 jours en UE sous colis neutre. Votre client ne
                  voit que <strong>votre marque</strong>.
                </p>
              </div>
            </div>

            {/* 3 bullets */}
            <div className="relative mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Package, title: "Zero stock a avancer", desc: "Vous ne payez que ce qui est commande." },
                { icon: Zap, title: "Personnalisation 100%", desc: "Etiquette, packaging, coffret, a votre marque." },
                { icon: Globe, title: "Fabrication UE", desc: "Conforme EU/FR, THC < 0.3%, COA par lot." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="h-4 w-4 text-[#6c3fee]" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">{title}</h4>
                    <p className="text-[12px] text-[#4d4f56] mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative mt-10 flex justify-center gap-3 flex-wrap">
              <Link href="/integrations">
                <Button className="rounded-full h-12 px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Voir les integrations
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  className="rounded-full h-12 px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  Comment ca marche
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUIT & DESIGN ==================== */}
      <section data-reveal className="py-24 bg-muted/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-4">
              Produit & design
            </p>
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2] max-w-3xl mx-auto">
              Des produits CBD premium, habilles a votre marque.
            </h2>
            <p className="mt-4 text-[14px] font-medium text-[#4d4f56] max-w-2xl mx-auto leading-[1.6]">
              Un catalogue serre de formulations eprouvees, un packaging
              entierement personnalisable, des outils de design pour le faire
              vous-meme ou un studio interne pour le faire avec vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 01 — Catalogue */}
            <div className="flex flex-col">
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">01</div>
                <span className="absolute top-4 right-4 inline-flex items-center bg-white/90 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1">
                  8 categories
                </span>
                {/* Product bottles illustration */}
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-20 bg-white rounded-t-full" />
                    <div className="w-8 h-28 bg-white rounded-t-lg" />
                    <div className="w-7 h-24 bg-white rounded-t-full" />
                    <div className="w-9 h-32 bg-white rounded-t-lg" />
                    <div className="w-6 h-18 bg-white rounded-t-full" />
                  </div>
                  <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
              <h3 className="text-[22px] font-medium leading-[1.4] text-center">
                Catalogue eprouve
              </h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Fleur, hash, pre roll, huiles, extractions, cartridges, edibles,
                cosmetique. Formulations conformes EU/FR, COA par lot.
              </p>
            </div>

            {/* 02 — Packaging */}
            <div className="flex flex-col">
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">02</div>
                <span className="absolute top-4 right-4 inline-flex items-center bg-white/90 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1">
                  100% custom
                </span>
                {/* Bottle with label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-4 bg-[#2a2a2a] rounded-t-md mx-auto" />
                    <div className="w-20 h-36 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-lg mx-auto">
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-20 bg-white rounded-sm flex flex-col items-center justify-center p-1">
                        <span className="text-[9px] font-bold text-center leading-tight">Votre<br />Marque<br />CBD</span>
                        <span className="text-[6px] text-muted-foreground mt-1">HUILE CBD 10%</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating finish chips */}
                  <div className="absolute left-6 top-6 bg-white rounded-full px-2.5 py-1 shadow-md">
                    <span className="text-[9px] font-bold">Sleeve</span>
                  </div>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-foreground text-white rounded-full px-2.5 py-1 shadow-md">
                    <span className="text-[9px] font-bold">Vernis selectif</span>
                  </div>
                  <div className="absolute left-8 bottom-6 bg-white rounded-full px-2.5 py-1 shadow-md">
                    <span className="text-[9px] font-bold">Coffret</span>
                  </div>
                </div>
              </div>
              <h3 className="text-[22px] font-medium leading-[1.4] text-center">
                Packaging premium
              </h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Etiquette, sleeve thermo, coffret carton, vernis selectif,
                bundles. Tous les codes du retail premium, sans MOQ.
              </p>
            </div>

            {/* 03 — Design Studio + service */}
            <div className="flex flex-col">
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">03</div>
                <span className="absolute top-4 right-4 inline-flex items-center bg-white/90 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1">
                  DIY ou pro
                </span>
                {/* Design tools mockup */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-6 bg-[#f7f7f8] border-b flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                      <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="p-3 flex gap-2">
                      <div className="flex flex-col gap-1.5">
                        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                          <Palette className="h-3.5 w-3.5 text-white" />
                        </div>
                        <div className="w-7 h-7 rounded-md bg-[#f7f7f8] border" />
                        <div className="w-7 h-7 rounded-md bg-[#f7f7f8] border" />
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-amber-100 to-orange-200 rounded-md flex items-center justify-center">
                        <div className="w-8 h-12 bg-white rounded shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-amber-700" />
                        <div className="w-5 h-5 rounded-full bg-foreground" />
                        <div className="w-5 h-5 rounded-full bg-green-600" />
                        <div className="w-5 h-5 rounded-full bg-pink-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[22px] font-medium leading-[1.4] text-center">
                Outils + service design
              </h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Design Studio en ligne pour le DIY, equipe interne pour le sur
                mesure. Etiquettes, mockups 3D, exports prets a fabriquer.
              </p>
            </div>
          </div>

          {/* Inline CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link href="/catalog">
              <Button className="rounded-full h-12 px-6 text-[12px] font-bold uppercase tracking-wider">
                Voir le catalogue
              </Button>
            </Link>
            <Link href="/design-studio">
              <Button
                variant="outline"
                className="rounded-full h-12 px-6 text-[12px] font-bold uppercase tracking-wider"
              >
                Outils de design
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="ghost"
                className="rounded-full h-12 px-6 text-[12px] font-bold uppercase tracking-wider"
              >
                Service design
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FULFILLMENT / MAP ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2] text-center mb-16">
            Une logistique fiable qui evolue avec vous
          </h2>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            {/* Map */}
            <div className="relative bg-[#eef0f8] rounded-2xl aspect-[4/3] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 500 400" fill="none">
                {/* Europe outline simplified */}
                <path d="M120 80 L160 60 L200 70 L240 50 L280 60 L320 40 L360 55 L380 80 L400 70 L420 90 L400 120 L410 150 L390 180 L370 160 L350 190 L380 220 L370 250 L340 240 L320 270 L290 250 L270 280 L240 260 L220 290 L200 270 L180 300 L160 280 L140 260 L120 270 L110 240 L90 220 L100 190 L80 170 L90 140 L70 120 L90 100 Z" fill="#d4d8f0" stroke="#c0c4e0" strokeWidth="1"/>
                {/* Switzerland highlighted */}
                <path d="M205 200 L218 195 L232 200 L238 210 L232 220 L218 224 L205 220 L200 210 Z" fill="#b8bde8" stroke="#a0a6d8" strokeWidth="1"/>
                {/* Hub point — Geneve */}
                <circle cx="218" cy="210" r="5" fill="#0c0d12"/>
                {/* Tooltip */}
                <rect x="178" y="175" width="90" height="24" rx="4" fill="#0c0d12"/>
                <text x="223" y="191" textAnchor="middle" fill="white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600 }}>Geneve, Suisse</text>
                {/* Delivery lines from Geneva */}
                <line x1="218" y1="210" x2="280" y2="120" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="320" y2="180" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="200" y2="140" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="250" y2="260" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="150" y2="200" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="300" y2="90" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="218" y1="210" x2="340" y2="240" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                {/* Destination dots */}
                <circle cx="280" cy="120" r="3" fill="#6b70a0"/>
                <circle cx="320" cy="180" r="3" fill="#6b70a0"/>
                <circle cx="200" cy="140" r="3" fill="#6b70a0"/>
                <circle cx="250" cy="260" r="3" fill="#6b70a0"/>
                <circle cx="150" cy="200" r="3" fill="#6b70a0"/>
                <circle cx="300" cy="90" r="3" fill="#6b70a0"/>
                <circle cx="340" cy="240" r="3" fill="#6b70a0"/>
              </svg>
              <span className="absolute bottom-4 left-4 inline-flex items-center bg-white/90 text-foreground text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1.5">
                🇨🇭 Hub Suisse
              </span>
            </div>

            {/* Feature cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#f2f2f3] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-1">Expedition depuis la Suisse</h3>
                  <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                    Notre hub logistique est base en Suisse. Expedition sous 48 h vers
                    toute l&apos;UE et la Suisse, livraison en 2 a 5 jours.
                  </p>
                </div>
              </div>
              <div className="bg-[#f2f2f3] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-1">Lancez en quelques heures</h3>
                  <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                    Sans minimum de commande. Une unite ou des milliers — c&apos;est
                    vous qui decidez du rythme.
                  </p>
                </div>
              </div>
              <div className="bg-[#f2f2f3] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-1">Qualite premium &amp; conformite</h3>
                  <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                    Produits conformes a la reglementation EU/FR/CH. THC &lt; 0.3%,
                    COA par lot, traceabilite complete.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Useful links */}
          <div className="mt-12 border-t pt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-6 text-center">
              Informations utiles
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {cmsUsefulLinks.map((link: { label: string; href: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-foreground/10 bg-white hover:border-foreground/40 hover:bg-[#f7f7f8] transition-colors"
                >
                  <span className="text-[13px] font-medium leading-tight">
                    {link.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
                Explorez nos produits CBD
              </h2>
            </div>
            <Link href="/catalog" className="hidden sm:flex items-center gap-1 text-[14px] font-medium hover:underline">
              Voir tout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {cmsCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative aspect-[3/4] bg-[#f0ece6] rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                {cat.image ? (
                  <>
                    {/* Default image — fills the card edge to edge */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        cat.hoverImage ? "group-hover:opacity-0" : ""
                      }`}
                    />
                    {/* Hover image — only rendered when uploaded */}
                    {cat.hoverImage && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={cat.hoverImage}
                        alt={`${cat.name} alternative`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="h-16 w-16 text-muted-foreground/20" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                  <h3 className="text-white font-semibold text-[15px]">
                    {cat.name}
                  </h3>
                  <p className="text-white/80 text-[12px] mt-0.5">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-white text-[12px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorer <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/catalog">
              <Button variant="outline" className="rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] px-6">
                Voir tout le catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TRUST ==================== */}
      <section data-reveal className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Pourquoi choisir Unsigned ?
            </h2>
            <p className="mt-4 text-[14px] font-medium text-[#4d4f56] max-w-2xl mx-auto leading-[1.6]">
              Tout ce dont vous avez besoin pour lancer et developper votre
              marque CBD, dans une seule plateforme.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((tp) => (
              <div
                key={tp.title}
                className="bg-white rounded-2xl p-6 border hover:shadow-md transition-shadow"
              >
                <tp.icon className="h-7 w-7 mb-4 text-green-600" />
                <h3 className="text-[16px] font-semibold leading-[1.4] mb-1">{tp.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56]">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROFIT CALCULATOR ==================== */}
      <ProfitCalculator />

      {/* ==================== HEAR FROM OUR CUSTOMERS ==================== */}
      <section data-reveal className="py-24 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Ce que disent nos clients
            </h2>
            {/* Rating + arrows */}
            <div className="flex items-center gap-8 shrink-0">
              {/* Big rating */}
              <div className="flex items-center gap-3">
                <span className="text-[48px] font-semibold tracking-[-0.04em] leading-none">4.8</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-foreground text-foreground" : "fill-none text-foreground"}`}
                        strokeWidth={i < 5 ? 0 : 1.5}
                      />
                    ))}
                  </div>
                  <span className="text-[14px] text-[#4d4f56]">Avis clients</span>
                </div>
              </div>
              {/* Nav arrows */}
              <div className="hidden sm:flex gap-2">
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="Precedent">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="Suivant">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal scroll reviews */}
        <div className="flex gap-5 pl-[max(1rem,calc((100vw-1240px)/2+1rem))] pr-8 overflow-x-auto scrollbar-hide pb-4">
          {[
            {
              quote: "J'ai lance ma marque CBD en 2 semaines. Le design studio est incroyable et la qualite des produits est irreprochable.",
              author: "Marie L.",
              role: "Fondatrice, Bloom CBD",
            },
            {
              quote: "Le concept de marque blanche CBD est revolutionnaire. Plus besoin de gerer le stock ou la conformite, Unsigned s'occupe de tout.",
              author: "Thomas R.",
              role: "E-commercant",
            },
            {
              quote: "Mes clients adorent les produits. La qualite est au rendez-vous et les COA rassurent sur la transparence.",
              author: "Sophie M.",
              role: "Naturopathe",
            },
            {
              quote: "Forte recommandation pour quiconque veut lancer une marque CBD avec des produits de qualite et un sourcing automatise.",
              author: "Lucas D.",
              role: "Fondateur, Canna Green",
            },
            {
              quote: "La plateforme est super intuitive. J'ai personnalise mes etiquettes et commande mes premiers echantillons en une journee.",
              author: "Emma B.",
              role: "Creatrice, Pure Leaf",
            },
            {
              quote: "Le support est excellent et les delais de livraison sont toujours respectes. Je recommande Unsigned a 100%.",
              author: "Antoine K.",
              role: "Revendeur CBD",
            },
          ].map((review) => (
            <div
              key={review.author}
              className="shrink-0 w-[360px] rounded-[2rem] border border-border/60 p-8 flex flex-col justify-between bg-white hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div>
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-foreground text-foreground"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[18px] leading-[1.55] mb-8">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              {/* Author */}
              <div>
                <p className="text-[18px] font-medium">{review.author}</p>
                <p className="text-[14px] text-[#4d4f56] mt-0.5">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== GET INSPIRED ==================== */}
      <section data-reveal className="py-24 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Inspirez-vous
            </h2>
            <div className="hidden sm:flex gap-2">
              <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="Precedent">
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="Suivant">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Horizontal scroll gallery — CMS-driven, image preferred over bottle mockup */}
        <div className="flex gap-5 pl-[max(1rem,calc((100vw-1240px)/2+1rem))] pr-8 overflow-x-auto scrollbar-hide pb-4">
          {inspirationCMS.map((item) => (
            <div
              key={item.label}
              className={`shrink-0 w-[300px] aspect-[3/4] rounded-2xl bg-gradient-to-br ${item.bg} relative overflow-hidden group cursor-pointer`}
            >
              {item.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Fallback — bottle mockup when no CMS image is uploaded */
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-28 bg-white/90 rounded-lg shadow-lg mx-auto" />
                    <div className="w-8 h-4 bg-white/70 rounded-t-md mx-auto -mt-0.5" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-14 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-[6px] font-bold text-center leading-tight text-stone-600">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* Brand overlay — always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[14px] font-semibold">{item.label}</p>
                <p className="text-white/80 text-[12px]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== TRUSTED PARTNER — beige block ==================== */}
      <section data-reveal className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden min-h-[500px] relative">
          {/* Left — text content */}
          <div className="relative z-10 max-w-[520px] px-10 py-16 lg:px-16 lg:py-24">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Votre partenaire de confiance en CBD
            </h2>
            <p className="mt-6 text-[18px] font-medium text-[#4d4f56] leading-[1.6]">
              Certifie, durable et conforme. Des produits CBD en marque blanche, maintenant disponibles sans minimum de commande.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                  Commencer
                </Button>
              </Link>
              <Link href="/how-it-works" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                En savoir plus
              </Link>
            </div>
          </div>

          {/* Right — decorative dropper/oil visual */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden lg:block">
            {/* Dropper illustration */}
            <div className="absolute top-12 right-24 rotate-[25deg]">
              {/* Cap */}
              <div className="w-16 h-12 bg-white rounded-t-full mx-auto shadow-sm" />
              {/* Neck */}
              <div className="w-6 h-20 bg-gradient-to-b from-white/80 to-white/40 mx-auto" />
              {/* Glass tube */}
              <div className="w-3 h-16 bg-gradient-to-b from-amber-200/60 to-amber-400/80 mx-auto rounded-b-full" />
              {/* Drop */}
              <div className="w-12 h-14 bg-gradient-to-b from-amber-400 to-amber-500 rounded-[50%] mx-auto mt-1 shadow-lg" />
              <div className="w-6 h-6 bg-amber-300/60 rounded-full mx-auto -mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SIGNED LABEL — INCUBATEUR ==================== */}
      <section data-reveal className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1240px] mx-auto relative">
          {/* Offset accent frame */}
          <div
            aria-hidden="true"
            className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 right-12 sm:right-24 bottom-12 sm:bottom-20 rounded-[2rem] border-[3px] border-foreground/80 pointer-events-none"
          />

          {/* Card */}
          <div className="relative grid lg:grid-cols-[1.05fr_1fr] bg-white rounded-[2rem] overflow-hidden shadow-sm">
            {/* Left — quote */}
            <div className="px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-between min-h-[480px]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-8">
                  {typeof teaserCMS.eyebrow === "string" && teaserCMS.eyebrow.trim()
                    ? teaserCMS.eyebrow
                    : "Sur invitation"}
                </p>
                <blockquote className="text-[24px] sm:text-[30px] lg:text-[34px] font-medium tracking-[-0.02em] leading-[1.3] text-foreground">
                  &ldquo;
                  {typeof teaserCMS.quote === "string" && teaserCMS.quote.trim()
                    ? teaserCMS.quote
                    : "Pour les marques qui refusent le nivellement du CBD, Signed Label apporte l'infrastructure, la conformite et l'accompagnement — sans diluer la vision."}
                  &rdquo;
                </blockquote>
              </div>
              <div className="mt-10">
                <p className="text-[15px] font-semibold text-foreground">
                  {typeof teaserCMS.attributionName === "string" && teaserCMS.attributionName.trim()
                    ? teaserCMS.attributionName
                    : "Signed Label"}
                  <sup className="text-[10px] ml-0.5">TM</sup>
                </p>
                <p className="text-[13px] text-[#4d4f56] mt-0.5">
                  {typeof teaserCMS.attributionRole === "string" && teaserCMS.attributionRole.trim()
                    ? teaserCMS.attributionRole
                    : "Incubateur prive d'Unsigned"}
                </p>
              </div>
            </div>

            {/* Right — visual + CTA */}
            <div className="relative min-h-[320px] lg:min-h-[480px] overflow-hidden bg-gradient-to-br from-[#fbe7d7] via-[#f4c9b0] to-[#e8a988]">
              {/* Bubbles texture */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { l: "12%", t: "18%", s: "h-12 w-12" },
                  { l: "68%", t: "22%", s: "h-6 w-6" },
                  { l: "82%", t: "55%", s: "h-16 w-16" },
                  { l: "28%", t: "70%", s: "h-8 w-8" },
                  { l: "55%", t: "78%", s: "h-5 w-5" },
                  { l: "44%", t: "32%", s: "h-3 w-3" },
                  { l: "76%", t: "10%", s: "h-2 w-2" },
                  { l: "20%", t: "48%", s: "h-2 w-2" },
                  { l: "60%", t: "60%", s: "h-3 w-3" },
                  { l: "90%", t: "30%", s: "h-2 w-2" },
                ].map((b, i) => (
                  <span
                    key={i}
                    className={`absolute ${b.s} rounded-full border border-white/70 bg-white/30 backdrop-blur-[1px]`}
                    style={{ left: b.l, top: b.t }}
                  />
                ))}
              </div>

              {/* Soft purple wash on right edge for depth, matches reference */}
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#dcd0e8]/80 to-transparent pointer-events-none" />

              {/* CTA pill */}
              <Link
                href={
                  typeof teaserCMS.ctaHref === "string" && teaserCMS.ctaHref.trim()
                    ? teaserCMS.ctaHref
                    : "/incubateur"
                }
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-foreground text-white text-[12px] font-bold uppercase tracking-[0.18em] rounded-full px-7 py-4 hover:bg-foreground/85 transition-colors shadow-lg"
              >
                {typeof teaserCMS.ctaLabel === "string" && teaserCMS.ctaLabel.trim()
                  ? teaserCMS.ctaLabel
                  : "Read more"}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section data-reveal className="py-24 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Centre d&apos;aide
            </h2>
          </div>
          <Accordion className="space-y-3">
            {cmsFaqs.map((faq: { q: string; a: string }, i: number) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-[16px] font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] font-medium text-[#4d4f56] pb-5 leading-[1.6]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
            Pret a lancer votre marque CBD ?
          </h2>
          <p className="mt-4 text-[14px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
            Rejoignez 200+ entrepreneurs qui ont lance leur marque CBD avec
            Unsigned. C&apos;est gratuit pour commencer.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/profile">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="/catalog">
              <Button
                variant="outline"
                className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]"
              >
                Explorer le catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
