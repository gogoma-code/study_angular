import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule, CoreModule
    ],
    providers: [ 
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
