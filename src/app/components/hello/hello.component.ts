import { Component } from "@angular/core";

import "./hello.component.scss";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  host: {
    class: "hello",
  },
})
export class HelloComponent {}
