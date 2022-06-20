import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  template: `
    <p>User List</p>
    <!-- 자식 컴포넌트를 위한 내비게이션 -->
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/user', user.id]"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active">{{ user.name }}</a>
      </li>
    </ul>
    <!-- 자식 컴포넌트를 위한 영역 -->
    <router-outlet></router-outlet>
  `,
  styles: [`
    a:hover, a.active { color: red; }
  `]
})
export class UserComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit(): void {
    this.users = [ 
      { id: 1, name: 'User-1' },
      { id: 2, name: 'User-2' },
    ];
  }

}
