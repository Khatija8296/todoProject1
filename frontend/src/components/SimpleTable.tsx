import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { trpc } from '../utils/trpc';

export default function SimpleTable() {
  const { data: todos = [], isLoading, error } = trpc.getTodos.useQuery();
  const { data: categories = [] } = trpc.getCategories.useQuery();
  const [selected, setSelected] = React.useState<readonly number[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = todos.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  if (isLoading) {
    return <div>Loading todos...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={selected.length > 0 && selected.length < todos.length}
                checked={todos.length > 0 && selected.length === todos.length}
                onChange={handleSelectAllClick}
                inputProps={{
                  'aria-label': 'select all todos',
                }}
              />
            </TableCell>
            <TableCell>Todo Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => {
            const category = categories.find(c => c.id === todo.categoryId);
            const isItemSelected = selected.includes(todo.id);
            const labelId = `enhanced-table-checkbox-${todo.id}`;
            
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, todo.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={todo.id}
                selected={isItemSelected}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </TableCell>
                <TableCell component="th" id={labelId} scope="row">
                  {todo.title}
                </TableCell>
                <TableCell>{todo.completed ? 'Completed' : 'Pending'}</TableCell>
                <TableCell>{category?.name || 'No Category'}</TableCell>
                <TableCell align="right">{todo.priority || 1}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}