async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'World' }
  })
}

module.exports = routes
