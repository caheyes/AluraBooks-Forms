import { Directive, ElementRef, HostListener } from '@angular/core';

//caso eu deseje que seja uma classe no html
// @Directive({
//   selector: '.mudandoCor',
// })

@Directive({
  selector: '[mudarCor]'
})
export class MudarCorDirective {

  constructor(
    private eleRef: ElementRef
  ) { }

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.background = 'var(--azul)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.background = 'var(--laranja)';
  }
}
