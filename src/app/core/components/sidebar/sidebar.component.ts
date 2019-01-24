import { SidebarService } from "./../../services/sidebar.service";
import { Component, OnInit, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, AfterViewInit {
  state: boolean = true;
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.state);
    this.sidebarService.getSidebarState().subscribe(state => {
      console.log(state);
      if (state !== undefined) {
        this.state = state;
      }
    });
  }
}
