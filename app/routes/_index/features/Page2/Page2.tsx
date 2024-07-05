import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Page2(): ReactNode {
  return (
    <div className={styles.page2}>
      <img
        className={styles.image}
        src="/images/api.webp"
        alt="api reference"
      />
      <div className={styles.textBox}>
        <h2 className={styles.title}>
          APIを通じた
          <br />
          データの提供
        </h2>
        <p className={styles.text}>
          本サービスの分析によって生まれた多様なデータをAPIを通して手軽に取得、利用することができます。APIの形式でデータを提供するため、様々なサービスやソフトウェアに本サービスのデータを使用することができます。
        </p>
      </div>
    </div>
  );
}
