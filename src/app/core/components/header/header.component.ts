import { SidebarService } from "./../../services/sidebar.service";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("rotatedIcon", [
      state("menu", style({ transform: "rotate(0)" })),
      state("close", style({ transform: "rotate(0)" })),
      transition("menu => close", [
        style({ transform: "rotate(360deg)" }),
        animate("500ms ease-out")
      ]),
      transition("close => menu", [
        style({ transform: "rotate(360deg)" }),
        animate("500ms ease-out")
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  sidebarState: boolean;
  menuIconState: string = "menu";
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe((state: boolean) => {
      this.sidebarState = state;
    });
  }

  onToggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarState);
    this.menuIconState = this.sidebarState ? "menu" : "close";
    console.log(this.menuIconState);
  }
}
