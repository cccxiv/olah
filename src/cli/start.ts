import { CommandModule } from "yargs"
import Fastify from 'fastify'

const command = 'start'

const describe = 'Start Olah server'

const handler = async function () {
  const fastify = Fastify({
    logger: true
  })

  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

export default {
  command,
  describe,
  handler
} as CommandModule