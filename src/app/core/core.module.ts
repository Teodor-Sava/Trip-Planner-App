import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./components/header/header.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AnimateMenuHamburgerDirective } from "./directives/animate-menu-hamburger.directive";
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FlexDirective } from './directives/layout/flex.directive';
import { FlexDirectionDirective } from './directives/layout/flex-direction.directive';
import { FlexWrapDirective } from './directives/layout/flex-wrap.directive';
import { FlexAlignDirective } from './directives/layout/flex-align.directive';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [
    HeaderComponent,
    NotificationComponent,
    SidebarComponent,
    AnimateMenuHamburgerDirective,
    SearchComponent,
    LoaderComponent,
    FlexDirective,
    FlexDirectionDirective,
    FlexWrapDirective,
    FlexAlignDirective
  ],
  exports: [HeaderComponent, NotificationComponent, SidebarComponent, LoaderComponent, FlexDirective]
})
export class CoreModule { }
