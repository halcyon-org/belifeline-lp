import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Hero } from "./features/Hero/Hero";
import { Page1 } from "./features/Page1/Page1";
import { Page2 } from "./features/Page2/Page2";
import { Page3 } from "./features/Page3/Page3";
import { Footer } from "@/components/Footer";

export default function Page() : ReactNode{

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Page1 />
        <Page2 />
        <Page3 />
      </main>
      <Footer />
    </>
  );
};
