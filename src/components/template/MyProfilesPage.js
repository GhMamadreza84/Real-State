import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilesPage.module.css";

const MyProfilesPage = ({ profiles }) => {
  return (
    <div className={styles.container}>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
};

export default MyProfilesPage;
