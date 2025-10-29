import { createTRPCReact } from '@trpc/react-query';

// Define the router type locally for now
type AppRouter = {
  getTodos: any;
  getCategories: any;
  addTodo: any;
  toggleTodo: any;
  deleteTodo: any;
  hello: any;
};

export const trpc = createTRPCReact<AppRouter>();