import { Component } from '@angular/core';

export interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

@Component({
    selector: 'app-todos',
    template: `
        <input #todo type="text" />
        <button (click)="add(todo.value)">add</button>
        <ul>
            <li *ngFor="let todo of (todos | limit: 5)" (click)="complete(todo.id)" [class.completed]="todo.completed">{{todo.content}}</li>
        </ul>
        <pre>{{ todos | json }}</pre>
    `
})
export class TodosComponent {
    todos: Todo[] = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: false },
        { id: 3, content: 'Javascript', completed: false }
    ];

    add(content: string) {
        this.todos.push({ id: this.getNextId(), content: content, completed: false });
        // this.todos = [...this.todos, { id: this.getNextId(), content, completed: false }];
    }

    complete(id: number) {
        this.todos = this.todos.map((todo) => todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo);
    }

    private getNextId(): number {
        return !this.todos.length ? 1 : Math.max(...this.todos.map((todo) => todo.id)) + 1;
    }
}