import { FastifyReply, FastifyRequest } from "fastify";
import service from "../service/user.service";
import response from "../utility/response";

const userController = {
  getUsers: getUser,
  signUp,
  login,
};

async function getUser(req: FastifyRequest, reply: FastifyReply) {
  try {
    const user = req.user;
    return response.querySuccessResponse(reply, user);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function signUp(
  req: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply
) {
  const { email, password } = req.body;
  try {
    const user = await service.signUp({ email, password });
    return response.mutationSuccessResponse(reply, user);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

async function login(
  req: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply
) {
  const { email, password } = req.body;
  try {
    const user = await service.login({ email, password });
    return response.mutationSuccessResponse(reply, user);
  } catch (err: any) {
    return response.badRequestResponse(reply, err.message);
  }
}

export default userController;
