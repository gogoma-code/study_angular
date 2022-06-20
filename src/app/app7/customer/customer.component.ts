import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'

@Component({
  selector: 'app-customer',
  template: `
    <p>Customer List</p>
    <!-- 자식 컴포넌트를 위한 내비게이션 -->
    <ul>
      <li *ngFor="let customer of customers">
        <a [routerLink]="['/customer', customer.id]"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="active">{{ customer.name }}
        </a>
      </li>
    </ul>
    <!-- 자식 컴포넌트를 위한 영역 -->
    <router-outlet></router-outlet> 
  `,
  styles: [
  ]
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor() { }

  ngOnInit(): void {
    this.customers = [
      { id: 1, name: 'Customer-1' },
      { id: 2, name: 'Customer-2' },
    ]
  }

}
