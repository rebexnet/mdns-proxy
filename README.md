# mdns-proxy

A very simple *Multicast DNS to DNS proxy* for Node.js. Resolves *A* and *AAAA* **mDNS** queries using the **DNS** subsystem.
Thanks goes to [mafintosh](https://github.com/mafintosh) for his [multicast-dns](https://github.com/mafintosh/multicast-dns) package that made this possible.

Makes `mydomain.local` names work with OS X Yosemite (10.10) and iOS 8.2 (and perhaps 8.1 or 8.0 - let us know) again (see [Apple support forum](https://discussions.apple.com/thread/6555023?start=75&tstart=0)).

To install the package, execute:

```
"npm install mdns-proxy -g"
```

Then, execute "mdns-proxy" command. **Note:** On Windows, you might need to add the machine's IP address as an additional argument.

While this app certainly works, it's still far from perfect. Possible enhancements:
- pay attention to the TTL of DNS records (currently, a value of 1800 seconds is hardcoded)
- remove old entries from the cache (currently, we simply clear the whole cache if too large)
- *add support for "does not exist" replies* (see [RFC 6762, Section 6.1](https://tools.ietf.org/html/rfc6762#section-6.1))
