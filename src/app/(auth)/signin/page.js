import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/template/SigninPage";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
    
  return <SigninPage />;
};

export default Signin;
