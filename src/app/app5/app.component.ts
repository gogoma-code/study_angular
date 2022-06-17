import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        h1.h1-item-gubun { font-style: bold; background-color: gray; margin-top: 30px; }
    `]
})
export class AppComponent {
    constructor() { }
}