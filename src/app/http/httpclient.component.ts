import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-httpclient',
    template: `
    <input type="text" [(ngModel)]="content" placeholder="todo">
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos"
        [class.completed]="!todo.completed">
        {{ todo.content }}
        <button (click)="changeTodo(todo)">change</button>
        <button (click)="toggleTodo(todo)">toggle</button>
        <button (click)="removeTodo(todo.id)">remove</button>
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
    styles: [`
    .completed {
      text-decoration: line-through;
    }
  `]
})
export class HttpClientComponent implements OnInit {
    todos: Todo[];
    content: string;

    constructor(private todo: TodoService) { }

    ngOnInit() {
        // 모든 todo를 획득하여 템플릿에 반영한다.
        this.todo.getAll()
            .subscribe({
                next: todos => this.todos = todos,
                error: error => console.error('[TodoService.getAll]', error)
            });
        
        this.shareReplayTodo();
    }

    // 새로운 todo를 생성하고 생성된 todo를 기존 todo에 추가하여 템플릿에 반영한다.
    addTodo() {
        if (!this.content) { return; }

        this.todo.add(this.content)
            .subscribe({
                next: todo => this.todos = [...this.todos, todo],
                error: error => console.error('[TodoService.add]', error)
            });

        this.content = '';
    }

    // todo의 내용 전체를 갱신하여 템플릿에 반영한다.
    changeTodo(todo: Todo) {
        this.todo.change(todo)
            .subscribe({
                next: newTodo => this.todos = this.todos.map(
                    todo => todo.id === newTodo.id ? newTodo : todo
                ),
                error: error => console.error('[TodoService.change]', error)
            });
    }

    // todo의 completed만을 수정하여 템플릿에 반영한다.
    toggleTodo(todo: Todo) {
        this.todo.toggle(todo)
            .subscribe({
                next: newTodo => this.todos = this.todos.map(
                    todo => todo.id === newTodo.id ? newTodo : todo
                ),
                error: error => console.error('[TodoService.toggle]', error)
            });
    }

    removeTodo(id: number) {
        this.todo.remove(id)
            .subscribe({
                next: () => this.todos = this.todos.filter(todo => todo.id !== id),
                error: (error) => console.error('[TodoService.remove]', error)
            });
    }

    shareReplayTodo() {
        const tods$ = this.todo.getTodos();
        // 첫 번째 구독
        tods$.subscribe(console.log);
        // 두 번째 구독
        tods$.subscribe(console.log);
    }
}
