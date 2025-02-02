import styles from "@/module/Card.module.css";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { BiLeftArrowAlt, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { e2p } from "@/utils/replaceNumber";
import Link from "next/link";

const getIconForCategory = (category) => {
  switch (category) {
    case "apartment":
      return <MdApartment />;
    case "villa":
      return <RiHome3Line />;
    case "store":
      return <BiStore />;
    case "office":
      return <GiOfficeChair />;
    default:
      return null;
  }
};

const Card = ({ data: { category, title, location, price } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{getIconForCategory(category)}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{e2p(price.toLocaleString())} تومان</span>
      <Link href="/">
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
};

export default Card;
