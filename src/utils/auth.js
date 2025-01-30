import { hash, compare } from "bcryptjs";
import connectDB from "./connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function veryfiPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export const getUserJoinDate = async () => {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) return null;

  const user = await User.findOne({ email: session.user.email });
  return user?.createdAt;
};

export { hashPassword, veryfiPassword };
