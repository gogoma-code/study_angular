import { Component, OnInit } from '@angular/core';
// RxJS 임포트
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: ''
})
export class ObservableComponent implements OnInit {
  ngOnInit() {
    // 옵저버블이 구독될 때 호출되는 구독 함수
    const subscriber = (observer: Observer<any>) => {
      try {
        // next 노티피케이션 방출
        observer.next(1);
        observer.next(2);

        // throw new Error('Something wrong!');

        // complete 노티피케이션 방출
        observer.complete();
      } catch(e) {
        // error 노티피케이션 방출
        observer.error(e);
      } finally {
        // 구독 해지될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed!')
      }
    }

    // 옵저버블 생성
    const observable$ = new Observable(subscriber);

    // 구독(Subscription)
    observable$.subscribe({
        // 옵저버블이 방출한 next 노티피케이션에 반응하는 next 메소드 
        next: (v) => console.log(v),
        // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드 
        error: (e) => console.error(e),
        // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드 
        complete: () => console.log('complete') 
    })
  }
}
