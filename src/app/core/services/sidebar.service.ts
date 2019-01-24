import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  private _sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(true);
  constructor() {}

  public getSidebarState() {
    return this._sidebarState.asObservable();
  }

  public setSidebarState(newValue: boolean): void {
    this._sidebarState.next(newValue);
  }
}
