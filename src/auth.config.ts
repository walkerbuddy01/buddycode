import type { NextAuthConfig } from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";


export default {
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GIHUB_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
