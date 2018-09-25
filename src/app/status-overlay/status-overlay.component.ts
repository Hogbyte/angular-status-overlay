import { Component, Input } from "@angular/core";

// NOTE: Layout based on: https://www.w3schools.com/howto/howto_css_overlay.asp

const DEFAULT_LOADING_TEXT: string = "Loading...";
const DEFAULT_ERROR_TEXT: string = "An error has occurred.";

@Component({
  selector: "app-status-overlay",
  templateUrl: "./status-overlay.component.html",
  styleUrls: ["./status-overlay.component.css"]
})
export class StatusOverlayComponent {
  @Input() loadingText: string = DEFAULT_LOADING_TEXT;
  @Input() errorText: string = DEFAULT_ERROR_TEXT;
  private _isLoading: boolean = false;
  private _isError: boolean = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  get isError(): boolean {
    return this._isError;
  }

  get showOverlay(): boolean {
    return this._isError || this._isLoading;
  }

  @Input()
  set isLoading(value: boolean) {
    this._isLoading = value;
    if (value) {
      this._isError = false;
    }
  }

  @Input()
  set isError(value: boolean) {
    this._isError = value;
    if (value) {
      this._isLoading = false;
    }
  }
}
