import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app2.component';
import { TextBlueDirective } from './directive/text-blue.directive';
import { TextColorDirective } from './directive/text-color.directive';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { MyNgIfDirective } from './directive/my-ng-if.directive';
import { ReversePipe } from './pipe/reverse.pipe';
import { TodosComponent } from './pipe/todos.component';
import { LimitPipe } from './pipe/limit.pipe';
import { LifeCycleHookComponent } from './lifecycle/lifecycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective, TextColorDirective, MyDirectiveDirective, MyNgIfDirective, // directive
    ReversePipe, TodosComponent, LimitPipe, // pipe
    LifeCycleHookComponent // lifecycle-hook
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
