import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignupPage from "@/template/SignupPage";

const Signup = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/")
  return <SignupPage />;
};

export default Signup;
