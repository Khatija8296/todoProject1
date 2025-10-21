-- Common queries for todo app

-- Get all todos with category info
SELECT 
    t.id,
    t.title,
    t.description,
    t.completed,
    t.priority,
    t.due_date,
    t.created_at,
    t.updated_at,
    c.name as category_name,
    c.color as category_color
FROM todos t
LEFT JOIN categories c ON t.category_id = c.id
ORDER BY t.priority DESC, t.created_at DESC;

-- Get pending todos
SELECT * FROM todos WHERE completed = 0 ORDER BY priority DESC, due_date ASC;

-- Get completed todos
SELECT * FROM todos WHERE completed = 1 ORDER BY updated_at DESC;

-- Get todos by category
SELECT t.*, c.name as category_name 
FROM todos t 
JOIN categories c ON t.category_id = c.id 
WHERE c.name = ?;

-- Get overdue todos
SELECT * FROM todos 
WHERE completed = 0 AND due_date < datetime('now') 
ORDER BY due_date ASC;