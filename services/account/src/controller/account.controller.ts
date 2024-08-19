import { FastifyReply, FastifyRequest } from "fastify";
import service from "../service/account.service";
import response from "../utility/response";
import { AccountType } from "schema/generated/client";

const accountController = {
  getUserAccount,
  createAccount,
};

async function getUserAccount(
  req: FastifyRequest<{ Params: { userId: string } }>,
  reply: FastifyReply
) {
  const { userId } = req.params;
  try {
    const account = await service.getAccountsByUserId(userId);
    return response.querySuccessResponse(reply, account);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function createAccount(
  req: FastifyRequest<{ Body: { type: string } }>,
  reply: FastifyReply
) {
  const { type } = req.body;
  const user = req.user;
  try {
    const account = await service.createAccount(type as AccountType, user.id);
    return response.mutationSuccessResponse(reply, account);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

export default accountController;
