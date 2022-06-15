import { Component } from '@angular/core';

// ① RxJS 임포트
import { Observable, from, Subscription, map, filter, tap,  } from 'rxjs';

@Component({
    selector: 'app-operatorobservable',
    template: `<p>{{ values }}</p>`
})
export class OperatorObservableComponent {
    myArray = [1, 2, 3, 4, 5];
    subscription: Subscription;
    values: number[] = [];

    ngOnInit() {
        const observable$ = from(this.myArray);

        this.subscription = observable$
            .pipe(
                map(item => item * 2),
                filter(item => item > 5),
                tap(item => console.log(item))
            )
            .subscribe({
                next: (v) => this.values.push(v),
                error: (e) => console.error(e),
                complete: () => console.log('Streaming complete')
            });
        
        console.log('myArray ', this.myArray);
        console.log('values: ', this.values);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}