import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck, BiShare, BiShareAlt, BiStore } from "react-icons/bi";
import { icons } from "@/constants/icons";
import { e2p, sp } from "@/utils/replaceNumber";
import styles from "@/template/DetailsPage.module.css";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import ShareButton from "@/module/ShareButton";
import { categories } from "@/constants/strings";
const DetailsPage = ({
  link,
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) => {
  const url = `https://real-state-gh.vercel.app/buy-residential/${link}`;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone /> {e2p(phone)}
          </span>
        </div>
        <div className={styles.share}>
          <BiShareAlt />
          <ShareButton url={url} />
        </div>
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
