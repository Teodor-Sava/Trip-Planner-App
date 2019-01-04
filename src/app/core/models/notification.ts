export class Notification {
    message: string;
    notificationType: NotificationType;
    constructor(message: string, notificationType: NotificationType) {
        this.message = message;
        this.notificationType = notificationType;
    }

    public getMessage(): string {
        // return the message based on the notification type (text should differ)
        return this.message;
    }
}

export enum NotificationType {
    SUCCESS = "success",
    DANGER = "danger"
}
