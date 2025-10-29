import { router, publicProcedure } from './trpc';
import { TodoDatabase } from './database';
import { z } from 'zod';

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return { message: 'Hello from tRPC!' };
  }),
  
  getTodos: publicProcedure.query(() => {
    return TodoDatabase.getAllTodos();
  }),
  
  addTodo: publicProcedure
    .input(z.object({ title: z.string(), categoryId: z.number() }))
    .mutation(({ input }) => {
      return TodoDatabase.addTodo(input.title, input.categoryId);
    }),

  toggleTodo: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      return TodoDatabase.toggleTodo(input.id);
    }),

  deleteTodo: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      return TodoDatabase.deleteTodo(input.id);
    }),

  getCategories: publicProcedure.query(() => {
    return TodoDatabase.getAllCategories();
  }),
 
});



export type AppRouter = typeof appRouter;