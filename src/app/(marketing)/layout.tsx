import { HeaderWrapper } from "@/components/layout/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer-wrapper";
import { CartProvider } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ScrollRevealProvider } from "@/components/layout/scroll-reveal-provider";
import { PageTransition } from "@/components/layout/page-transition";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <HeaderWrapper />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <FooterWrapper />
      <CartDrawer />
      <ScrollRevealProvider />
    </CartProvider>
  );
}
