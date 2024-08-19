import { FastifyInstance } from "fastify";
import accountController from "../controller/account.controller";
import authenticate from "../middleware/auth";

export default async function accountRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/",
    { preHandler: [authenticate] },
    accountController.getUserAccount
  );
  fastify.post<{ Body: { type: string } }>(
    "/",
    { preHandler: [authenticate] },
    accountController.createAccount
  );
}
