import { FastifyReply, FastifyRequest } from "fastify";
import service from "../service/account.service";
import response from "../utility/response";
import { AccountType } from "schema/generated/client";

const accountController = {
  getUserAccount,
  createAccount,
};

async function getUserAccount(req: FastifyRequest, reply: FastifyReply) {
  const user = req.user;
  try {
    const account = await service.getAccountsByUserId(user.id);
    return response.querySuccessResponse(reply, account);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function createAccount(
  req: FastifyRequest<{ Body: { type: string; balance: number } }>,
  reply: FastifyReply
) {
  const { type, balance } = req.body;
  const user = req.user;
  try {
    const account = await service.createAccount(
      user.id,
      type as AccountType,
      balance
    );
    return response.mutationSuccessResponse(reply, account);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

export default accountController;
