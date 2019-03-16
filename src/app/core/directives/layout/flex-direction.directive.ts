import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFlexDirection]'
})
export class FlexDirectionDirective implements OnInit {
  @Input() appFlexDirection: string;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    console.log(this.appFlexDirection);
  }
}
