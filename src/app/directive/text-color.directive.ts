import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective implements OnInit {

  // 호스트 요소에서 프로퍼티 바인딩한 값을 전달 받는다.
  // @Input() color: string;
  @Input('textColor') color: string;
  
  @Input() defaultColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}