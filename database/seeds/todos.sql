-- Seed data for todos
INSERT OR IGNORE INTO todos (title, description, completed, priority, category_id, due_date) VALUES
('Complete project proposal', 'Finish the Q4 project proposal document', 0, 3, 1, '2024-12-31 17:00:00'),
('Buy groceries', 'Milk, bread, eggs, vegetables', 0, 2, 3, '2024-12-25 18:00:00'),
('Morning workout', '30 minutes cardio and strength training', 1, 1, 4, '2024-12-24 07:00:00'),
('Learn TypeScript', 'Complete advanced TypeScript course', 0, 2, 5, '2024-12-30 23:59:59'),
('Call dentist', 'Schedule annual checkup appointment', 0, 1, 4, '2024-12-26 16:00:00');