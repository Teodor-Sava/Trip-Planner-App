import { Notification } from "./../models/notification";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class NotificationService {
    private _notification$: BehaviorSubject<Notification> = new BehaviorSubject<
        Notification
    >(undefined);

    constructor() {}

    getNotificationContent(): Observable<Notification> {
        return this._notification$.asObservable();
    }
    setNotificationContent(notification: Notification) {
        this._notification$.next(notification);
    }
}
