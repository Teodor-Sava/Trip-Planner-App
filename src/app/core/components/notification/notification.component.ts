import { Notification } from "./../../models/notification";
import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    AfterViewInit,
    Renderer2,
    Input
} from "@angular/core";

@Component({
    selector: "app-notification",
    templateUrl: "./notification.component.html",
    styleUrls: ["./notification.component.scss"]
})
export class NotificationComponent implements OnInit, AfterViewInit {
    @ViewChild("element") tref: ElementRef;

    private _notification: Notification;
    get notification(): Notification {
        return this._notification;
    }

    @Input("notification")
    set notification(notification: Notification) {
        this._notification = new Notification(
            notification.message,
            notification.notificationType
        );
        console.log(this.notification);
    }

    constructor(private renderer: Renderer2) {}

    ngOnInit() {}

    ngAfterViewInit() {
        setTimeout(() => {
            this.renderer.addClass(
                this.tref.nativeElement,
                "active-notification"
            );
        }, 200);
    }
}
