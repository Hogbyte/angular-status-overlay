import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StatusOverlayModule } from "./status-overlay/status-overlay.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StatusOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
