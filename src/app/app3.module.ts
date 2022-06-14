import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule 임포트

import { AppComponent } from './app3.component';
import { GreetingService } from './services/greeting.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [ 
        // GreetingService // 아래와 같음
        { provide: GreetingService, useClass: GreetingService }
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
