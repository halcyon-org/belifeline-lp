import { useState, useEffect } from "react";
import { Loading } from "@/components/Loading/Loading";
import  Page  from "@/routes/_index/route"; // `route.tsx` で定義されているページ

export default function App(): React.ReactNode {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディング画面の表示時間を調整
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // アニメーションの長さに合わせて設定

    // クリーンアップ関数でタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Page />}
    </>
  );
}
