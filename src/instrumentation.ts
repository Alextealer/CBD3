export async function register() {
  // Force IPv4 for all TCP connections — Supabase only returns AAAA (IPv6)
  // records and Vercel serverless doesn't support IPv6.
  const net = await import("net");
  const origConnect = net.Socket.prototype.connect;
  net.Socket.prototype.connect = function (options: any, ...args: any[]) {
    if (typeof options === "object" && options.host && !options.family) {
      options.family = 4;
    }
    return origConnect.call(this, options, ...args);
  } as any;
}
