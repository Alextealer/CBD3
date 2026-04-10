export async function register() {
  // Force IPv4 DNS resolution — Supabase only returns AAAA (IPv6) records
  // and Vercel serverless doesn't support IPv6 on the hobby plan.
  const dns = await import("dns");
  dns.setDefaultResultOrder("ipv4first");

  // Also monkey-patch dns.lookup to always prefer IPv4
  const originalLookup = dns.lookup;
  (dns as any).lookup = function (
    hostname: string,
    optionsOrCb: any,
    cb?: any
  ) {
    if (typeof optionsOrCb === "function") {
      return originalLookup(hostname, { family: 4 }, optionsOrCb);
    }
    const opts =
      typeof optionsOrCb === "number"
        ? { family: optionsOrCb }
        : { ...optionsOrCb };
    opts.family = 4;
    return originalLookup(hostname, opts, cb);
  };
}
