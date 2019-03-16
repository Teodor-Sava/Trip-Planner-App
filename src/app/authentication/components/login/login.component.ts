import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import {
    Notification,
    NotificationType
} from 'src/app/core/models/notification';

import * as URL from '../../../core/constants/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginMessage: Notification;
    facebookUrl: string = URL.FACEBOOK_LOGIN_URL;

    constructor(
        private authenticationService: AuthenticationService,
        private fb: FormBuilder,
        public notificationService: NotificationService
    ) {
        this.loginForm = this.fb.group({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() { }

    onSubmit() {
        if (this.loginForm.valid) {
            this.authenticationService.login(this.loginForm.value).subscribe(
                response => {
                    if (response) {
                        this.loginMessage = new Notification(
                            'You have logged in to your account',
                            NotificationType.SUCCESS
                        );
                        this.notificationService.setNotificationContent(
                            this.loginMessage
                        );
                    }
                },
                err => {
                    if (err) {
                        this.notificationService.setNotificationContent(
                            (this.loginMessage = new Notification(
                                'Authentication failed',
                                NotificationType.DANGER
                            ))
                        );
                    }
                }
            );
        }
    }
}
