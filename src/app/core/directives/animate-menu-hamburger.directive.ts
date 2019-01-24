import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appAnimateMenuHamburger]"
})
export class AnimateMenuHamburgerDirective {
  state: string = "menu";
  constructor(private el: ElementRef) {}

  @HostListener("click", ["$event.target"])
  onClick(event) {
    setTimeout(() => {
      this.el.nativeElement.children[0].innerText === "close"
        ? (this.el.nativeElement.children[0].innerText = "menu")
        : (this.el.nativeElement.children[0].innerText = "close");
    }, 400);
    console.log(this.el.nativeElement.children[0]);
  }
}
