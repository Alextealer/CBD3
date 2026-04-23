import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { CartProvider } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ScrollRevealProvider } from "@/components/layout/scroll-reveal-provider";
import { SidebarNav } from "./sidebar-nav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="fixed inset-0 flex bg-white">
        <aside className="w-[240px] shrink-0 h-full flex flex-col bg-white border-r border-[#f1f1f3]">
          {/* Logo */}
          <div className="h-[72px] flex items-center px-6 border-b border-[#f1f1f3]">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Unsigned</span>
            </Link>
          </div>

          {/* User */}
          <div className="h-[56px] flex items-center justify-between px-4 border-b border-[#f1f1f3]">
            <Link
              href="/profile"
              className="flex items-center gap-2 flex-1 min-w-0 hover:opacity-70 transition-opacity"
            >
              <div className="w-6 h-6 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <User className="h-3 w-3 text-[#4d4f56]" />
              </div>
              <span className="text-[13px] font-medium truncate">alboni alexandre</span>
            </Link>
            <button
              type="button"
              className="w-8 h-8 rounded-full hover:bg-[#f5f5f5] flex items-center justify-center text-[#4d4f56]"
              aria-label="Deconnexion"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>

          <SidebarNav />
        </aside>

        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
        <CartDrawer />
        <ScrollRevealProvider />
      </div>
    </CartProvider>
  );
}
