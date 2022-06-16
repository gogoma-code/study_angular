import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    selector: 'app-httpclient-post',
    template: `
    <input type="text" [(ngModel)]="content" placeholder="todo">
    <button (click)="add()">Add</button>
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `
})
export class HttpClientPostComponent implements OnInit {
    todos: Todo[];
    content: string;

    url = 'http://localhost:3000/todos';

    // HttpClient를 컴포넌트에 주입
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getTodos()
            .subscribe(todos => this.todos = todos);
    }

    // 새로운 todo를 생성한다
    add() {
        if (!this.content) { return; }

        this.addTodo()
            .subscribe(todo => this.todos = [...this.todos, todo]);

        this.content = '';
    }

    // 서버에 모든 todo를 요청한다.
    private getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url);
    }

    // 서버에 새로운 todo의 추가를 요청한다.
    private addTodo(): Observable<Todo> {
        /* 서버로 전송할 요청 페이로드
           id는 json-server에 의해 자동 생성된다 */
        const payload = { content: this.content, completed: false };

        return this.http.post<Todo>(this.url, payload);
    }
}
