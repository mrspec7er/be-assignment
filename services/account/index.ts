import Fastify from "fastify";
import routes from "./src/route";
import dotenv from "dotenv";
import { User } from "@supabase/supabase-js";

declare module "fastify" {
  interface FastifyRequest {
    user: User;
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

fastify.listen(
  { port: Number(process.env.PORT), host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  }
);
