import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { User2Component } from './user.component';

@Component({
  selector: 'user-list2',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <button (click)="changeFirstUserColor()">
      첫번째 사용자 배경색 변경
    </button>
    <button (click)="changeAllUserColor()">
      모든 사용자 배경색 변경
    </button>
  `
})
export class UserList2Component {
  // 부모 컴포넌트가 지정한 콘텐츠 중에서 템플릿 참조 변수 first을 가진 콘텐츠를 취득한다.
  @ContentChild('first') firstChild!: User2Component;
  // 부모 컴포넌트가 지정한 콘텐츠 중에서 UserComponent를 모두를 취득한다.
  @ContentChildren(User2Component) children!: QueryList<User2Component>;

  /* 
    ngAfterContentInit은 콘텐츠가 초기화됐을 때 실행되는 컴포넌트 생명주기 메소드이다.
    Angular가 콘텐츠를 초기화하기 이전에는 DOM에 접근할 수 없다.
  */
  /* 
    ngAfterViewInit은 뷰 초기화가 종료됐을 때 실행되는 컴포넌트 생명주기 메소드이다.
    @ContentChild, @ContentChildren ngAfterViewInit 이전에 초기화된다. ngAfterViewInit에서 참조하는 것이 안전하다.
  */
  ngAfterContentInit() {
    console.log(this.firstChild);
    this.children.forEach(child => console.log(child));
  }

  changeFirstUserColor() {
    this.firstChild.randomizeColor();
  }

  changeAllUserColor() {
    this.children.forEach(child => child.randomizeColor());
  }
}