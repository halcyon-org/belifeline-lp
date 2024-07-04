import { Header } from "@/components/Header";
import type { MetaFunction } from "@remix-run/cloudflare";
import { ReactNode } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index(): ReactNode {
  return (
    <div>
      <Header />
      <h1>Welcome to Belifeline LP</h1>
    </div>
  );
}
