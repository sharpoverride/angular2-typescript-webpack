import "es6-shim";
import "es6-promise";
import "zone.js/lib/browser/zone-microtask";

require("es7-reflect-metadata/dist/browser");
var error = (<any>Error);
error["stackTraceLimit"] = Infinity;
Zone["longStackTraceZone"] = require("zone.js/lib/zones/long-stack-trace.js");

import "angular2/platform/browser";
import "angular2/platform/common_dom";
import "angular2/router";
import "angular2/http";
import "angular2/core";

import "rxjs";

import {bootstrap} from "angular2/platform/browser"
import AppComponent from "./app.component";

bootstrap(AppComponent);
