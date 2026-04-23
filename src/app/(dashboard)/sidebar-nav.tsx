"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Package,
  BookOpen,
  Store,
  ClipboardList,
  FolderOpen,
  Home,
  Sparkles,
} from "lucide-react";

const primaryNav = [
  { href: "/profile/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/profile/my-products", label: "Mes produits", icon: Package },
  { href: "/profile/catalog", label: "Catalogue produits", icon: BookOpen },
  { href: "/profile/stores", label: "Mes boutiques", icon: Store },
  { href: "/profile/orders", label: "Commandes", icon: ClipboardList },
  { href: "/profile/files", label: "Bibliotheque", icon: FolderOpen },
];

const secondaryNav = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/services", label: "Services", icon: Sparkles },
];

export function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav className="flex-1 overflow-y-auto py-4 px-3">
      <ul className="space-y-0.5">
        {primaryNav.map((item) => {
          const Icon = item.icon;
          const active = pathname?.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 h-10 rounded-xl text-[13px] font-semibold transition-colors ${
                  active
                    ? "bg-[#f1eefe] text-[#6c3fee]"
                    : "text-[#1a1a1a] hover:bg-[#f7f7f8]"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={active ? 2.25 : 1.75} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="my-3 h-px bg-[#f1f1f3]" />
      <ul className="space-y-0.5">
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-3 h-10 rounded-xl text-[13px] font-medium text-[#4d4f56] hover:bg-[#f7f7f8] transition-colors"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
