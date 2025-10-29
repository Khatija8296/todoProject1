import Database from 'better-sqlite3';
import path from 'path';
import { Todo, Category } from './types';

const dbPath = path.join(__dirname, '../todo.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

export class TodoDatabase {
  // Todo operations
  static getAllTodos(): Todo[] {
    const stmt = db.prepare(`
      SELECT id, title, description, completed, priority, category_id as categoryId, 
             due_date as dueDate, created_at as createdAt, updated_at as updatedAt
      FROM todos ORDER BY created_at DESC
    `);
    return stmt.all() as Todo[];
  }

  static addTodo(title: string, categoryId: number): Todo {
    const stmt = db.prepare(`
      INSERT INTO todos (title, category_id) 
      VALUES (?, ?) 
      RETURNING id, title, description, completed, priority, category_id as categoryId,
                due_date as dueDate, created_at as createdAt, updated_at as updatedAt
    `);
    return stmt.get(title, categoryId) as Todo;
  }

  static toggleTodo(id: number): Todo {
    const stmt = db.prepare(`
      UPDATE todos SET completed = NOT completed, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ? 
      RETURNING id, title, description, completed, priority, category_id as categoryId,
                due_date as dueDate, created_at as createdAt, updated_at as updatedAt
    `);
    const result = stmt.get(id) as Todo;
    if (!result) throw new Error('Todo not found');
    return result;
  }

  static deleteTodo(id: number): Todo {
    const selectStmt = db.prepare(`
      SELECT id, title, description, completed, priority, category_id as categoryId,
             due_date as dueDate, created_at as createdAt, updated_at as updatedAt
      FROM todos WHERE id = ?
    `);
    const todo = selectStmt.get(id) as Todo;
    if (!todo) throw new Error('Todo not found');

    const deleteStmt = db.prepare('DELETE FROM todos WHERE id = ?');
    deleteStmt.run(id);
    return todo;
  }

  // Category operations
  static getAllCategories(): Category[] {
    const stmt = db.prepare(`
      SELECT id, name, color, created_at as createdAt 
      FROM categories ORDER BY name
    `);
    return stmt.all() as Category[];
  }
}