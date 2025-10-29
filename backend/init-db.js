const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'todo.db');
const db = new Database(dbPath);

console.log('🗄️  Initializing database...');

// Read and execute migration
const migrationSQL = fs.readFileSync(path.join(__dirname, '../database/migrations/001_initial_setup.sql'), 'utf8');
db.exec(migrationSQL);

// Read and execute category seeds
const categoriesSQL = fs.readFileSync(path.join(__dirname, '../database/seeds/categories.sql'), 'utf8');
db.exec(categoriesSQL);

// Read and execute todo seeds
const todosSQL = fs.readFileSync(path.join(__dirname, '../database/seeds/todos.sql'), 'utf8');
db.exec(todosSQL);

// Verify setup
const categoryCount = db.prepare('SELECT COUNT(*) as count FROM categories').get();
const todoCount = db.prepare('SELECT COUNT(*) as count FROM todos').get();

console.log('✅ Database initialized successfully');
console.log(`📁 Categories: ${categoryCount.count}`);
console.log(`📝 Todos: ${todoCount.count}`);

db.close();