import styles from "./styles.module.css";

export const ShutterToggle = ({ toggleActivityItem, active, name }) => {
  return (
    <button
      className={`${styles.toggle} ${active ? styles.active : ""}`}
      onClick={() => toggleActivityItem(name)}
    >
      <span className={`${styles.thumb} ${active ? styles.thumbActive : ""}`} />
    </button>
  );
};
