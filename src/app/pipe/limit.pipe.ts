import { Pipe, PipeTransform } from '@angular/core'
import { Todo } from './todos.component'

@Pipe({
    name: 'limit',
    pure: false
})
export class LimitPipe implements PipeTransform {
    transform(todos: Todo[], limit: number): Todo[] {
        return todos.filter((el, i) => i < limit);
    }
}