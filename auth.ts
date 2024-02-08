import NextAuth, { type NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./server/db";

import authConfig from "./auth.config";

const authOptions: NextAuthConfig = {
  adapter: DrizzleAdapter(db),
  session: { strategy: "database" },
  ...authConfig
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions)