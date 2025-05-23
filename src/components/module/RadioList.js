import styles from "@/module/RadioList.module.css";

const RadioList = ({ profileData, setProfileData }) => {
  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            id="villa"
            name="category"
            value="villa"
            checked={category === "villa"}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            checked={category === "apartment"}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            id="store"
            name="category"
            value="store"
            checked={category === "store"}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            id="office"
            name="category"
            value="office"
            checked={category === "office"}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;
