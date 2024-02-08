import Github from "next-auth/providers/github";
import { env } from "./env";
import type { NextAuthConfig } from "next-auth";


export default {
  providers: [
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ]
} satisfies NextAuthConfig;