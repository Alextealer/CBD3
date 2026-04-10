/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helpers to fetch data from Payload CMS with fallback to hardcoded defaults
 */
import dns from "dns";
import net from "net";
import { getPayload } from "payload";
import config from "../payload.config";

// Force IPv4 — Supabase only has AAAA records, Vercel doesn't support IPv6
dns.setDefaultResultOrder("ipv4first");
const _origConnect = net.Socket.prototype.connect;
net.Socket.prototype.connect = function (options: any, ...args: any[]) {
  if (typeof options === "object" && options.host && !options.family) {
    options.family = 4;
  }
  return _origConnect.call(this, options, ...args);
} as any;

// Cache the payload instance across requests
let cached: any = null;

async function getInstance() {
  if (cached) return cached;
  cached = await getPayload({ config });
  return cached;
}

/**
 * Safely fetch from Payload. Returns fallback if DB is unavailable.
 */
export async function safeFetch<T>(
  fetcher: (payload: any) => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    const payload = await getInstance();
    return await fetcher(payload);
  } catch (error) {
    console.error("[Payload] Fetch failed, using fallback:", error);
    return fallback;
  }
}

// ============================================================================
// CATEGORIES
// ============================================================================
export async function getCategories() {
  return safeFetch(
    async (payload) => {
      const res = await payload.find({
        collection: "categories",
        where: { isActive: { equals: true } },
        sort: "order",
        limit: 100,
      });
      return res.docs;
    },
    [],
  );
}

export async function getCategoryBySlug(slug: string) {
  return safeFetch(
    async (payload) => {
      const res = await payload.find({
        collection: "categories",
        where: { slug: { equals: slug } },
        limit: 1,
      });
      return res.docs[0] || null;
    },
    null,
  );
}

// ============================================================================
// PRODUCTS
// ============================================================================
export async function getProductsByCategory(categorySlug: string) {
  return safeFetch(
    async (payload) => {
      const cat = await payload.find({
        collection: "categories",
        where: { slug: { equals: categorySlug } },
        limit: 1,
      });
      if (!cat.docs[0]) return [];

      const res = await payload.find({
        collection: "products",
        where: {
          and: [
            { category: { equals: cat.docs[0].id } },
            { isActive: { equals: true } },
          ],
        },
        sort: "order",
        depth: 2,
        limit: 200,
      });
      return res.docs;
    },
    [],
  );
}

// ============================================================================
// NAVIGATION
// ============================================================================
export async function getNavigation(menu: string) {
  return safeFetch(
    async (payload) => {
      const res = await payload.find({
        collection: "navigation",
        where: { menu: { equals: menu } },
        sort: "order",
        limit: 100,
      });
      return res.docs;
    },
    [],
  );
}

// ============================================================================
// SITE SETTINGS
// ============================================================================
export async function getSiteSettings() {
  return safeFetch(
    async (payload) => {
      return await payload.findGlobal({ slug: "site-settings" });
    },
    null,
  );
}

// ============================================================================
// PAGES
// ============================================================================
export async function getPageBySlug(slug: string) {
  return safeFetch(
    async (payload) => {
      const res = await payload.find({
        collection: "pages",
        where: {
          and: [
            { slug: { equals: slug } },
            { status: { equals: "published" } },
          ],
        },
        depth: 2,
        limit: 1,
      });
      return res.docs[0] || null;
    },
    null,
  );
}
