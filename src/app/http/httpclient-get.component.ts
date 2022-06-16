import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { tap, throwError, catchError } from 'rxjs';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface ErrorMessage {
  title: string; 
  message: string;
}

@Component({
  selector: 'app-httpclient-get',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
    
    <h3 class='title'>{{error}}</h3>
    <p class='message'>{{error}}</p>
  `
})
export class HttpClientGetComponent implements OnInit {
  todos: Todo[];
  error: ErrorMessage;

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

    // HTTP GET 요청, response
    this.http.get<Todo[]>(this.url, { observe: 'response' })
      .pipe(
        catchError(this.handleError),
        tap((res) => console.log(res)),
        tap((res) => console.log(res.headers)),
        tap((res) => console.log(res.status)),
      )
      .subscribe({
        next: res => { this.todos = res.body; },
        error: (error: ErrorMessage) => {this.error = error;}
      });
  }

  // 에러 핸들러 함수
  private handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
      // 클라이언트 측의 에러
      console.error(`Client-side error: ${error.error.message}`);
      message = `Client-side error: ${error.error.message}`
    } else {
      // 백엔트 측의 에러
      console.error(`Server-side error: ${error.status}`);
      message = `Server-side error: ${error.status}`;
    }

    // 사용자에게 전달할 메세지를 담은 옵저버블 반환
    return throwError(() => new Error(message));
  }   
}
