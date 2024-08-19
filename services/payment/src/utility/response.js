"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = {
    querySuccessResponse,
    mutationSuccessResponse,
    badRequestResponse,
    internalServerErrorResponse,
    notFoundResponse,
    unauthorizedResponse,
};
function querySuccessResponse(reply, data) {
    reply.code(200);
    reply.send({
        status: "OK",
        message: "Query Success",
        data,
    });
}
function mutationSuccessResponse(reply, data) {
    reply.code(201);
    reply.send({
        status: "OK",
        message: "Mutation successful",
        data,
    });
}
function badRequestResponse(reply, message = "Bad Request") {
    reply.code(400);
    reply.send({
        status: "FAIL",
        message,
    });
}
function internalServerErrorResponse(reply, message = "Internal Server Error") {
    reply.code(500);
    reply.send({
        status: "ERROR",
        message,
    });
}
function notFoundResponse(reply, message = "Resource Not Found") {
    reply.code(404);
    reply.send({
        status: "FAIL",
        message,
    });
}
function unauthorizedResponse(reply, message = "Unauthorized") {
    reply.code(401);
    reply.send({
        status: "FAIL",
        message,
    });
}
exports.default = response;
