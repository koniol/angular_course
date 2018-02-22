import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowContent]'
})
export class ShowContentDirective {

  private ele = this.el.nativeElement;
  private p = this.rendrerer.createElement('p');


  constructor(private el: ElementRef, private rendrerer: Renderer2) {
    this.ele = this.el.nativeElement;
    this.p = this.rendrerer.createElement('p');
   }

  @Input()
  private date: Date;

  @HostListener('mouseenter')
  moseenter(event: Event) {
    this.p.innerHTML = 'Data zakończenia: ' + this.date.toLocaleDateString();
    this.rendrerer.appendChild(this.ele, this.p);
  }

  @HostListener('mouseleave')
  moseleave(event: Event) {
    this.rendrerer.removeChild(this.ele, this.p);
  }
}
