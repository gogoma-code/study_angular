import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// ① 디렉티브의 식별자를 @Directive 메타데이터 객체의 selector 프로퍼티에 지정한다.
@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  // ② 생성자 함수에 주입된 ElementRef는 컴포넌트의 호스트 요소를 반환한다.
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  handleMouseEnter() {
    this.textColor('red');
  }

  @HostListener('mouseleave')
  handleMoudeLeave() {
    this.textColor('blue');
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
