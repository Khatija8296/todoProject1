# Todo Database

## Structure
- `schemas/` - Table definitions
- `migrations/` - Database version control
- `seeds/` - Sample data
- `queries/` - Common SQL queries

## Setup
```bash
sqlite3 todo.db < init.sql
```

## Tables
- **todos** - Main todo items
- **categories** - Todo categories with colors

## Priority Levels
1. Low
2. Medium  
3. High