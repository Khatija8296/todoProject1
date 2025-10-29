export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  categoryId: number;
  priority?: number;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: number;
  name: string;
  color?: string;
  createdAt?: string;
}