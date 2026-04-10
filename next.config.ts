import dns from "dns";
import net from "net";
import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// Force IPv4 resolution — Supabase returns only AAAA (IPv6) records
// and Vercel serverless doesn't support IPv6 on the hobby plan.
dns.setDefaultResultOrder("ipv4first");

// Monkey-patch net.Socket.connect to force IPv4 for all TCP connections
const origConnect = net.Socket.prototype.connect;
net.Socket.prototype.connect = function (options: any, ...args: any[]) {
  if (typeof options === "object" && options.host && !options.family) {
    options.family = 4;
  }
  return origConnect.call(this, options, ...args);
} as any;

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ["pg", "pg-pool"],
};

export default withPayload(nextConfig);
