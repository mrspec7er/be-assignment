import { FastifyReply, FastifyRequest } from "fastify";
import service from "../service/payment.service";
import response from "../utility/response";
import { AccountType } from "schema/generated/client";

const paymentController = {
  getUserTransaction,
  getUserTransactionByAccountId,
};

async function getUserTransaction(
  req: FastifyRequest<{ Params: { userId: string } }>,
  reply: FastifyReply
) {
  const { userId } = req.params;
  try {
    const transaction = await service.getUserTransaction(userId);
    return response.querySuccessResponse(reply, transaction);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function getUserTransactionByAccountId(
  req: FastifyRequest<{ Params: { accountId: string } }>,
  reply: FastifyReply
) {
  const { accountId } = req.params;
  try {
    const transaction = await service.getUserTransactionByAccountId(accountId);
    return response.querySuccessResponse(reply, transaction);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

export default paymentController;
