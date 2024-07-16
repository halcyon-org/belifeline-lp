import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { LinkButton } from "@/components/LinkButton/LinkButton";

export function Hero(): ReactNode {
  return (
    <div className={styles.hero}>
      <div className={styles.contents}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>
            災害時にこそ役にたつ
            <br />
            データプラットフォームを
          </h1>
          <p className={styles.text}>
            Belifelineは様々な状況で役立つデータを提供するデータプラットフォームです。本サービスを利用することで、どなたでもAPIを通じて災害に関連した様々なデータを簡単に取得することができます。
          </p>
          <div className={styles.buttonBox}>
            <LinkButton className={styles.button}>Get Started</LinkButton>
          </div>
        </div>
        <img className={styles.image} src="/images/map.webp" alt="sample map" />
      </div>
      <div className={styles.scrollBox}>
        <span className={styles.scroll} />
      </div>
    </div>
  );
}
