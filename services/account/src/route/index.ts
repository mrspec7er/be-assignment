import { FastifyInstance } from "fastify";
import userRoutes from "./user.route";

export default async function routes(fastify: FastifyInstance) {
  fastify.register(userRoutes, { prefix: "/users" }); // Prefix routes for the user module
}
