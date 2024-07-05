import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <a href="/" className={styles.logo} />
        <nav>
          <ul className={styles.menu}>
            <li>
              <a
                className={styles.menuItem}
                href="https://halcyon-org.github.io/belifeline-schema"
              >
                Schema
              </a>
            </li>
            <li>
              <a
                className={styles.menuItem}
                href="https://github.com/halcyon-org/belifeline-architecture"
              >
                Architecture
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
