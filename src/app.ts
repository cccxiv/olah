import { join } from "path";
import Fastify, { FastifyInstance } from "fastify";
import hotwire from "@fastify/hotwire";

const fastify: FastifyInstance = Fastify({
  logger: true,
});

fastify.register(hotwire, {
  templates: join(__dirname, "views"),
  filename: join(__dirname, "worker.js"),
});

fastify.get("/", function (_, reply) {
  reply.render("index.html", { hello: "world" });
});

export default () => {
  fastify.listen({ port: 3000 }, function (err) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};
