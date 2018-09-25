import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isLoading: boolean = false;
  isError: boolean = false;

  setLoading(): void {
    this.isLoading = true;
    this.isError = false;
  }

  setError(): void {
    this.isLoading = false;
    this.isError = true;
  }

  setDefault(): void {
    this.isLoading = false;
    this.isError = false;
  }
}
