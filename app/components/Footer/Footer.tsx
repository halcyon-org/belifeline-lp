import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
          <ul className={styles.menu}>
            <li>
              <a className={styles.menuItem}>プライバシーポリシー</a>
            </li>
            <li>
              <a className={styles.menuItem}>利用規約</a>
            </li>
            <li>
              <a className={styles.menuItem}>お問い合わせ</a>
            </li>
          </ul>
    </footer>
  );
}
