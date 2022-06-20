import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  template: `
    <ul>
    <li *ngFor="let todo of todos">
        <a [routerLink]="['/todo', todo.id]">
          {{ todo.content }}
        </a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  ngOnInit(): void {
    this.todos = [
      { id: 3, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false },
    ]
  }

}
