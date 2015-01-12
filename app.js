var dns = require('dns');
var mdns = require('multicast-dns')({ interface: undefined });

// set the interface option to a network interface name or IP to use a specific network interface
// query cache
var cache = {};

// hardcoded TTL value
var ttl = 1800;

// handle Multicast DNS queries
mdns.on('query', function (query) {
    var time = new Date().getTime() / 1000;

    //console.log('time:', time);
    //console.log('query:', query);
    query.questions.forEach(function (q) {
        switch (q.type) {
            case "A":
            case "AAAA":
                break;
            default:
                return;
        }

        // look for the result in our cache
        var key = q.name + " [" + q.type + "]";
        var value = cache[key];
        if (typeof value != 'undefined') {
            if ((time - value.time) < ttl) {
                if (value.response != null) {
                    //console.log("cached: ", key, value.response);
                    mdns.response(value.response);
                } else {
                    //console.log("ignoring: ", key);
                }
                return;
            }
        }

        // resolve the query using DNS
        dns.resolve(q.name, q.type, function (err, addresses) {
            if (err != null) {
                // on error, don't respond but add entry to our cache
                console.log("not found: ", key, err);
                cache[key] = { time: time, response: null };
            } else {
                // respond with the first address found
                var address = addresses[0];
                var response = [{ name: q.name, type: q.type, ttl: ttl, data: address }];
                console.log("resolved: ", key, response);
                mdns.response(response);

                // add entry to our cache
                cache[key] = { time: time, response: null };
            }
        });
    });
});

console.log("Listening for mDNS queries...");
