import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <span className={styles.logo} />
        <nav>
          <ul className={styles.menu}>
            <li>
              <a className={styles.menuItem}>About</a>
            </li>
            <li>
              <a className={styles.menuItem}>Playground</a>
            </li>
            <li>
              <a className={styles.menuItem}>Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
