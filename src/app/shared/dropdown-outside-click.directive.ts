import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdownOutside]',
})
export class DropdownOutsideDirective {
  constructor(private elRef: ElementRef) {}
}
