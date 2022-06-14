import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirectiveDirective {
  // 프로퍼티 바인딩을 통한 상태 전달
  @Input() inputValue: string;
  // 일반 어트리뷰트의 정적 값의 전달
  @Input() staticValue: string;

  @HostListener('click') handleClick() {
    console.log('inputValue: ' + this.inputValue);   // 'button click'
    console.log('staticValue: ' + this.staticValue); // 'hi!'
  }
}