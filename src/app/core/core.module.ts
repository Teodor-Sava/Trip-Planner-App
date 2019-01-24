import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./components/header/header.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AnimateMenuHamburgerDirective } from "./directives/animate-menu-hamburger.directive";

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    HeaderComponent,
    NotificationComponent,
    SidebarComponent,
    AnimateMenuHamburgerDirective
  ],
  exports: [HeaderComponent, NotificationComponent, SidebarComponent]
})
export class CoreModule {}
