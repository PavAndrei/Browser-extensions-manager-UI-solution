import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ShutterToggle } from "../ShutterToggle/ShutterToggle";

import styles from "./styles.module.css";

export const Item = ({ item }) => {
  const { removeItem, toggleActivityItem } = useContext(DataContext);

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <img src={item.logo} alt={item.name} className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => removeItem(item.name)} className={styles.remove}>
          Remove
        </button>
        <ShutterToggle
          toggleActivityItem={toggleActivityItem}
          active={item.isActive}
          name={item.name}
        />
      </div>
    </li>
  );
};
