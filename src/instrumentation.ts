import dns from "dns";

// Force IPv4 DNS resolution — Supabase only returns AAAA (IPv6) records
// and Vercel serverless doesn't support IPv6 on the hobby plan.
dns.setDefaultResultOrder("ipv4first");

export async function register() {
  // This runs once when the Next.js server starts
  dns.setDefaultResultOrder("ipv4first");
}
