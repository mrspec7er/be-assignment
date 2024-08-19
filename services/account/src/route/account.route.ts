import { FastifyInstance } from "fastify";
import accountController from "../controller/account.controller";
import authenticate from "../middleware/auth";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get<{ Params: { userId: string } }>(
    "/:userId",
    { preHandler: [authenticate] },
    accountController.getUserAccount
  );
  fastify.post<{ Body: { type: string } }>(
    "/",
    { preHandler: [authenticate] },
    accountController.createAccount
  );
}
