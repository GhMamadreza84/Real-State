# 🏠 سامانه هوشمند املاک | Real Estate Platform

<div align="center">

یک پلتفرم مدرن و هوشمند برای خرید، فروش و اجاره املاک، توسعه داده شده با Next.js و MongoDB.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Next-Auth](https://img.shields.io/badge/Next--Auth-2f2f2f?style=for-the-badge&logo=next-auth&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

<div align="center">
  <img src="public/images/homepage.png" alt="Screenshot" width="800"/>
</div>

---

## 📝 درباره پروژه (About The Project)

این پروژه یک پلتفرم جامع برای مدیریت و جستجوی املاک و مستغلات است که با هدف ارائه یک تجربه کاربری روان و مدرن طراحی شده است. کاربران می‌توانند به راحتی آگهی‌های مختلف را مشاهده کرده، جستجو کنند و آگهی‌های خود را ثبت نمایند. همچنین یک پنل مدیریت قدرتمند برای ادمین‌ها و یک داشبورد کاربری اختصاصی برای کاربران در نظر گرفته شده است.

### ✨ ویژگی‌های کلیدی (Key Features)

- **جستجوی پیشرفته:** فیلتر کردن املاک بر اساس دسته‌بندی (ویلا، آپارتمان، مغازه، دفتر).
- **سیستم احراز هویت:** ثبت‌نام و ورود امن کاربران با استفاده از Next-Auth.
- **داشبورد کاربری:** مدیریت آگهی‌ها و اطلاعات شخصی کاربران.
- **پنل مدیریت:** کنترل کامل بر روی آگهی‌ها و کاربران توسط ادمین.
- **طراحی واکنش‌گرا (Responsive):** تجربه‌ی کاربری یکپارچه در دسکتاپ و موبایل.
- **صفحه‌بندی پویا:** بارگذاری و نمایش بهینه‌ی آگهی‌ها.

---

## 🛠️ ساخته شده با (Built With)

این پروژه با استفاده از جدیدترین تکنولوژی‌های وب توسعه داده شده است:

* **[Next.js](https://nextjs.org/):** فریمورک React برای ساخت اپلیکیشن‌های وب مدرن و بهینه.
* **[React](https://reactjs.org/):** کتابخانه‌ی محبوب برای ساخت رابط‌های کاربری پویا.
* **[MongoDB](https://www.mongodb.com/):** دیتابیس NoSQL برای ذخیره‌سازی اطلاعات به صورت انعطاف‌پذیر.
* **[Mongoose](https://mongoosejs.com/):** ابزاری برای مدل‌سازی داده‌های MongoDB.
* **[Next-Auth](https://next-auth.js.org/):** راه‌حل کامل برای مدیریت احراز هویت در پروژه‌های Next.js.
* **[React Icons](https://react-icons.github.io/react-icons/):** مجموعه‌ای از آیکون‌های زیبا و کاربردی.

---

## 🚀 شروع به کار (Getting Started)

برای راه‌اندازی پروژه به صورت محلی، مراحل زیر را دنبال کنید.

### پیش‌نیازها (Prerequisites)

- **Node.js:** نسخه‌ی 18.x یا بالاتر.
- **MongoDB:** یک نمونه از دیتابیس MongoDB (می‌توانید از MongoDB Atlas به صورت رایگان استفاده کنید).

### نصب و اجرا (Installation)

1. **پروژه را کلون کنید:**
   ابتدا پروژه را از ریپازیتوری اصلی کلون کنید.

2. **نصب وابستگی‌ها:**
   ```sh
   npm install
   ```

3. **تنظیم متغیرهای محیطی:**
   یک فایل `.env.local` در ریشه‌ی پروژه ایجاد کرده و متغیرهای زیر را در آن قرار دهید:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_super_secret_key
   ```

4. **اجرای پروژه:**
   ```sh
   npm run dev
   ```
   حالا می‌توانید پروژه را در آدرس `http://localhost:3000` مشاهده کنید.

---

## 📂 ساختار پروژه (Project Structure)

ساختار کلی پروژه به شکل زیر است تا توسعه و نگهداری آن ساده باشد:

```
├── public/              # فایل‌های استاتیک (تصاویر، فونت‌ها)
├── src/
│   ├── app/             # مسیرها و صفحات اصلی (Routing)
│   │   ├── (auth)/      # صفحات ثبت‌نام و ورود
│   │   ├── admin/       # پنل مدیریت
│   │   ├── api/         # مسیرهای API
│   │   └── dashboard/   # داشبورد کاربری
│   ├── components/      # کامپوننت‌های قابل استفاده مجدد
│   │   ├── module/      # کامپوننت‌های پیچیده‌تر
│   │   └── template/    # کامپوننت‌های اصلی صفحات
│   ├── models/          # مدل‌های دیتابیس (Mongoose Schemas)
│   ├── providers/       # ارائه‌دهندگان کانتکست (Context Providers)
│   └── utils/           # توابع کمکی و ابزارها
├── .eslintrc.json
├── next.config.js
└── package.json
```