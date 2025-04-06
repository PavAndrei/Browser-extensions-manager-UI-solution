import styles from "./styles.module.css";

import { Title } from "../Title/Title";
import { Filters } from "../Filters/Filters";

export const MainBar = () => {
  return (
    <div className={styles.bar}>
      <Title>Extensions List</Title>
      <Filters />
    </div>
  );
};
