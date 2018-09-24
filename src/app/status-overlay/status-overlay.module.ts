import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatusOverlayComponent } from "./status-overlay.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatusOverlayComponent
  ],
  exports: [
    StatusOverlayComponent
  ]
})
export class StatusOverlayModule { }
