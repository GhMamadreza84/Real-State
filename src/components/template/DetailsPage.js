import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck, BiStore } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import styles from "@/template/DetailsPage.module.css";
const DetailsPage = ({ data }) => {
  const categories = {
    aparatment: "آپارتمان",
    villa: "ویلا",
    store: "مفازه",
    office: "دفتر",
  };

  console.log(data);

  const icons = {
    aparatment: <MdApartment />,
    villa: <RiHome3Line />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <h3 className={styles.title}>توضیحات</h3>
        <p>{data.description}</p>
        <h3 className={styles.title}>امکانات</h3>
        {data.amenities.length ? (
          <ul>
            {data.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        ) : (
          <p>هیج موردی ذکر نشده است</p>
        )}
      </div> */}
      <div className={styles.sidebar}></div>
    </div>
  );
};

export default DetailsPage;
