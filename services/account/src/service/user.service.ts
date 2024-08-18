import { prisma } from "schema";
import supabase from "../utility/supabase";

const userService = {
  getUsers,
  signUp,
  login,
};

async function getUsers() {
  return await prisma.user.findMany();
}

async function signUp(payload: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    throw new Error(error.message);
  }
  await prisma.user.create({
    data: {
      email: data.user!.email!,
      password: "HANDLE BY SUPABASE",
    },
  });

  return data;
}

async function login(payload: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default userService;
