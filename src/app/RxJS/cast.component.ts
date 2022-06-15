import { Component } from '@angular/core';

// ① RxJS 임포트
import { Subject, Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-castobservable',
    template: ``
})
export class CastObservableComponent {
    ngOnInit() {
        /* Unicast */
        const coldObservable$ = new Observable((observer: Observer<any>) => {
            // 랜덤 데이터 방출
            observer.next(Math.random())
        });

        /* Cold observable을 구독하는 모든 옵저버는 자신만을 위해 독립적으로 실행하는 옵저버블을 갖게 된다. */
        coldObservable$.subscribe({
            next: (value) => console.log(`1st Cold observable's observer: ${value}`)
        });

        coldObservable$.subscribe({
            next: (value) => console.log(`2nd Cold observable's observer: ${value}`)
        });

        /* Multicast */
        const subject = new Subject();
        const hotObservable$ = subject.asObservable();

        /* 구독하고 있는 모든 옵저버에게 부수 효과(side-effect)가 있다. */
        hotObservable$.subscribe({
            next: (value) => console.log(`1st HOt observable's observer: ${value}`)
        });

        hotObservable$.subscribe({
            next: (value) => console.log(`2nd Hot observable's observer: ${value}`)
        });

        // 랜덤 데이터 방출
        subject.next(Math.random());
    }
}