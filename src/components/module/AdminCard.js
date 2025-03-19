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
    if (result.message) {
      toast.success(result.message);
    }
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/admin-delete/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    toast.success(data.message);
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
      <button onClick={deleteHandler} className={styles.deleteBtn}>
        حذف
      </button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
