import { Component, Input, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

// NOTE: Layout based on: https://www.w3schools.com/howto/howto_css_overlay.asp

const DEFAULT_LOADING_TEXT: string = "Loading...";
const DEFAULT_ERROR_TEXT: string = "An error has occurred.";

@Component({
  selector: "app-status-overlay",
  templateUrl: "./status-overlay.component.html",
  styleUrls: ["./status-overlay.component.css"]
})
export class StatusOverlayComponent implements OnDestroy {
  @Input() loadingText: string = DEFAULT_LOADING_TEXT;
  @Input() errorText: string = DEFAULT_ERROR_TEXT;
  private _isLoading: boolean = false;
  private _isError: boolean = false;
  private _dataSource: Observable<any> = null;
  private _dataSourceSubscription: Subscription = null;

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

  @Input()
  set dataSource(value: Observable<any>) {
    // Verify change
    if (this._dataSource === value) {
      return;
    }

    // Close old subscription (if any)
    if (this._dataSourceSubscription) {
      this._dataSourceSubscription.unsubscribe();
      this._dataSourceSubscription = null;
    }

    // Update status based on the observable state
    this.isLoading = true;
    this._dataSourceSubscription = value.subscribe(
      // Success
      () => { this.isLoading = false; },
      // Error
      () => { this.isError = true; }
    );
    this._dataSource = value;
  }

  ngOnDestroy(): void {
    if (this._dataSourceSubscription) {
      this._dataSourceSubscription.unsubscribe();
    }
  }
}
