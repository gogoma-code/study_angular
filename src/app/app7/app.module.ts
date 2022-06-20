import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';

import { AppComponent } from './app.component';
import { HomeComponent, ServiceComponent, AboutComponent, NotFoundComponent, TodosComponent, TodoDetailComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, ServiceComponent, AboutComponent, NotFoundComponent, TodosComponent, TodoDetailComponent, 
    // CustomerComponent, CustomerDetailComponent, UserComponent, UserDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    UserModule, CustomerModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
