import { httpBatchLink } from '@trpc/client';
import { QueryClient } from '@tanstack/react-query';
import { trpc } from './trpc';

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3002/trpc',
    }),
  ],
});