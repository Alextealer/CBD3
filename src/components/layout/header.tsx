"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  User,
  ShoppingBag,
  Droplets,
  Flower2,
  Leaf,
  Coffee,
  Gift,
  CircleDot,
  Cigarette,
  FlaskConical,
  Battery,
  Cookie,
  Palette,
  Globe,
  Truck,
  Tag,
  Store,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Users,
  FileText,
  ArrowRight,
  Zap,
  CreditCard,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartTrigger } from "@/components/cart/cart-trigger";
import { Logo } from "@/components/brand/logo";

/* ============================================================
   DATA
   ============================================================ */

const catalogCategories = [
  { name: "Fleur CBD", href: "/catalog/fleur-cbd", icon: Flower2 },
  { name: "Hash CBD", href: "/catalog/hash-cbd", icon: CircleDot },
  { name: "Pre roll CBD", href: "/catalog/pre-roll-cbd", icon: Cigarette },
  { name: "Huiles CBD", href: "/catalog/huiles-cbd", icon: Droplets },
  { name: "Extractions CBD", href: "/catalog/extractions-cbd", icon: FlaskConical },
  { name: "Cartridges CBD", href: "/catalog/cartridges-cbd", icon: Battery },
  { name: "Edibles CBD", href: "/catalog/edibles-cbd", icon: Cookie },
  { name: "Cosmetique CBD", href: "/catalog/cosmetique-cbd", icon: Leaf },
];

const privateLabel = [
  { name: "Marque Blanche CBD", href: "/marque-blanche" },
  { name: "Fleur CBD", href: "/catalog/fleur-cbd" },
  { name: "Hash CBD", href: "/catalog/hash-cbd" },
  { name: "Pre roll CBD", href: "/catalog/pre-roll-cbd" },
  { name: "Huiles CBD", href: "/catalog/huiles-cbd" },
  { name: "Extractions CBD", href: "/catalog/extractions-cbd" },
  { name: "Cartridges CBD", href: "/catalog/cartridges-cbd" },
  { name: "Edibles CBD", href: "/catalog/edibles-cbd" },
  { name: "Cosmetique CBD", href: "/catalog/cosmetique-cbd" },
];

const sellingItems = [
  { name: "Comment ca marche ?", href: "/how-it-works", icon: HelpCircle },
  { name: "Dropshipping CBD", href: "/dropshipping", icon: Globe },
  { name: "Expedition & Logistique", href: "/fulfillment-shipping", icon: Truck },
  { name: "Marque Blanche", href: "/marque-blanche", icon: Tag },
  { name: "Grossiste CBD", href: "/grossiste", icon: Store },
];

const designItems = [
  { name: "Outils de design", href: "/design-studio", icon: Palette },
  { name: "Service de design", href: "/services", icon: Palette },
];

const techItems = [
  { name: "Ads Studio", href: "/creative-ads", icon: Palette },
  { name: "Marketing Studio", href: "/marketing-studio", icon: Zap },
  { name: "Solution de paiement", href: "/payment-module", icon: CreditCard },
];

const industryItems = [
  {
    name: "Enterprise",
    href: "/industries/enterprise",
    // Product bottle mockup
    render: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f7f4ee] to-[#e8e1d0]">
        <div className="relative">
          <div className="w-10 h-4 bg-[#2a2a2a] rounded-t-md mx-auto" />
          <div className="w-14 h-24 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-b-lg -mt-0.5 flex items-center justify-center">
            <span className="text-[7px] font-bold uppercase tracking-wider text-amber-900/70">
              CBD
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "E-commerce",
    href: "/industries/ecommerce",
    render: (
      <div className="w-full h-full bg-gradient-to-br from-[#d1c3a5] to-[#a89578] p-3 flex flex-col items-center justify-center gap-1">
        <div className="w-12 h-7 bg-[#c2b094] rounded flex items-center justify-center">
          <span className="text-[7px] font-bold text-white">shopify</span>
        </div>
        <div className="w-12 h-7 bg-[#d4c5a5] rounded flex items-center justify-center">
          <span className="text-[7px] font-bold text-[#6e5a3a]">shopi</span>
        </div>
      </div>
    ),
  },
  {
    name: "Bien-etre",
    href: "/industries/bien-etre",
    render: (
      <div className="w-full h-full bg-gradient-to-br from-[#e8d5d0] to-[#c9a49b] p-3 flex items-center justify-center">
        <div className="relative">
          <div className="w-6 h-4 bg-[#2a2a2a] rounded-t-sm mx-auto" />
          <div className="w-10 h-16 bg-white rounded-b-md -mt-0.5 shadow-sm" />
        </div>
      </div>
    ),
  },
  {
    name: "Boutiques",
    href: "/industries/boutiques",
    render: (
      <div className="w-full h-full bg-gradient-to-br from-[#cfd8dc] to-[#8ea2a9] p-3 flex items-center justify-center">
        <div className="relative">
          <div className="w-10 h-16 bg-[#f5f1e8] rounded-t-full rounded-b-md shadow-sm" />
          <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-[#5a5148]">
            CBD
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Createurs",
    href: "/industries/createurs",
    render: (
      <div className="w-full h-full bg-gradient-to-br from-[#c44545] to-[#8a2a2a] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5d5c0] to-[#d4a484] flex items-center justify-center">
          <span className="text-[9px] font-bold text-[#5a3a2a]">✦</span>
        </div>
      </div>
    ),
  },
];

const helpItems = [
  { name: "Guide des tendances", href: "/resources", icon: BookOpen },
  { name: "FAQ & Centre d'aide", href: "/faq", icon: ShieldCheck },
  { name: "Livraison & Retours", href: "/legal/shipping", icon: Truck },
  { name: "Integrations boutique", href: "/integrations", icon: Store },
  { name: "A propos", href: "/about", icon: Users },
];

const blogPosts = [
  { tag: "EDITORIAL", title: "Tendances CBD 2026", href: "/resources" },
  { tag: "BUSINESS", title: "Lancer sa marque CBD avec 500 EUR", href: "/resources" },
  { tag: "CONFORMITE", title: "Reglementation CBD 2026", href: "/resources" },
];

/* ============================================================
   ICON MAPPING — DB uses string names, we map to Lucide components
   ============================================================ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  flower: Flower2,
  leaf: Leaf,
  coffee: Coffee,
  gift: Gift,
  "circle-dot": CircleDot,
  cigarette: Cigarette,
  "flask-conical": FlaskConical,
  battery: Battery,
  cookie: Cookie,
  palette: Palette,
  globe: Globe,
  truck: Truck,
  tag: Tag,
  store: Store,
  "shield-check": ShieldCheck,
  "help-circle": HelpCircle,
  "book-open": BookOpen,
  users: Users,
  "file-text": FileText,
};

interface DbLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  image?: string;
}

interface HeaderProps {
  headerLinks?: DbLink[];
  productsMenu?: DbLink[];
  solutionsMenu?: DbLink[];
  resourcesMenu?: DbLink[];
  banner?: {
    enabled?: boolean;
    text?: string;
    linkLabel?: string;
    linkHref?: string;
  };
}

/* ============================================================
   COMPONENT
   ============================================================ */

export function Header({
  headerLinks: dbHeaderLinks,
  productsMenu: dbProductsMenu,
  solutionsMenu: dbSolutionsMenu,
  resourcesMenu: dbResourcesMenu,
  banner: dbBanner,
}: HeaderProps = {}) {
  // Merge DB with fallback: use DB if non-empty, else hardcoded
  const finalProducts = (dbProductsMenu && dbProductsMenu.length > 0)
    ? dbProductsMenu.map((l) => ({
        name: l.label,
        href: l.href,
        icon: iconMap[l.icon || ""] || Leaf,
        image: l.image,
      }))
    : catalogCategories;

  const finalSelling = (dbSolutionsMenu && dbSolutionsMenu.length > 0)
    ? dbSolutionsMenu.map((l) => ({ name: l.label, href: l.href, icon: iconMap[l.icon || ""] || HelpCircle }))
    : sellingItems;

  const finalHelp = (dbResourcesMenu && dbResourcesMenu.length > 0)
    ? dbResourcesMenu.map((l) => ({ name: l.label, href: l.href, icon: iconMap[l.icon || ""] || BookOpen }))
    : helpItems;

  const finalBanner = {
    enabled: dbBanner?.enabled ?? true,
    text: dbBanner?.text || "Livraison offerte des 200EUR de commande",
    linkLabel: dbBanner?.linkLabel || "Voir le catalogue",
    linkHref: dbBanner?.linkHref || "/catalog",
  };

  return (
    <HeaderInner
      catalogCategories={finalProducts}
      sellingItems={finalSelling}
      helpItems={finalHelp}
      banner={finalBanner}
    />
  );
}

interface HeaderInnerProps {
  catalogCategories: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }>; image?: string }>;
  sellingItems: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }>;
  helpItems: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }>;
  banner: { enabled: boolean; text: string; linkLabel: string; linkHref: string };
}

function HeaderInner({
  catalogCategories,
  sellingItems,
  helpItems,
  banner,
}: HeaderInnerProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (menu: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const close = () => setOpenMenu(null);

  return (
    <>
      {/* Top banner */}
      {banner.enabled && (
        <div className="bg-[#f5f5f5] text-foreground text-center text-[13px] h-[40px] flex items-center justify-center px-4">
          {banner.text} &middot;{" "}
          <Link href={banner.linkHref} className="underline font-medium ml-1">
            {banner.linkLabel}
          </Link>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <Link href="/" className="shrink-0 text-foreground" onClick={close} aria-label="unsigned — accueil">
              <Logo className="h-7 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6" onMouseLeave={scheduleClose}>
              {/* Produits CBD */}
              <button
                onMouseEnter={() => open("products")}
                className={`flex items-center gap-1 text-[14px] tracking-[-0.01em] px-4 py-2 rounded-full transition-all ${openMenu === "products" ? "bg-[#f0f0f0] text-foreground" : "text-foreground hover:text-foreground/70"}`}
              >
                Produits CBD
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "products" ? "rotate-180" : ""}`} />
              </button>

              {/* Solutions & Services */}
              <button
                onMouseEnter={() => open("solutions")}
                className={`flex items-center gap-1 text-[14px] tracking-[-0.01em] px-4 py-2 rounded-full transition-all ${openMenu === "solutions" ? "bg-[#f0f0f0] text-foreground" : "text-foreground hover:text-foreground/70"}`}
              >
                Solutions &amp; Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {/* Ressources */}
              <button
                onMouseEnter={() => open("resources")}
                className={`flex items-center gap-1 text-[14px] tracking-[-0.01em] px-4 py-2 rounded-full transition-all ${openMenu === "resources" ? "bg-[#f0f0f0] text-foreground" : "text-foreground hover:text-foreground/70"}`}
              >
                Ressources
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "resources" ? "rotate-180" : ""}`} />
              </button>

              <Link
                href="/incubateur"
                className="text-[14px] tracking-[-0.01em] text-foreground hover:text-foreground/70 transition-colors"
                onClick={close}
              >
                Signed Label
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Account pill — avatar + label, highlighted */}
              <Link
                href="/profile"
                aria-label="Mon compte"
                className="hidden sm:flex items-center gap-2 h-9 pl-1 pr-3 rounded-full bg-[#f1eefe] hover:bg-[#e3d4ff] text-[#6c3fee] transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-[#6c3fee] text-white flex items-center justify-center text-[11px] font-bold">
                  A
                </span>
                <span className="hidden md:inline text-[12px] font-semibold">
                  Mon compte
                </span>
              </Link>
              <CartTrigger className="hidden sm:flex" />

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" className="h-9 w-9" />}>
                  <Menu className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <Logo className="h-6 w-auto text-foreground" />
                    </div>
                    <nav className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-6">
                        <div>
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Produits CBD</p>
                          <div className="space-y-1">
                            {catalogCategories.map((item) => (
                              <Link key={item.href} href={item.href} className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-[14px] hover:bg-muted transition-colors">
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Solutions</p>
                          <div className="space-y-1">
                            {sellingItems.map((item) => (
                              <Link key={item.href} href={item.href} className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-[14px] hover:bg-muted transition-colors">
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Ressources</p>
                          <div className="space-y-1">
                            {helpItems.map((item) => (
                              <Link key={item.href} href={item.href} className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-[14px] hover:bg-muted transition-colors">
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <Link href="/incubateur" className="block py-2 px-3 rounded-lg text-[14px] font-medium hover:bg-muted transition-colors">
                          Signed Label
                        </Link>
                      </div>
                    </nav>
                    <div className="p-4 border-t">
                      <Link href="/profile">
                        <Button className="w-full rounded-full">Commencer gratuitement</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* ===== MEGA MENU PANELS ===== */}
        {openMenu && (
          <div className="fixed inset-0 top-[100px] z-40" onClick={close} onMouseEnter={scheduleClose}>
            <div className="bg-black/5 absolute inset-0" />
          </div>
        )}

        {/* --- Produits CBD --- */}
        {openMenu === "products" && (
          <div className="absolute left-3 right-3 top-[calc(100%+6px)] z-50 bg-[#f5f5f5] rounded-[1.5rem] shadow-2xl border border-black/5" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <div className="grid grid-cols-[1fr_320px]">
              {/* Left */}
              <div className="p-10 pr-8">
                <h3 className="text-[24px] font-semibold tracking-[-0.03em] mb-6">Produits CBD</h3>

                <Link href="/catalog" onClick={close} className="inline-flex items-center gap-1.5 bg-[#e8f5e9] text-green-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6 hover:bg-[#c8e6c9] transition-colors">
                  Catalogue <ArrowRight className="h-3 w-3" />
                </Link>
                <div className="grid grid-cols-5 gap-5 mb-8">
                  {catalogCategories.slice(0, 5).map((cat) => (
                    <Link key={cat.href} href={cat.href} onClick={close} className="group">
                      <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-2.5 group-hover:shadow-md transition-shadow">
                        {cat.image ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <cat.icon className="h-10 w-10 text-muted-foreground group-hover:text-green-600 transition-colors" />
                          </div>
                        )}
                      </div>
                      <span className="text-[14px] font-medium flex items-center gap-0.5">
                        {cat.name} <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  ))}
                </div>

                <span className="inline-flex items-center bg-[#fce4ec] text-pink-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                  Design
                </span>
                <Link href="/design-studio" onClick={close} className="flex items-center gap-5 group">
                  <div className="w-[240px] h-[140px] bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center shrink-0">
                    <div className="text-center">
                      <p className="text-[20px] font-bold leading-tight">Design en<br />60 sec</p>
                      <Palette className="h-6 w-6 text-green-600 mx-auto mt-2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[20px] font-medium group-hover:underline">Outils de design</p>
                    <p className="text-[14px] text-[#4d4f56] mt-2 leading-relaxed">Transformez vos produits en designs prets a l&apos;emploi en moins d&apos;une minute.</p>
                    <span className="text-[14px] font-medium mt-3 inline-flex items-center gap-1">Commander <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </Link>
              </div>

              {/* Right sidebar — full height */}
              <div className="bg-white rounded-r-[1.5rem] p-8">
                <h4 className="text-[20px] font-semibold mb-5">Marque Blanche</h4>
                <span className="inline-flex items-center bg-[#ffebee] text-red-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                  Categories
                </span>
                <div className="space-y-3 mb-8">
                  {privateLabel.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="block text-[15px] font-medium hover:text-green-700 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>

                <span className="inline-flex items-center bg-[#e8e8ea] text-foreground text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                  Fabrication
                </span>
                <div className="space-y-3">
                  <Link href="/how-it-works" onClick={close} className="block text-[15px] font-medium hover:text-green-700 transition-colors">
                    Formules &amp; Ingredients
                  </Link>
                  <Link href="/how-it-works#compliance" onClick={close} className="block text-[15px] font-medium hover:text-green-700 transition-colors">
                    Conformite &amp; Claims
                  </Link>
                  <Link href="/how-it-works" onClick={close} className="block text-[15px] font-medium hover:text-green-700 transition-colors">
                    Fabrication CBD
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Solutions & Services --- */}
        {openMenu === "solutions" && (
          <div className="absolute left-3 right-3 top-[calc(100%+6px)] z-50 bg-[#f5f5f5] rounded-[1.5rem] shadow-2xl border border-black/5" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <div className="grid grid-cols-[1fr_320px]">
              {/* Left */}
              <div className="p-10 pr-8">
                <h3 className="text-[24px] font-medium tracking-[-0.03em] mb-8">Solutions &amp; Services</h3>

                {/* 3 columns: Vente + Design + Studio side by side */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {/* Vente */}
                  <div>
                    <span className="inline-flex items-center bg-[#3d5a3d] text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                      Vente
                    </span>
                    <div>
                      {sellingItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={close}
                          className="flex items-center gap-3 py-2 px-1 hover:opacity-70 transition-opacity"
                        >
                          <item.icon className="h-5 w-5 text-foreground shrink-0" strokeWidth={1.5} />
                          <span className="text-[13px] font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <span className="inline-flex items-center bg-[#fce4ec] text-pink-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                      Design
                    </span>
                    <div>
                      {designItems.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={close}
                          className="flex items-center gap-3 py-2 px-1 hover:opacity-70 transition-opacity"
                        >
                          <item.icon className="h-5 w-5 text-foreground shrink-0" strokeWidth={1.5} />
                          <span className="text-[13px] font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Studio */}
                  <div>
                    <span className="inline-flex items-center bg-[#e3d4ff] text-[#5a2fd8] text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                      Studio
                    </span>
                    <div>
                      {techItems.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={close}
                          className="flex items-center gap-3 py-2 px-1 hover:opacity-70 transition-opacity"
                        >
                          <item.icon className="h-5 w-5 text-foreground shrink-0" strokeWidth={1.5} />
                          <span className="text-[13px] font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Industries — full width below */}
                <span className="inline-flex items-center bg-[#f0f0f0] text-foreground text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                  Industries
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {industryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={close}
                      className="group"
                    >
                      <div className="aspect-[5/4] rounded-lg overflow-hidden">
                        {item.render}
                      </div>
                      <p className="text-[12px] font-medium mt-1.5 flex items-center gap-1 group-hover:underline">
                        {item.name}
                        <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right sidebar — Use cases — full height */}
              <div className="bg-white rounded-r-[1.5rem] p-8 flex flex-col">
                <h4 className="text-[20px] font-semibold mb-5">Use cases</h4>

                <Link
                  href="/integrations"
                  onClick={close}
                  className="inline-flex items-center gap-1.5 bg-foreground text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5 w-fit hover:opacity-90"
                >
                  Integrations <ArrowRight className="h-3 w-3" />
                </Link>

                {/* First row: 3 integrations */}
                <div className="grid grid-cols-3 gap-2.5 mb-2.5">
                  <div className="aspect-square bg-[#2a5b2a] rounded-xl flex items-center justify-center">
                    <svg className="h-10 w-10" viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M223.8 57.3c-.2-1.5-1.5-2.3-2.5-2.4-1-.1-23.4-1.7-23.4-1.7s-15.5-15.4-17.2-17.1c-1.7-1.7-5-1.2-6.3-.8l-8.6 2.7c-5.2-14.9-14.3-28.6-30.2-28.6-.4 0-.9 0-1.4.1C129.4 3.4 124 0 119.6 0 75.5 0 54.4 55.1 47.7 83.1c-17.4 5.4-29.8 9.2-31.3 9.7C6.7 95.8 6.4 96.1 5.1 104.8 4 112.1 0 236.2 0 236.2l177.7 31 78.3-19.3S224 58.8 223.8 57.3" fill="#95BF47"/>
                      <path d="M185.6 55.2c-1-.1-23.4-1.7-23.4-1.7s-15.5-15.4-17.2-17.1c-.6-.6-1.5-.9-2.4-1.1l-10.8 221.8 78.3-19.3S224 58.8 223.8 57.3c-.2-1.5-1.5-2.3-2.5-2.4" fill="#5E8E3E"/>
                      <path d="M135.2 104.6l-11.1 32.9s-9.7-5.2-21.6-5.2c-17.4 0-18.3 10.9-18.3 13.7 0 15 39.2 20.8 39.2 56 0 27.7-17.6 45.6-41.3 45.6-28.4 0-43-17.7-43-17.7l7.6-25.2s15 12.8 27.6 12.8c8.2 0 11.6-6.5 11.6-11.2 0-19.6-32.2-20.5-32.2-52.7 0-27.1 19.5-53.4 58.8-53.4 15.1 0 22.6 4.3 22.6 4.3" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="aspect-square bg-[#1e1046] rounded-xl flex items-center justify-center">
                    <span className="text-[#9b8fc2] text-[18px] font-black tracking-[-0.04em]">woo</span>
                  </div>
                  <div className="aspect-square bg-foreground rounded-xl flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">API</span>
                  </div>
                </div>

                {/* Second row: WIX alone (placeholder for future integration) */}
                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  <div className="aspect-square bg-white border border-[#f1f1f3] rounded-xl flex items-center justify-center">
                    <span className="text-foreground text-[14px] font-black tracking-[-0.04em]">WIX</span>
                  </div>
                </div>

                {/* Suggested — big coming-soon card */}
                <span className="inline-flex items-center bg-[#ffebee] text-red-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-3 w-fit">
                  Suggere
                </span>
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#e3d4ff] via-[#f5d5c0] to-[#fde5ec] p-5 flex flex-col items-center justify-center text-center min-h-[180px] relative overflow-hidden">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-foreground rounded-md" />
                    <span className="text-[10px] font-bold">Unsigned</span>
                    <span className="text-[10px] font-bold text-[#9ca3af]">×</span>
                    <span className="text-[10px] font-black tracking-[-0.02em]">WIX</span>
                  </div>
                  <p className="text-[22px] font-semibold tracking-[-0.02em] italic text-foreground mt-3">
                    Coming Soon
                  </p>
                  <p className="text-[11px] text-[#4d4f56] mt-3 max-w-[200px] leading-snug">
                    Cette collaboration arrive en beta tres bientot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Ressources --- */}
        {openMenu === "resources" && (
          <div className="absolute left-3 right-3 top-[calc(100%+6px)] z-50 bg-[#f5f5f5] rounded-[1.5rem] shadow-2xl border border-black/5" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            <div className="grid grid-cols-[1fr_320px]">
              {/* Left */}
              <div className="p-10 pr-8">
                <h3 className="text-[24px] font-medium tracking-[-0.03em] mb-8">Ressources</h3>

                <span className="inline-flex items-center bg-[#e8f5e9] text-green-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                  Centre d&apos;aide
                </span>
                <div>
                  {helpItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="flex items-center gap-3.5 py-2 px-1 hover:opacity-70 transition-opacity">
                      <item.icon className="h-6 w-6 text-foreground shrink-0" strokeWidth={1.5} />
                      <span className="text-[15px] font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right sidebar — Blog — full height */}
              <div className="bg-white rounded-r-[1.5rem] p-8">
                <h4 className="text-[20px] font-semibold mb-5">Blog</h4>
                <span className="inline-flex items-center bg-foreground text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                  Blog
                </span>
                <div className="space-y-4">
                  {blogPosts.map((post, i) => (
                    <Link key={i} href={post.href} onClick={close} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-muted rounded-xl shrink-0 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4d4f56]">{post.tag}</span>
                        <p className="text-[14px] font-medium group-hover:underline leading-tight">{post.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/resources" onClick={close} className="block text-[14px] font-medium mt-6 hover:underline">
                  Tous les articles
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
