"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import Loader from "@/module/Loader";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      toast.success("ساخت حساب با موفقیت انجام شد. لطفا صبر کنید");
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام :</h4>
      <form>
        <lable>ایمیل:</lable>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <lable>رمز عبور:</lable>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <lable>تکرار رمز عبور:</lable>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={(e) => signupHandler(e)}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignupPage;
