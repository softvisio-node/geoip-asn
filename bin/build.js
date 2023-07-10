#!/usr/bin/env node

import Cli from "#core/cli";
import Geolite2Asn from "#lib/external-resources/geolite2-asn";

const CLI = {
    "title": "Update resources",
    "options": {
        "force": {
            "description": "Force build",
            "default": false,
            "schema": {
                "type": "boolean",
            },
        },
    },
};

await Cli.parse( CLI );

var res;

res = await new Geolite2Asn().build( { "force": process.cli.options.force } );
if ( !res.ok ) process.exit( 1 );
