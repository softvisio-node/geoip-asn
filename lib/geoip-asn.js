import MMDB from "#core/mmdb";
import fs from "node:fs";
import CacheLru from "#core/cache/lru";
import externalResources from "#core/external-resources";

const cache = new CacheLru( { "maxSize": 1000 } );

var mmdb;

const resource = await externalResources
    .add( "softvisio-node/geoip-asn/resources/geolite2-asn" )
    .on( "update", () => ( mmdb = null ) )
    .check();

class GeoipAsn {
    constructor () {}

    // public
    get ( ipAddress ) {
        mmdb ??= new MMDB( fs.readFileSync( resource.location + "/GeoLite2-ASN.mmdb" ), { cache } );

        return mmdb.get( ipAddress );
    }
}

export default new GeoipAsn();
