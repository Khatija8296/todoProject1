import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
}));

app.get('/health', (req, res) => {
  res.json({ status: 'Backend running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend on http://localhost:${PORT}`);
  console.log(`📡 tRPC on http://localhost:${PORT}/trpc`);
});