import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Hero } from "./features/Hero/Hero";

export default function Page(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
