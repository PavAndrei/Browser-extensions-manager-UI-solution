import { FilterButton } from "../FilterButton/FilterButton";

import styles from "./styles.module.css";

import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export const Filters = () => {
  const { filtres } = useContext(DataContext);

  return (
    <ul className={styles.group}>
      {filtres.map((filter) => (
        <li key={filter.id}>
          <FilterButton isActive={filter.isActive} id={filter.id}>
            {filter.label}
          </FilterButton>
        </li>
      ))}
    </ul>
  );
};
