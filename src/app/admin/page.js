import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import DasboardSidebar from "@/layout/DasboardSidebar";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const user = await User.findOne({ email: session.user.email });
  if (!user.role === "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });
  return (
    <DasboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DasboardSidebar>
  );
};

export default Admin;
