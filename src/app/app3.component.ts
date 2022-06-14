import { Component } from '@angular/core';
import { GreetingService } from './services/greeting.service';

@Component({
    selector: 'app-root',
    templateUrl: './app3.component.html',
    styles: [`
        h1.h1-item-gubun { font-style: bold; background-color: gray; margin-top: 30px; }
    `]
})
export class AppComponent {
    greeting: string;
    // greetingService: GreetingService;

    constructor(private greetingService: GreetingService) {
        // this.greetingService = new GreetingService();
    }
    sayHi() {
        this.greeting = this.greetingService.sayHi();
    }
}