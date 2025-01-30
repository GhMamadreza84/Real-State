import { getUserJoinDate } from "@/utils/auth";
import styles from "@/template/DashboardPage.module.css";

const DashboardPage = async () => {
  const joinDate = await getUserJoinDate();
  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{new Date(joinDate).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
