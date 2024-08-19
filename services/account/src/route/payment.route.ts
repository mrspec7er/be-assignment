import { FastifyInstance } from "fastify";
import paymentController from "../controller/payment.controller";
import authenticate from "../middleware/auth";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get<{ Params: { userId: string } }>(
    "/:userId",
    { preHandler: [authenticate] },
    paymentController.getUserTransaction
  );

  fastify.get<{ Params: { accountId: string } }>(
    "/accounts/:accountId",
    { preHandler: [authenticate] },
    paymentController.getUserTransactionByAccountId
  );
}
