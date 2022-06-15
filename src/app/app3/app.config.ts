import { InjectionToken } from "@angular/core";

export interface AppConfig {
    url: String;
    port: String;
}

export const MY_APP_CONFIG: AppConfig = {
    url: 'http://localhost',
    port: '4200'
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


// { provide: APP_CONFIG, useValue: MY_APP_CONFIG }, // 로 해도 되고 아래 AppConfigProvider 만들어서 지정해도 됨.
export const AppConfigProvider = {
    provide: APP_CONFIG,
    userValue: MY_APP_CONFIG
}