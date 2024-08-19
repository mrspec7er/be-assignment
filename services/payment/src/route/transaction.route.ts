import { FastifyInstance } from "fastify";
import transactionController from "../controller/transaction.controller";
import authenticate from "../middleware/auth";

export default async function paymentRoutes(fastify: FastifyInstance) {
  fastify.post<{
    Body: { accountId: string; amount: number; toAddress: string };
  }>(
    "/send",
    { preHandler: [authenticate] },
    transactionController.sendTransaction
  );

  fastify.post<{
    Body: { accountId: string; amount: number };
  }>(
    "/withdraw",
    { preHandler: [authenticate] },
    transactionController.withdrawTransaction
  );
}
