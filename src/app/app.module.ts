import { NgModule } from "@angular/core";

import "../styles/common.scss";

import { HelloComponent } from "./components/hello/hello.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [HelloComponent, AppComponent],
})
export class AppModule {}
