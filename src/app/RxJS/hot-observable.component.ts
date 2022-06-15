import { Component } from '@angular/core';

// ① RxJS 임포트
import { Subject } from 'rxjs';

@Component({
    selector: 'app-hotobservable',
    template: ``
})
export class HotObservableComponent {
    ngOnInit() {
        const subject = new Subject();
        const numbersBySubject$ = subject.asObservable();

        // 데이터 방출 -> 구독 전 방출이므로 의미 없음.
        subject.next(1);
        subject.next(2);
        subject.next(3);

        numbersBySubject$.subscribe({
            next: (value) => console.log(`1st subscription next: ${value}`),  //next
            error: (error) => console.log(`1st subscription error: ${error}`), // error
            complete: () => console.log('1st subscription complete')            // complete
        });

        numbersBySubject$.subscribe({
            next: value => console.log(`2nd subscription next: ${value}`),  //next
            error: error => console.log(`2nd subscription error: ${error}`), // error
            complete: () => console.log('2nd subscription complete')            // complete
        });

        // 데이터 방출 -> 구독 후 방출이므로 정상적으로 데이터 방출됨.
        subject.next(4);
        subject.next(5);
        subject.next(6);
    }
}
