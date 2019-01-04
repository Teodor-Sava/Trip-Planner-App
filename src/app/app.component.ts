import { Notification } from "./core/models/notification";
import { NotificationService } from "./core/services/notification.service";
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "trip-planner";
    notification;
    constructor(private notificationService: NotificationService) {}

    ngOnInit() {
        this.notificationService
            .getNotificationContent()
            .subscribe((notification: Notification) => {
                console.log(notification);
                if (notification) {
                    this.notification = new Notification(
                        notification.message,
                        notification.notificationType
                    );

                    setTimeout(() => {
                        this.notification = undefined;
                    }, 2000);
                }
            });
    }
}
