import { Footer, type FooterSection } from "./footer";
import { getNavigation, getSiteSettings } from "@/lib/payload";

interface NavLink {
  label: string;
  href: string;
}

export async function FooterWrapper() {
  const [products, solutions, resources, legal, settings] = await Promise.all([
    getNavigation("footer-products"),
    getNavigation("footer-solutions"),
    getNavigation("footer-resources"),
    getNavigation("footer-legal"),
    getSiteSettings(),
  ]);

  const toSection = (title: string, links: unknown[]): FooterSection => ({
    title,
    links: (links as NavLink[]).map((l) => ({ name: l.label, href: l.href })),
  });

  const sections: FooterSection[] = [];
  if (products.length > 0) sections.push(toSection("Produits", products));
  if (solutions.length > 0) sections.push(toSection("Solutions", solutions));
  if (resources.length > 0) sections.push(toSection("Ressources", resources));
  if (legal.length > 0) sections.push(toSection("Legal", legal));

  const s = settings as Record<string, unknown> | null;
  const tagline = s?.tagline as string | undefined;
  const compliance = s?.compliance as { disclaimer?: string } | undefined;

  return (
    <Footer
      sections={sections.length > 0 ? sections : undefined}
      tagline={tagline}
      disclaimer={compliance?.disclaimer}
    />
  );
}
