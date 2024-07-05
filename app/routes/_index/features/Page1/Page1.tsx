import type { ReactNode } from "react";
import * as styles from "./styles.css";

export function Page1(): ReactNode {
  return (
    <div className={styles.page1}>
      <div className={styles.textBox}>
        <h2 className={styles.title}>データに新たな価値を</h2>
        <p className={styles.text}>
          本サービスは、現在存在している様々なデータベースの情報を分析し、
          新たなベクトルのデータを提供します。
          そのため、低コストで質の高く様々種類のデータを提供することができます。
          データの収集、分析は本サービスが全て行うため、本サービスを利用する際には個々のデータのフォーマットや入手方法について考える必要がありません。
        </p>
        <p className={styles.annotation}>
          ※使用元のデータや権利等に関しての情報はAPIを通じて取得することができます。
        </p>
      </div>
      <img
        className={styles.image}
        src="/images/page1_sample.jpg"
        alt="sample image"
      />
    </div>
  );
}
