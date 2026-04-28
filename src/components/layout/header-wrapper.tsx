import { Header } from "./header";
import {
  getCategories,
  getNavigation,
  getSiteSettings,
} from "@/lib/payload";

export async function HeaderWrapper() {
  // Fetch nav + categories in parallel
  const [
    headerLinks,
    productsMenuRaw,
    solutionsMenu,
    resourcesMenu,
    settings,
    categories,
  ] = await Promise.all([
    getNavigation("header"),
    getNavigation("header-products"),
    getNavigation("header-solutions"),
    getNavigation("header-resources"),
    getSiteSettings(),
    getCategories() as Promise<Record<string, unknown>[] | null>,
  ]);

  // Build slug → coverImage URL map for the products menu cards
  const slugToImage: Record<string, string> = {};
  if (Array.isArray(categories)) {
    for (const c of categories) {
      const slug = typeof c.slug === "string" ? c.slug : null;
      const cover = c.coverImage as { url?: string } | null | undefined;
      if (slug && typeof cover?.url === "string" && cover.url) {
        slugToImage[slug] = cover.url;
      }
    }
  }

  // Enrich productsMenu items with image URL when href matches /catalog/<slug>
  const productsMenu = Array.isArray(productsMenuRaw)
    ? (productsMenuRaw as HeaderLink[]).map((item) => {
        if (typeof item.href !== "string") return item;
        const match = item.href.match(/^\/catalog\/([^/]+)\/?$/);
        const slug = match?.[1];
        if (slug && slugToImage[slug]) {
          return { ...item, image: slugToImage[slug] };
        }
        return item;
      })
    : productsMenuRaw;

  return (
    <Header
      headerLinks={headerLinks as HeaderLink[]}
      productsMenu={productsMenu as HeaderLink[]}
      solutionsMenu={solutionsMenu as HeaderLink[]}
      resourcesMenu={resourcesMenu as HeaderLink[]}
      banner={
        settings && typeof settings === "object" && "banner" in settings
          ? ((settings as Record<string, unknown>).banner as BannerSettings)
          : undefined
      }
    />
  );
}

export interface HeaderLink {
  id?: string;
  label: string;
  href: string;
  icon?: string;
  description?: string;
  image?: string;
}

export interface BannerSettings {
  enabled?: boolean;
  text?: string;
  linkLabel?: string;
  linkHref?: string;
}
