import { Todo, Category } from './types';

export let todos: Todo[] = [
  { id: 1, title: 'Learn tRPC', completed: false, categoryId: 1 },
  { id: 2, title: 'Build backend', completed: true, categoryId: 1 }
];

export let categories: Category[] = [
  { id: 1, name: 'Development' },
  { id: 2, name: 'Personal' }
];

let nextTodoId = 3;

export const getNextTodoId = () => nextTodoId++;