import { FastifyInstance } from "fastify";
import userRoutes from "./user.route";
import accountRoutes from "./account.route";
import paymentRoutes from "./payment.route";

export default async function routes(fastify: FastifyInstance) {
  fastify.register(userRoutes, { prefix: "/users" });
  fastify.register(accountRoutes, { prefix: "/accounts" });
  fastify.register(paymentRoutes, { prefix: "/payments" });
}
