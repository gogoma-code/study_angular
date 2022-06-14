import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  // 부모 컴포넌트가 전달한 상태 정보를 입력 프로퍼티에 바인딩한다.
  // @Input('users') users!: User[];
  
  private _users: User[];

  cntAdmin: number = 0;
  cntDeveloper: number = 0;
  cntDesigner: number = 0;

  constructor() {
    this._users = [];
  }

  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin = users.filter(({role}) => role === 'Administrator').length;
    this.cntDeveloper = users.filter( ({role}) => role === 'Developer').length;
    this.cntDesigner = users.filter( ({role}) => role === 'Designer').length;
    this._users = users;
  }

  get users() {
    return this._users;
  }

  @Output()
  removeUser = new EventEmitter<User>();
}
