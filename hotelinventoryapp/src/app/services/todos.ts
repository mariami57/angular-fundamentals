import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [{
    title: 'Todo 1',
    completed: false,
    userId: 1,
    id: 1, 
    priority: 'high'
  }, 
  {
    title: 'Todo 2',
    completed: true,
    userId: 1,
    id: 2,
    priority: 'medium'
  },

  {
    title: 'Todo 3',
    completed: false,
    userId: 1,
    id: 3,
    priority: 'low'
  },

  {
    title: 'Todo 4',
    completed: false,
    userId: 1,
    id: 4,
    priority: 'high'
  }
];

  constructor() { }
}
