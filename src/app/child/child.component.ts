import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div *ngIf="isShow">{{ contentText }}</div>
  `,
  styles: [`
    div {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      background-color: gray;
      color: white;
      margin-top: 10px;
    }
  `]
})
export class ChildComponent {
  // 부모 컴포넌트가 자식 컴포넌트의 뷰를 감추거나 보이기 위해 직접 접근할 프로퍼티.
  isShow = true;
  contentText = 'Child';

  // 부모 컴포넌트가 자식 컴포넌트의 contentText 프로퍼티를 변경하기 위해 직접 접근할 메소드
  changeText(text: string) {
    this.contentText = text;
  }
}