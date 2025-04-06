import styles from "./styles.module.css";

import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export const FilterButton = ({ children, id, isActive }) => {
  const { changeFiltres } = useContext(DataContext);

  return (
    <button
      onClick={() => changeFiltres(id)}
      className={`${isActive ? styles.activeButton : styles.button}`}
    >
      {children}
    </button>
  );
};
