import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-list',
  templateUrl: 'templates/todo-list.html'
})
export class TodoList {
  @Input() todos: Todo[];
}