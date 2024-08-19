import supabase from "../utility/supabase";

const userService = {
  signUp,
  login,
};

async function signUp(payload: { email: string; password: string }) {
  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    throw new Error(error.message);
  }

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
