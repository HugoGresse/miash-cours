import Fastify from 'fastify';
import app from './app.js';
import 'dotenv/config';

const server = Fastify({
  logger: {
    level: process.env.NODE_ENV === 'test' ? 'error' : 'info'
  }
});

// Register the main app
await server.register(app);

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

try {
  await server.listen({ port });
  console.log(`Server listening on ${server.server.address().port}`);
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
