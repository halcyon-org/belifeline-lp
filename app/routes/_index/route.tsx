import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";

export default function Page(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Page1 />
      </main>
    </>
  );
}
