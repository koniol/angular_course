import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckedImg]'
})
export class CheckedImgDirective implements OnInit {


  constructor(private li: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    const li = this.li.nativeElement;
    this.renderer.addClass(li, 'listImage');
  }


}
