#!/usr/bin/env node

import Cli from "#core/cli";
import ExternalResourceBuilder from "#lib/external-resource-builder";
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

const res = await ExternalResourceBuilder.build(
    [

        //
        Geolite2Asn,
    ],
    { "force": process.cli.options.force }
);

if ( !res.ok ) process.exit( 1 );
