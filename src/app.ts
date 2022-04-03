import Fastify from 'fastify';

export const app = Fastify({
  logger: true,
});

app.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});