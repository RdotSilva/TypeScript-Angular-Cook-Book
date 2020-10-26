import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'white',
    //   false,
    // );
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
