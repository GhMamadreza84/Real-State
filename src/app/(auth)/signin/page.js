import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SigninPage from "@/template/SigninPage";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SigninPage />;
};

export default Signin;
