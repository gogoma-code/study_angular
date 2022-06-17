import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserForm2Component } from '../user-form/user-form2.component';
import { CounterComponent } from '../user-form/CounterComponent';
import { VlidComponent } from '../user-form/valid.component';
import { ReactiveComponent } from '../user-form/reactive-form.component';
import { UserFormExamComponent } from './user-form.component';

@NgModule({
    declarations: [
        AppComponent,
        UserFormComponent, UserForm2Component, CounterComponent, VlidComponent,
        ReactiveComponent,
        UserFormExamComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule
    ],
    providers: [ 
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
