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
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}
}
