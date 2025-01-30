import DasboardSidebar from "@/layout/DasboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DasboardSidebar>{children}</DasboardSidebar>;
};

export default DashboardLayout;
