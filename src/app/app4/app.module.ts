import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ObservableComponent } from '../RxJS/observable.component'
import { Observable2Component } from '../RxJS/observable2.component';
import { ColdObservableComponent } from '../RxJS/cold-observable.component';
import { HotObservableComponent } from '../RxJS/hot-observable.component';
import { CastObservableComponent } from '../RxJS/cast.component';
import { OperatorObservableComponent } from '../RxJS/operator.component';
import { ObservableEventHttpComponent } from '../RxJS/event-http-component';

import { HttpClientComponent } from '../http/httpclient.component';

import { AuthInterceptor } from '../services/auth-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        ObservableComponent, Observable2Component, ColdObservableComponent, HotObservableComponent, 
        CastObservableComponent, OperatorObservableComponent, ObservableEventHttpComponent, ObservableEventHttpComponent,
        HttpClientComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [ 
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
