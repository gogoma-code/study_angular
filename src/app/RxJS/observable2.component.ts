import { Component, OnInit } from '@angular/core';

// ① RxJS 임포트
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable2',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X: {{ posX }} Y: {{ posY }}</h3>
  `
})
export class Observable2Component implements OnInit {
  mousePositon$ :Observable<MouseEvent>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // ② 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환)
    this.mousePositon$ = fromEvent<MouseEvent>(document, 'mousemove');

    // ③ 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePositon$.subscribe({
        next: (event: MouseEvent) => { 
            this.posX = event.clientX; 
            this.posY = event.clientY;
        },
        error: (e) => console.error(e),
        complete: () => console.log('complete')
      })
  }
}
