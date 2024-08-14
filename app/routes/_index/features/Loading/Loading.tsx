import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Loading(): ReactNode {
  return (
    <div className={styles.loading}>
      <div className={styles.iconframe}>
        <div className={styles.icon}>
        </div>
      </div>
    </div>
  );
}
