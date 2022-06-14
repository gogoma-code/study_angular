import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { User } from './models/user.model';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './child/children.component';

export interface Checkbox { 
  id: number; 
  label: string;
  checked: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // myChild 프로퍼티에 자식 컴포넌트 ChildComponent의 인스턴스가 바인딩된다.
  @ViewChild(ChildComponent) myChild!: ChildComponent;

  @ViewChildren(ChildrenComponent) 
  myChildren!: QueryList<ChildrenComponent>;

  @ViewChild('Heading1') myHeading!: ElementRef;
  @ViewChildren('Heading2, Heading3') myHeadings!: QueryList<ElementRef>;

  checkboxs: Checkbox[] =[
    {id: 1, label: 'HTML', checked: true},
    {id: 2, label: 'CSS', checked: false},
    {id: 3, label: 'Javascript', checked: false}
  ];
  active = false;

  // 자식 컴포넌트와 공유할 상태 정보
  users: User[];

  constructor() {
    this.users = [ 
      new User(1, 'Lee', 'Administrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer')
    ];
  }

  // 사용자 추가
  addUser(name: string, role: string): void {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
      console.log(this.users);
    }
  }

  // 새로운 사용자의 id를 취득
  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }

  // 해당 사용자 제거
  removeUser(user: User) {
    this.users = this.users.filter(({ id }) => id !== user.id);
  }

  increase(counter: CounterComponent) {
    counter.increase();
  }

  decrease(counter: CounterComponent) {
    counter.increase();
  }

  toggle() {
    // 자식 컴포넌트의 프로퍼티를 직접 변경할 수 있다.
    this.myChild.isShow = !this.myChild.isShow;
  }

  toggle2() {
    this.active = !this.active;
    this.myChildren.forEach(child => child.checkbox.checked = this.active);
  }

  changeText() {
    // 자식 컴포넌트의 메소드를 직접 실행할 수 있다.
    this.myChild.changeText(this.myChild.contentText === 'Hello' ? 'Child' : 'Hello');
  }
  
  ngAfterViewInit() {
    console.log(this.myHeading);
    this.myHeadings.forEach((child) => console.log(child));
  }
}
