import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
        <button (click)="crement(-1)">-</button>
        <button (click)="crement(1)">+</button>
    `
})
export class CounterComponent {
    @Input() count: number;
    @Output() countChange = new EventEmitter();

    crement(oper: number) {
        this.count += oper;
        this.countChange.emit(this.count)
    }
}