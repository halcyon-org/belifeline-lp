import type { ReactNode } from "react";
import * as styles from "./styles.css";
import { LinkButton } from "@/components/LinkButton/LinkButton";

export function Page3(): ReactNode {
  return (
    <div className={styles.page3}>
      <div className={styles.textBox}>
        <h2 className={styles.title}>Summary</h2>
        <div className={styles.feats}>
          <div className={styles.feat}>
            <h3 className={styles.featTitle}>
              災害時に
              <br />
              役にたつデータを
            </h3>
            <p className={styles.featDesc}>
              本サービスを利用することで、どなたでもAPIを通じて災害に関連した様々なデータを簡単に取得することができます。
            </p>
          </div>
          <div className={styles.feat}>
            <h3 className={styles.featTitle}>
              データに
              <br />
              新たな価値を
            </h3>
            <p className={styles.featDesc}>
              本サービスは、現在存在している様々なデータベースの情報を分析し、新たなベクトルのデータを提供します。そのため、低コストで質の高く様々種類のデータを提供することができます。
            </p>
          </div>
          <div className={styles.feat}>
            <h3 className={styles.featTitle}>
              APIを通じた <br />
              データの提供
            </h3>
            <p className={styles.featDesc}>
              本サービスの分析によって生まれた多様なデータをAPIを通して手軽に取得、利用することができます。様々なサービスやソフトウェアに本サービスのデータを使用することができます。
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonBox}>
        <LinkButton className={styles.button}>Get Started</LinkButton>
      </div>
    </div>
  );
}
