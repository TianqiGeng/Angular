import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHoverer]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HovererDirective {
  @Input() appHoverer;
  constructor(private elementRef: ElementRef,
    private renderer: Renderer) {
  }

  onMouseEnter() {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'color', this.appHoverer);
  }
  onMouseLeave() {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'color', 'black');
  }

}
