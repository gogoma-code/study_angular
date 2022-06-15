import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ObservableComponent } from '../RxJS/observable.component'
import { Observable2Component } from '../RxJS/observable2.component';
import { ColdObservableComponent } from '../RxJS/cold-observable.component';
import { HotObservableComponent } from '../RxJS/hot-observable.component';
import { CastObservableComponent } from '../RxJS/cast.component';
import { OperatorObservableComponent } from '../RxJS/operator.component';
import { ObservableEventHttpComponent } from '../RxJS/event-http-component';

@NgModule({
    declarations: [
        AppComponent,
        ObservableComponent, Observable2Component, ColdObservableComponent, HotObservableComponent, 
        CastObservableComponent, OperatorObservableComponent, ObservableEventHttpComponent, ObservableEventHttpComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [ 
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
