# mdns-proxy

A very simple *Multicast DNS to DNS proxy* for Node.js. Resolves *A* and *AAAA* **mDNS** queries using the **DNS** subsystem.

Makes `mydomain.local` names work with OS X Yosemite (10.10) and iOS 8.2 (or perhaps 8.1 or 8.0 - not tested yet) again (see https://discussions.apple.com/thread/6555023?start=75&tstart=0).

While this proxy certainly works, it's still far from perfect.

Possible enhancements:
- pay attention to the TTL of DNS records (currently, a value of 1800 seconds is hardcoded)
- remove old entries from the cache (currently, it's trivial for an attacker to make the cache grow indefinitely)
- add support for "does not exist" replies (see https://tools.ietf.org/html/rfc6762#section-6.1)
