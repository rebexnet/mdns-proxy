# mdns-proxy

A very simple *Multicast DNS to DNS proxy* for Node.js. Resolves *A* and *AAAA* **mDNS** queries using the **DNS** subsystem.
Thanks goes to [mafintosh](https://github.com/mafintosh) for his [multicast-dns](https://github.com/mafintosh/multicast-dns) package that made this possible.

Makes `mydomain.local` names work with OS X Yosemite (10.10) and iOS 8.2 (and perhaps 8.1 or 8.0 - let us know) again (see https://discussions.apple.com/thread/6555023?start=75&tstart=0).

**Running this on Windows?** You may need to specify the IP address to listen to when starting app.js - just run:
```shell
node app.js my_ip_address
```

While this app certainly works, it's still far from perfect. Possible enhancements:
- pay attention to the TTL of DNS records (currently, a value of 1800 seconds is hardcoded)
- remove old entries from the cache (currently, we simply clear the whole cache if too large)
- *add support for "does not exist" replies* (see https://tools.ietf.org/html/rfc6762#section-6.1)
