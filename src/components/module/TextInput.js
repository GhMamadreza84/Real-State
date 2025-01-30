import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
        ></textarea>
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={(e) => changeHandler(e)}
        />
      )}
    </div>
  );
};

export default TextInput;
