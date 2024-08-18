import Fastify from "fastify";
import routes from "./src/route";
import dotenv from "dotenv";

declare module "fastify" {
  interface FastifyRequest {
    user: any;
  }
}

dotenv.config();
const fastify = Fastify({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send({ message: "Hy There!" });
});

fastify.register(routes);

fastify.listen({ port: Number(process.env.PORT) }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
