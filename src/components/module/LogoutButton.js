"use client";
import styles from "@/module/LogoutButton.module.css";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { FiLogOut, FoLogOut } from "react-icons/fi";
const LogoutButton = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutButton;
