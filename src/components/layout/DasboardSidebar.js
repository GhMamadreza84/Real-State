import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/layout/DasboardSidebar.module.css";
import Link from "next/link";
import LogoutButton from "@/module/LogoutButton";

const DasboardSidebar = async ({ children, email, role }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <h4>{role === "ADMIN" ? "ادمین" : null}</h4>
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DasboardSidebar;
