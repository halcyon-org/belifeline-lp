import { type ReactNode } from "react";
import * as styles from "./styles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import classNames from "classnames";

export function Loading(): ReactNode {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to([".loading-icon"], { opacity: 0, duration: 1 }).to(["loading-icon"], {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <div className={styles.loading}>
      <div className={styles.iconframe}>
        <div className={classNames(styles.icon, "loading-icon")}></div>
      </div>
    </div>
  );
}
