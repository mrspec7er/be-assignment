import { FastifyReply, FastifyRequest } from "fastify";
import service from "../service/transaction.service";
import response from "../utility/response";

const paymentController = {
  sendTransaction,
  withdrawTransaction,
};

async function sendTransaction(
  req: FastifyRequest<{
    Body: { accountId: string; amount: number; toAddress: string };
  }>,
  reply: FastifyReply
) {
  const user = req.user;
  const { accountId, amount, toAddress } = req.body;
  try {
    const transaction = await service.sendTransaction(user.id, {
      accountId,
      amount,
      toAddress,
    });
    return response.querySuccessResponse(reply, transaction);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function withdrawTransaction(
  req: FastifyRequest<{
    Body: { accountId: string; amount: number };
  }>,
  reply: FastifyReply
) {
  const user = req.user;
  const { accountId, amount } = req.body;
  try {
    const transaction = await service.withdrawTransaction(user.id, {
      accountId,
      amount,
    });
    return response.querySuccessResponse(reply, transaction);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

export default paymentController;
