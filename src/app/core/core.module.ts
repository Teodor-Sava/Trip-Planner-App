import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent, NotificationComponent, SidebarComponent],
    exports: [HeaderComponent, NotificationComponent]
})
export class CoreModule {}
