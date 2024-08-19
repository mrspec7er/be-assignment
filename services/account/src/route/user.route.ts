import { FastifyInstance } from "fastify";
import userController from "../controller/user.controller";
import authenticate from "../middleware/auth";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/", { preHandler: [authenticate] }, userController.getUser);
  fastify.post("/signup", userController.signUp);
  fastify.post("/login", userController.login);
}
