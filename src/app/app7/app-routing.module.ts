import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 컴포넌트 임포트
import { 
  HomeComponent, 
  ServiceComponent, 
  AboutComponent, 
  NotFoundComponent,
  TodosComponent,
  TodoDetailComponent
} from './pages/index';

// import { UserComponent, UserDetailComponent } from './user/index';
// import { CustomerComponent, CustomerDetailComponent } from './customer/index';

import { AuthGuard } from './guard/auth.guard';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'todos', component: TodosComponent },
  // { path: 'todo/:id', component:TodoDetailComponent },
  { path: 'todo/:id', component: TodoDetailComponent, data: { title: 'Todos', sidebar: true } },
  // { path: 'user', component: UserComponent, children: [ { path: ':id', component: UserDetailComponent }] },
  // { path: 'customer', component: CustomerComponent, children: [ { path: ':id', component: CustomerDetailComponent }] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* 모든 라우트 구성을 포함한 모듈을 생성하고 라우팅 모듈에 추가 */
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }