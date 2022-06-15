import { UserService } from "./user.service";
import { MockUserService } from "./mock-user.service";

const userServiceFactory = (isDev: boolean) => isDev ? new MockUserService() : new UserService();

export const userServiceProvider = {
    provide : UserService,
    useFactory: userServiceFactory,
    deps: ['isDev']
}

export const IsDevProvider = {
    provide: 'isDev',
    useValue: true
}