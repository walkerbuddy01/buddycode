import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "@/serverAction/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserById(user.id as string);

      if (existingUser && !existingUser.emailVerified) {
        await db.user.update({
          where: {
            id: user.id,
          },
          data: {
            emailVerified: new Date(),
          },
        });

        return true;
      }

      return true;
    },
    

    async session({ session, token }) {
      if (session.user) {
        const user = await getUserById(token.sub as string);
        session.user.hasPhoneVerified = user?.hasPhoneVerified || false;
      }
      return session;
    },

    async jwt({ token }) {
      const user = await getUserById(token.sub as string);
      if (user) {
        token.id = user.id;
        token.hasPhoneVerified = user.hasPhoneVerified || false;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
