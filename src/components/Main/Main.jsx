import { Container } from "../Container/Container";
import { List } from "../List/List";
import { MainBar } from "../MainBar/MainBar";

import styles from "./styles.module.css";

export const Main = () => {
  return (
    <main>
      <Container>
        <div className={styles.group}>
          <MainBar />
          <List />
        </div>
      </Container>
    </main>
  );
};
