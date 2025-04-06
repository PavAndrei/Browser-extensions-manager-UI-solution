import styles from "./styles.module.css";

export const AppLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
