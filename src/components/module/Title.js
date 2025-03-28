import styles from "@/module/Title.module.css";
const Title = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default Title;
