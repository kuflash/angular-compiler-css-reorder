import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "my-app",
  template: `<app-hello></app-hello>`,
})
export class AppComponent {}
