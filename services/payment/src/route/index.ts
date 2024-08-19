import { FastifyInstance } from "fastify";
import transactionRoutes from "./transaction.route";

export default async function routes(fastify: FastifyInstance) {
  fastify.register(transactionRoutes, { prefix: "/transactions" });
}
