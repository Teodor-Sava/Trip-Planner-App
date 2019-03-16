import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appFlex]'
})
export class FlexDirective implements OnInit {
  @Input() appFlex;
  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.el);
    let cssClass = 'flex';
    if (this.appFlex) {
      cssClass += `-${this.appFlex}`;
    }
    this.renderer.addClass(this.el.nativeElement, cssClass);
  }

}
