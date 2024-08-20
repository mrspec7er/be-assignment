"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const route_1 = __importDefault(require("./src/route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fastify = (0, fastify_1.default)({
  logger: true,
});
fastify.get("/", function (request, reply) {
  reply.send({ message: "Hy There!" });
});
fastify.register(route_1.default);
fastify.listen({ port: Number(process.env.PORT) }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
