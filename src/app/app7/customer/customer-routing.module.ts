import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';

/* 기능 모듈 단위 라우팅 구성 */
const routes: Routes = [{ 
  path: 'customer', 
  component: CustomerComponent,
  children: [
    { path: ':id', component: CustomerDetailComponent }
  ]
}];

@NgModule({
  /* 기능 모듈 단위 라우터 등록  */
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule { }
