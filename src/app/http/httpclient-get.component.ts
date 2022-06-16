import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-httpclient-get',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `
})
export class HttpClientGetComponent implements OnInit {
  todos: Todo[];
  // url = 'http://localhost:3000/todos';
  /* NOTE:
    stackblitz.com에서는 json-server를 실행할 수 없기 때문에 
    now를 사용하여 json-server를 호스팅하였다. */
  url = 'http://localhost:3000/todos';

  // HttpClient를 컴포넌트에 주입
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders()
                        .set('Content-Type', 'application/json')
                        .set('Authorization', 'my-auth-token');

    const params = new HttpParams()
                        .set('id', 3)
                        .set('completed', 'false');

    // HTTP GET 요청
    this.http.get<Todo[]>(this.url, { params })
    // this.http.get<Todo[]>('/textfile.txt', { responseType: 'text' }')
      /* 요청 결과를 프로퍼티에 할당한다.
         get 메소드는 Observable<Object>를 반환한다.
         이때 타입이 일치하지 않기 때문에 컴파일 에러가 발생한다. */
      .subscribe({
        next: todos => { this.todos = todos; console.log(this.todos); },
        error: err => console.error(err)
      });
      /* NOTE: 
        stackblitz.com에서는 에러가 발생하지 않지만 
        Angular CLI를 통해 생성한 프로젝트에서는 에러가 발생한다. */
  }
}
