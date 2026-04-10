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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProfitCalculator } from "@/components/marketing/profit-calculator";

const features = [
  { icon: Check, text: "50+ produits CBD premium" },
  { icon: Check, text: "Mise sur le marche rapide" },
  { icon: Check, text: "Marges elevees" },
];

const categories = [
  {
    name: "Huiles CBD",
    href: "/catalog/huiles-cbd",
    image: "/images/placeholder-oil.jpg",
    description: "Sublinguales & MCT",
  },
  {
    name: "Fleurs CBD",
    href: "/catalog/fleurs-cbd",
    image: "/images/placeholder-flower.jpg",
    description: "Indoor, outdoor, greenhouse",
  },
  {
    name: "Cosmetiques CBD",
    href: "/catalog/cosmetiques-cbd",
    image: "/images/placeholder-cosmetic.jpg",
    description: "Cremes, baumes, serums",
  },
  {
    name: "Infusions CBD",
    href: "/catalog/infusions-cbd",
    image: "/images/placeholder-tea.jpg",
    description: "Tisanes au chanvre",
  },
  {
    name: "Coffrets",
    href: "/catalog/coffrets",
    image: "/images/placeholder-box.jpg",
    description: "Coffrets decouverte",
  },
];

const steps = [
  {
    icon: Package,
    title: "Choisissez vos produits",
    description:
      "Parcourez notre catalogue de 50+ produits CBD premium. Huiles, fleurs, cosmetiques, infusions — tout est pret a personnaliser.",
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
    text: "J'ai lance ma marque CBD en 2 semaines grace a CBD3. Le design studio est incroyable et la qualite des produits est irreprochable.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "E-commercant",
    text: "Le concept de marque blanche CBD est revolutionnaire. Plus besoin de gerer le stock ou la conformite, CBD3 s'occupe de tout.",
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
    q: "Qu'est-ce que CBD3 et comment ca fonctionne ?",
    a: "CBD3 est une plateforme de marque blanche CBD. Vous choisissez vos produits dans notre catalogue, personnalisez le design avec votre marque, et nous gerons la production, le stockage et l'expedition. Vous vendez sous votre propre marque sans gerer de stock.",
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
    a: "Oui, nous proposons des coffrets echantillons pour que vous puissiez tester la qualite avant de lancer votre marque. C'est la meilleure facon de valider vos choix produits.",
  },
  {
    q: "Comment integrer ma boutique en ligne ?",
    a: "CBD3 s'integre avec Shopify, WooCommerce et toute boutique via notre API. Les commandes sont synchronisees automatiquement et expediees sous 48h.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-[94px] pt-[60px] pb-8 lg:pt-[60px] lg:pb-12">
          <div className="grid lg:grid-cols-[minmax(0,448px)_1fr] gap-6 lg:gap-8 items-center">
            {/* Left — text */}
            <div>
              <h1 className="text-[2.75rem] font-semibold tracking-[-0.04em] leading-[1.2]">
                Lancez &amp;&nbsp;developpez votre marque&nbsp;CBD
              </h1>
              <p className="mt-5 text-[14px] font-medium text-[#4d4f56] leading-[1.6] max-w-[420px]">
                Profitez de notre expertise pour creer votre marque CBD en
                marque blanche. Sans minimum de commande, design 100%
                personnalisable.
              </p>

              {/* Check features — inline like selfnamed */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2">
                    <span className="flex h-[20px] w-[20px] items-center justify-center rounded bg-green-600">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-medium">{f.text}</span>
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
              <div className="relative w-full aspect-square max-h-[520px] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 shadow-2xl">
                {/* Central product placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-44 bg-gradient-to-b from-amber-200 to-amber-400 rounded-xl shadow-lg mx-auto" />
                    <div className="w-12 h-6 bg-amber-300 rounded-t-lg mx-auto -mt-0.5" />
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-14 bg-white/90 rounded-md flex items-center justify-center shadow-sm">
                      <span className="text-[8px] font-bold text-stone-500 text-center leading-tight">
                        Votre<br />Marque<br />CBD
                      </span>
                    </div>
                  </div>
                </div>

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
      <section className="px-4 sm:px-6 lg:px-8 py-6">
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
      <section className="py-12 overflow-hidden">
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

      {/* ==================== 3 STEPS ==================== */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              CBD premium, produit a la demande pour vous
            </h2>
            <p className="mt-4 text-[14px] font-medium text-[#4d4f56] max-w-2xl mx-auto leading-[1.6]">
              Le marche du CBD represente 5 milliards EUR en Europe. Prenez votre part
              avec CBD3 &mdash; le moyen le plus simple de lancer votre marque.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 01 — Choose products */}
            <div className="flex flex-col">
              {/* Image block */}
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">01</div>
                {/* Product bottles illustration */}
                <div className="absolute inset-0 flex items-end justify-center pb-0">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-20 bg-white rounded-t-full" />
                    <div className="w-8 h-28 bg-white rounded-t-lg" />
                    <div className="w-7 h-24 bg-white rounded-t-full" />
                    <div className="w-9 h-32 bg-white rounded-t-lg" />
                    <div className="w-6 h-18 bg-white rounded-t-full" />
                  </div>
                  {/* Floating checkmarks */}
                  <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>
              {/* Text */}
              <h3 className="text-[24px] font-medium leading-[1.4] text-center">Choisissez vos produits</h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Parcourez notre catalogue de 50+ produits CBD premium. Huiles, fleurs, cosmetiques — tout est pret a personnaliser.
              </p>
            </div>

            {/* Step 02 — Design */}
            <div className="flex flex-col">
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">02</div>
                {/* Bottle with label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Cap */}
                    <div className="w-8 h-4 bg-[#2a2a2a] rounded-t-md mx-auto" />
                    {/* Bottle body */}
                    <div className="w-20 h-36 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-lg mx-auto">
                      {/* Label */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-20 bg-white rounded-sm flex flex-col items-center justify-center p-1">
                        <span className="text-[9px] font-bold text-center leading-tight">Votre<br />Marque<br />CBD</span>
                        <span className="text-[6px] text-muted-foreground mt-1">HUILE CBD 10%</span>
                      </div>
                    </div>
                  </div>
                  {/* Design tools floating */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </div>
                    <div className="w-10 h-10 bg-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[24px] font-medium leading-[1.4] text-center">Creez votre design</h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Personnalisez chaque produit avec votre marque. Logo, couleurs, textes — le design studio fait tout.
              </p>
            </div>

            {/* Step 03 — Sell */}
            <div className="flex flex-col">
              <div className="relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[13px] font-semibold">03</div>
                {/* Store integrations */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Shopify card */}
                  <div className="absolute top-6 right-6 w-20 h-14 bg-[#95bf47] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-[11px] font-bold">Shopify</span>
                  </div>
                  {/* WooCommerce card */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-purple-200 rounded-xl px-3 py-2 shadow-lg">
                    <span className="text-purple-800 text-[12px] font-bold">WOO</span>
                  </div>
                  {/* Your Store card */}
                  <div className="bg-white rounded-2xl p-4 shadow-xl">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-lg font-bold">+</span>
                    </div>
                    <span className="text-[12px] font-semibold">Votre Boutique</span>
                  </div>
                </div>
              </div>
              <h3 className="text-[24px] font-medium leading-[1.4] text-center">Vendez &amp; expedions</h3>
              <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] text-center mt-2">
                Integrez votre boutique en ligne. Nous gerons le stock, la production et l&apos;expedition pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FULFILLMENT / MAP ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2] text-center mb-16">
            Une logistique fiable qui evolue avec vous
          </h2>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            {/* Map */}
            <div className="relative bg-[#eef0f8] rounded-2xl aspect-[4/3] overflow-hidden">
              {/* Europe map SVG simplified */}
              <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 500 400" fill="none">
                {/* Europe outline simplified */}
                <path d="M120 80 L160 60 L200 70 L240 50 L280 60 L320 40 L360 55 L380 80 L400 70 L420 90 L400 120 L410 150 L390 180 L370 160 L350 190 L380 220 L370 250 L340 240 L320 270 L290 250 L270 280 L240 260 L220 290 L200 270 L180 300 L160 280 L140 260 L120 270 L110 240 L90 220 L100 190 L80 170 L90 140 L70 120 L90 100 Z" fill="#d4d8f0" stroke="#c0c4e0" strokeWidth="1"/>
                {/* France highlighted */}
                <path d="M150 180 L170 170 L190 175 L200 190 L210 210 L200 230 L180 240 L160 235 L145 220 L140 200 Z" fill="#b8bde8" stroke="#a0a6d8" strokeWidth="1"/>
                {/* Hub point — Paris */}
                <circle cx="175" cy="200" r="5" fill="#0c0d12"/>
                {/* Tooltip */}
                <rect x="135" y="165" width="80" height="24" rx="4" fill="#0c0d12"/>
                <text x="175" y="181" textAnchor="middle" className="text-[10px]" fill="white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600 }}>Paris, France</text>
                {/* Delivery lines */}
                <line x1="175" y1="200" x2="280" y2="120" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="320" y2="180" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="200" y2="140" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="250" y2="250" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="140" y2="130" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="300" y2="90" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                {/* Destination dots */}
                <circle cx="280" cy="120" r="3" fill="#6b70a0"/>
                <circle cx="320" cy="180" r="3" fill="#6b70a0"/>
                <circle cx="200" cy="140" r="3" fill="#6b70a0"/>
                <circle cx="250" cy="250" r="3" fill="#6b70a0"/>
                <circle cx="140" cy="130" r="3" fill="#6b70a0"/>
                <circle cx="300" cy="90" r="3" fill="#6b70a0"/>
              </svg>
            </div>

            {/* Feature cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#f2f2f3] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-1">Livraison rapide en Europe</h3>
                  <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                    Expedition sous 48h depuis notre entrepot en France. Livraison en 2-5 jours dans toute l&apos;UE.
                  </p>
                </div>
              </div>
              <div className="bg-[#f2f2f3] rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-1">Lancez de nouveaux produits en heures</h3>
                  <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                    Sans minimum de commande — commandez un produit ou des milliers. C&apos;est vous qui decidez.
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
                    Produits certifies, conformes a la reglementation EU/FR. THC &lt; 0.3%, COA par lot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section className="py-24">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-muted-foreground/20" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-[14px]">
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-[12px] mt-0.5">
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
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Pourquoi choisir CBD3 ?
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
      <section className="py-24 overflow-hidden">
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
              quote: "Le concept de marque blanche CBD est revolutionnaire. Plus besoin de gerer le stock ou la conformite, CBD3 s'occupe de tout.",
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
              quote: "Le support est excellent et les delais de livraison sont toujours respectes. Je recommande CBD3 a 100%.",
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
      <section className="py-24 overflow-hidden">
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
        {/* Horizontal scroll gallery */}
        <div className="flex gap-5 pl-[max(1rem,calc((100vw-1240px)/2+1rem))] pr-8 overflow-x-auto scrollbar-hide pb-4">
          {[
            { bg: "from-amber-300 to-yellow-400", label: "Bloom CBD", sub: "Huiles premium" },
            { bg: "from-stone-200 to-stone-300", label: "Herb & Co", sub: "Fleurs artisanales" },
            { bg: "from-rose-300 to-pink-400", label: "Canna Luxe", sub: "Coffrets cadeaux" },
            { bg: "from-amber-700 to-orange-800", label: "Terra Verde", sub: "Cosmetiques CBD" },
            { bg: "from-emerald-300 to-green-400", label: "Pure Leaf", sub: "Infusions bio" },
            { bg: "from-violet-300 to-purple-400", label: "Zenith CBD", sub: "Resines premium" },
          ].map((item) => (
            <div
              key={item.label}
              className={`shrink-0 w-[300px] aspect-[3/4] rounded-2xl bg-gradient-to-br ${item.bg} relative overflow-hidden group cursor-pointer`}
            >
              {/* Product mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Bottle */}
                  <div className="w-16 h-28 bg-white/90 rounded-lg shadow-lg mx-auto" />
                  <div className="w-8 h-4 bg-white/70 rounded-t-md mx-auto -mt-0.5" />
                  {/* Label */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-14 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-[6px] font-bold text-center leading-tight text-stone-600">
                      {item.label}
                    </span>
                  </div>
                </div>
              </div>
              {/* Brand overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[14px] font-semibold">{item.label}</p>
                <p className="text-white/70 text-[12px]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== TRUSTED PARTNER — beige block ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
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

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
              Centre d&apos;aide
            </h2>
          </div>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-semibold tracking-[-0.04em] leading-[1.2]">
            Pret a lancer votre marque CBD ?
          </h2>
          <p className="mt-4 text-[14px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
            Rejoignez 200+ entrepreneurs qui ont lance leur marque CBD avec
            CBD3. C&apos;est gratuit pour commencer.
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
