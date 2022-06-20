import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    /* 라우트 모듈의 등록 */
    CustomerRoutingModule
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule { }
