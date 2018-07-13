// Zone.js polyfill
import "es6-shim";
import "reflect-metadata";
import "zone.js/dist/zone";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// enable prod for faster renders
enableProdMode();

import { MainModule } from "./browser.module";

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic().bootstrapModule(MainModule);
});
