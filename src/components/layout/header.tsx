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
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* ============================================================
   DATA
   ============================================================ */

const catalogCategories = [
  { name: "Huiles CBD", href: "/catalog/huiles-cbd", icon: Droplets },
  { name: "Fleurs CBD", href: "/catalog/fleurs-cbd", icon: Flower2 },
  { name: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd", icon: Leaf },
  { name: "Infusions CBD", href: "/catalog/infusions-cbd", icon: Coffee },
  { name: "Coffrets", href: "/catalog/coffrets", icon: Gift },
  { name: "Resines CBD", href: "/catalog/resines-cbd", icon: CircleDot },
];

const privateLabel = [
  { name: "Marque Blanche CBD", href: "/marque-blanche" },
  { name: "Huiles CBD", href: "/catalog/huiles-cbd" },
  { name: "Fleurs CBD", href: "/catalog/fleurs-cbd" },
  { name: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd" },
  { name: "Coffrets & Sets", href: "/catalog/coffrets" },
  { name: "Infusions CBD", href: "/catalog/infusions-cbd" },
];

const sellingItems = [
  { name: "Comment ca marche ?", href: "/how-it-works", icon: HelpCircle },
  { name: "Dropshipping CBD", href: "/dropshipping", icon: Globe },
  { name: "Expedition & Logistique", href: "/fulfillment-shipping", icon: Truck },
  { name: "Marque Blanche", href: "/marque-blanche", icon: Tag },
  { name: "Grossiste CBD", href: "/pricing", icon: Store },
];

const designItems = [
  { name: "Design Studio", href: "/studio", icon: Palette },
  { name: "Service Design", href: "/studio", icon: Palette },
];

const helpItems = [
  { name: "Premiers pas", href: "/help", icon: BookOpen },
  { name: "Livraison & Retours", href: "/legal/shipping", icon: Truck },
  { name: "Integrations boutique", href: "/how-it-works#integrations", icon: Store },
  { name: "Conformite & Legal", href: "/how-it-works#compliance", icon: ShieldCheck },
  { name: "A propos", href: "/about", icon: Users },
];

const blogPosts = [
  { tag: "CBD", title: "Tendances CBD 2026", href: "/blog" },
  { tag: "E-COMMERCE", title: "Lancer sa marque CBD", href: "/blog" },
  { tag: "E-COMMERCE", title: "Gagner avec le CBD", href: "/blog" },
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
    ? dbProductsMenu.map((l) => ({ name: l.label, href: l.href, icon: iconMap[l.icon || ""] || Leaf }))
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
  catalogCategories: Array<{ name: string; href: string; icon: React.ComponentType<{ className?: string }> }>;
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
            <Link href="/" className="flex items-center gap-2 shrink-0" onClick={close}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">cbd3</span>
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
                href="/pricing"
                className="text-[14px] tracking-[-0.01em] text-foreground hover:text-foreground/70 transition-colors"
                onClick={close}
              >
                Tarifs
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2 shrink-0">
              <Link href="/profile" className="hidden sm:flex">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <User className="h-[18px] w-[18px]" />
                </Button>
              </Link>
              <Link href="/cart" className="hidden sm:flex">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                </Button>
              </Link>
              <Link href="/profile" className="hidden lg:block ml-1">
                <Button size="sm" className="rounded-full px-5 h-9 text-[13px]">
                  Commencer
                </Button>
              </Link>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" className="h-9 w-9" />}>
                  <Menu className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <span className="text-lg font-bold">cbd3</span>
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
                        <Link href="/pricing" className="block py-2 px-3 rounded-lg text-[14px] font-medium hover:bg-muted transition-colors">
                          Tarifs
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
                      <div className="aspect-square bg-white rounded-2xl flex items-center justify-center mb-2.5 group-hover:shadow-md transition-shadow">
                        <cat.icon className="h-10 w-10 text-muted-foreground group-hover:text-green-600 transition-colors" />
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
                <Link href="/studio" onClick={close} className="flex items-center gap-5 group">
                  <div className="w-[240px] h-[140px] bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center shrink-0">
                    <div className="text-center">
                      <p className="text-[20px] font-bold leading-tight">Design en<br />60 sec</p>
                      <Palette className="h-6 w-6 text-green-600 mx-auto mt-2" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[20px] font-medium group-hover:underline">Design instantane</p>
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

                <span className="inline-flex items-center bg-[#3d5a3d] text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                  Vente
                </span>
                <div className="mb-5">
                  {sellingItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="flex items-center gap-3.5 py-2 px-1 hover:opacity-70 transition-opacity">
                      <item.icon className="h-6 w-6 text-foreground shrink-0" strokeWidth={1.5} />
                      <span className="text-[15px] font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>

                <span className="inline-flex items-center bg-[#fce4ec] text-pink-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-4 py-1.5 mb-4">
                  Design
                </span>
                <div>
                  {designItems.map((item, i) => (
                    <Link key={i} href={item.href} onClick={close} className="flex items-center gap-3.5 py-2 px-1 hover:opacity-70 transition-opacity">
                      <item.icon className="h-6 w-6 text-foreground shrink-0" strokeWidth={1.5} />
                      <span className="text-[15px] font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right sidebar — Integrations — full height */}
              <div className="bg-white rounded-r-[1.5rem] p-8">
                <h4 className="text-[20px] font-semibold mb-5">Integrations</h4>
                <span className="inline-flex items-center gap-1.5 bg-foreground text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                  Integrations <ArrowRight className="h-3 w-3" />
                </span>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="aspect-square bg-[#2a5b2a] rounded-xl flex items-center justify-center">
                    <svg className="h-10 w-10" viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M223.8 57.3c-.2-1.5-1.5-2.3-2.5-2.4-1-.1-23.4-1.7-23.4-1.7s-15.5-15.4-17.2-17.1c-1.7-1.7-5-1.2-6.3-.8l-8.6 2.7c-5.2-14.9-14.3-28.6-30.2-28.6-.4 0-.9 0-1.4.1C129.4 3.4 124 0 119.6 0 75.5 0 54.4 55.1 47.7 83.1c-17.4 5.4-29.8 9.2-31.3 9.7C6.7 95.8 6.4 96.1 5.1 104.8 4 112.1 0 236.2 0 236.2l177.7 31 78.3-19.3S224 58.8 223.8 57.3" fill="#95BF47"/>
                      <path d="M185.6 55.2c-1-.1-23.4-1.7-23.4-1.7s-15.5-15.4-17.2-17.1c-.6-.6-1.5-.9-2.4-1.1l-10.8 221.8 78.3-19.3S224 58.8 223.8 57.3c-.2-1.5-1.5-2.3-2.5-2.4" fill="#5E8E3E"/>
                      <path d="M135.2 104.6l-11.1 32.9s-9.7-5.2-21.6-5.2c-17.4 0-18.3 10.9-18.3 13.7 0 15 39.2 20.8 39.2 56 0 27.7-17.6 45.6-41.3 45.6-28.4 0-43-17.7-43-17.7l7.6-25.2s15 12.8 27.6 12.8c8.2 0 11.6-6.5 11.6-11.2 0-19.6-32.2-20.5-32.2-52.7 0-27.1 19.5-53.4 58.8-53.4 15.1 0 22.6 4.3 22.6 4.3" fill="#fff"/>
                    </svg>
                  </div>
                  <div className="aspect-square bg-[#1e1046] rounded-xl flex items-center justify-center">
                    <svg className="h-8 w-14" viewBox="0 0 120 40" fill="none">
                      <text x="5" y="30" style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: 800, fill: '#9b8fc2', letterSpacing: '-1px' }}>WOO</text>
                    </svg>
                  </div>
                  <div className="aspect-square bg-foreground rounded-xl flex items-center justify-center">
                    <span className="text-white text-[11px] font-bold">API</span>
                  </div>
                </div>
                <span className="inline-flex items-center bg-[#ffebee] text-red-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-3">
                  A venir
                </span>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center">
                  <p className="text-[14px] font-semibold">WIX</p>
                  <p className="text-[12px] text-[#4d4f56]">Bientot disponible</p>
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
                <Link href="/blog" onClick={close} className="block text-[14px] font-medium mt-6 hover:underline">
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
