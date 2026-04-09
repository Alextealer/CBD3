import { Header } from "./header";
import { getNavigation, getSiteSettings } from "@/lib/payload";

export async function HeaderWrapper() {
  // Fetch nav data in parallel
  const [
    headerLinks,
    productsMenu,
    solutionsMenu,
    resourcesMenu,
    settings,
  ] = await Promise.all([
    getNavigation("header"),
    getNavigation("header-products"),
    getNavigation("header-solutions"),
    getNavigation("header-resources"),
    getSiteSettings(),
  ]);

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
}

export interface BannerSettings {
  enabled?: boolean;
  text?: string;
  linkLabel?: string;
  linkHref?: string;
}
