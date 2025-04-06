import styles from "./styles.module.css";

import { Logo } from "../Logo/Logo";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <div className={styles.group}>
          <Logo />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
};
