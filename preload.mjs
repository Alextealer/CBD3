import dns from "dns";
import net from "net";

dns.setDefaultResultOrder("ipv4first");

const origConnect = net.Socket.prototype.connect;
net.Socket.prototype.connect = function (options, ...args) {
  if (typeof options === "object" && options.host && !options.family) {
    options.family = 4;
  }
  return origConnect.call(this, options, ...args);
};
