import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "https://b14-a7-bazar-dor-by-rabbi.vercel.app/",
});

export const {
  signIn,
  signUp,
  signOut,
  updateUser,
  useSession,
} = createAuthClient();
