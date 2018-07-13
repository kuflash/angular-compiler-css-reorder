import "reflect-metadata";

import { NgModule, } from "@angular/core";
import { AppModule } from "./app/app.module";
import { AppComponent } from "./app/app.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppModule,
    ],
})
export class MainModule {}
