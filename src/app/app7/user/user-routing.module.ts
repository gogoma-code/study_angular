import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

import { AuthChildGuard } from '../guard/auth.guard';

/* 기능 모듈 단위 라우팅 구성 */
const routes: Routes = [{ 
  path: 'user', 
  component: UserComponent,
  canActivateChild: [AuthChildGuard],
  children: [
    { path: ':id', component: UserDetailComponent }
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthChildGuard
  ],
})
export class UserRoutingModule { }
