import { CredentialProvider } from "next-auth/providers";
import { veryfiPassword } from "@/utils/auth";
import User from "@/models/User";
import NextAuth from "next-auth";
import connectDB from "@/utils/connectDB";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("Internal server error");
        }

        if (!email || !password) {
          throw new Error("Please enter valid data");
        }

        const user = User.findOne({ email });

        if (!user) throw new Error("Please first create user");

        const isValid = await veryfiPassword(password, user.password);

        if (!isValid) throw new Error("Email or password is incorrect ");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
