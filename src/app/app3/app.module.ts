import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app.component';
import { APP_CONFIG, MY_APP_CONFIG } from './app.config';
import { GreetingService, AnotherGreetingService } from '../services/greeting.service';
import { IsDevProvider, userServiceProvider } from '../services/user.service.provider';
import { Sibling1Component } from '../services/sibling1.component';
import { Sibling2Component } from '../services/sibling2.component';


@NgModule({
    declarations: [
        AppComponent,
        Sibling1Component, Sibling2Component,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [ 
        // GreetingService // 아래와 같음
        // { provide: GreetingService, useClass: GreetingService },
        // { provide: GreetingService, useClass: AnotherGreetingService },
        { provide: 'API_URL', useValue: 'http://localhost' },
        { provide: 'API_PORT', useValue: 4200 },
        { provide: 'API_PROD', useValue: false },
        { provide: APP_CONFIG, useValue: MY_APP_CONFIG },
        IsDevProvider, userServiceProvider
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
