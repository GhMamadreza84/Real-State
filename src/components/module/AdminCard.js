"use client";
import { sp } from "@/utils/replaceNumber";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/module/AdminCard.module.css";

const AdminCard = ({ data: { _id, title, description, price, location } }) => {
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (res.message) {
      toast.success(result.message);
      window.location.reload();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
