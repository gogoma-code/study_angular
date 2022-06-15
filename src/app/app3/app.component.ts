import { Component, Inject, Optional } from '@angular/core';
import { GreetingService, AnotherGreetingService } from '../services/greeting.service';
import { UserService } from '../services/user.service';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        h1.h1-item-gubun { font-style: bold; background-color: gray; margin-top: 30px; }
    `]
})
export class AppComponent {
    greeting: string;
    // greetingService: GreetingService;

    constructor(
            @Optional() private greetingService: GreetingService, 
            @Inject('API_URL') public apiUrl: string, @Inject('API_PORT') public apiPort: number, @Inject('API_PROD') public apiProd: boolean,
            public userService: UserService,
            @Inject(APP_CONFIG) public appConfig: AppConfig
        ) {
        // this.greetingService = new GreetingService();

        // 등록된 providers 에 따라 인스턴스가 달라진다.
        console.log('GreetingService: ', greetingService instanceof GreetingService);
        console.log('AnotherGreetingService: ', greetingService instanceof AnotherGreetingService);
        console.log('apiUrl: ', apiUrl);
        console.log('apiPort: ', apiPort);
        console.log('apiProd: ', apiProd);
        console.log('appConfig: ', appConfig);
    }
    sayHi() {
        if(this.greetingService != null) {
            this.greeting = this.greetingService.sayHi();
        } else {
            this.greeting = 'Optional greeting';
        }
    }
}