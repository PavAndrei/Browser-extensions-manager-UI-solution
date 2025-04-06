import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { Item } from "../Item/Item";

import styles from "./styles.module.css";

export const List = () => {
  const { filteredData } = useContext(DataContext);

  return (
    <ul className={styles.list}>
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return <Item key={item.name} item={item} />;
        })
      ) : (
        <p className={styles.message}>The data can't be found</p>
      )}
    </ul>
  );
};
