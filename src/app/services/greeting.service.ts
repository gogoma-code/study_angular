import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  sayHi() { 
    return 'Hi GreetingService'; 
  }
}

@Injectable()
export class AnotherGreetingService {
  sayHi() { 
    return 'Hi AnotherGreetingService'; 
  }
}