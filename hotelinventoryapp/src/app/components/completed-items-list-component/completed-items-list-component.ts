import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-completed-items-list-component',
  imports: [],
  templateUrl: './completed-items-list-component.html',
  styleUrl: './completed-items-list-component.css',
})
export class CompletedItemsListComponent {
  completedItems = input.required<Todo[]>();
}