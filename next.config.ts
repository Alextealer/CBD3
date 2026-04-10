import dns from "dns";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// Force IPv4 resolution — Supabase returns only AAAA records and
// Vercel serverless doesn't support IPv6 on the free plan.
dns.setDefaultResultOrder("ipv4first");

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPayload(nextConfig);
