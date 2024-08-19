import { FastifyReply } from "fastify";

const response = {
  querySuccessResponse,
  mutationSuccessResponse,
  badRequestResponse,
  internalServerErrorResponse,
  notFoundResponse,
  unauthorizedResponse,
};

function querySuccessResponse(reply: FastifyReply, data: any) {
  reply.code(200);
  reply.send({
    status: "OK",
    message: "Query Success",
    data,
  });
}

function mutationSuccessResponse(reply: FastifyReply, data: any) {
  reply.code(201);
  reply.send({
    status: "OK",
    message: "Mutation successful",
    data,
  });
}

function badRequestResponse(
  reply: FastifyReply,
  message: string = "Bad Request"
) {
  reply.code(400);
  reply.send({
    status: "FAIL",
    message,
  });
}

function internalServerErrorResponse(
  reply: FastifyReply,
  message: string = "Internal Server Error"
) {
  reply.code(500);
  reply.send({
    status: "ERROR",
    message,
  });
}

function notFoundResponse(
  reply: FastifyReply,
  message: string = "Resource Not Found"
) {
  reply.code(404);
  reply.send({
    status: "FAIL",
    message,
  });
}

function unauthorizedResponse(
  reply: FastifyReply,
  message: string = "Unauthorized"
) {
  reply.code(401);
  reply.send({
    status: "FAIL",
    message,
  });
}

export default response;
