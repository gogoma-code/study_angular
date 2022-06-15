import { Component, OnInit } from '@angular/core';

// ① RxJS 임포트
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-coldobservable',
    template: ``
})
export class ColdObservableComponent implements OnInit {
    ngOnInit() {
        // 옵저버블 생성
        const numbers$ = new Observable((observer: Observer<any>) => {
            console.log('[New subscription created]');

            let i = 1;
            const interval = setInterval(() => i <= 5 ? observer.next(i++) : observer.complete(), 1000);

            return () => clearInterval(interval);
        });

        numbers$.subscribe({
            next: (value) => console.log(`1st subscription next: ${value}`),  //next
            error: (error) => console.log(`1st subscription error: ${error}`), // error
            complete: () => console.log('1st subscription complete')            // complete
        });

        setTimeout(() => numbers$.subscribe({
            next: value => console.log(`2nd subscription next: ${value}`),  //next
            error: error => console.log(`2nd subscription error: ${error}`), // error
            complete: () => console.log('2nd subscription complete')            // complete
        }), 3000);
    }
}
