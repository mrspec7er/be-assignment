import { FastifyReply, FastifyRequest } from "fastify";
import supabase from "../utility/supabase";

export default async function authenticate(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return reply.status(401).send({ message: "No token provided" });
    }

    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return reply.status(401).send({ message: "Invalid token" });
    }
    req.user = data.user;
  } catch (error) {
    return reply.status(401).send({ message: "Unauthorized" });
  }
}
