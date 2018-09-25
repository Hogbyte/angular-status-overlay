import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  isLoading: boolean = false;
  isError: boolean = false;
  dataStream$: Observable<any> = null;
  httpResponse: any = "NO DATA";

  constructor(private http: HttpClient) {}

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

  loadByObservable(): void {
    this.dataStream$ = this.http.get("https://swapi.co/api/people");
    this.dataStream$.subscribe((response: any ) => { this.httpResponse = response; });
  }
}
