import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        h1.h1-item-gubun { font-style: bold; background-color: gray; margin-top: 30px; }
        .span-mg-left-10 { margin-left: 10px; }
    `]
})
export class AppComponent {
    color: string = 'red';
    msg: string = 'button click';

    condition: boolean = false;;
    name: string = 'Lee yong-ki';

    isShow: boolean = true;
    items: Array<number> = [1, 2, 3];

    today: Date = new Date();
    price: number = 0.1234;
    collection: string[] = ['a', 'b', 'c', 'd', 'e'];
    str: string = 'abcdefghij';
    object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3 } };
    pi: number = 3.141592;
    num: number = 1.3495;
    second$ = interval(1000).pipe(take(10));

    status: boolean = false;
    prop: string = 'Hello';
    immutable: string = 'Hello';
    mutable = { name: 'Lee' };
}