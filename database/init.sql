-- Todo App Database Initialization
-- Run this file to set up the complete database

-- Enable foreign keys
PRAGMA foreign_keys = ON;

-- Run migration
.read migrations/001_initial_setup.sql

-- Seed categories
.read seeds/categories.sql

-- Seed todos
.read seeds/todos.sql

-- Verify setup
SELECT 'Database initialized successfully' as status;
SELECT COUNT(*) as category_count FROM categories;
SELECT COUNT(*) as todo_count FROM todos;