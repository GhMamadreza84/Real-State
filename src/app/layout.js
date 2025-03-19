import Layout from "@/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "پروژه املاک",
  description: "سایت خرید و فروش ملک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children} </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
