import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserListComponent } from './user-list/user-list.component';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './child/children.component';
import { SingleContentProjectionComponent } from './content-projection/single-content-projection.component'
import { MultiContentProjectionComponent } from './content-projection/multi-content-projection.component';
import { UserList2Component } from './content-projection/user-list.component';
import { User2Component } from './content-projection/user.component';
import { HostParent } from './host-selector/host-parent';
import { HostChild } from './host-selector/host-child';
// import { HomeComponent } from './home/home.component';
// import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserListComponent,
    CounterComponent,
    ChildComponent,
    ChildrenComponent,
    SingleContentProjectionComponent, MultiContentProjectionComponent,
    UserList2Component, User2Component,
    HostParent, HostChild
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
