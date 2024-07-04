import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import "@/styles/globals.css";
import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";

export function Layout({ children }: { children: React.ReactNode }): ReactNode {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): ReactNode {
  return <Outlet />;
}

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "BeLifeline LP" },
    { name: "description", content: "BeLifeline landing page" },
    { name: "og:title", content: "BeLifeline LP" },
    { name: "og:description", content: "BeLifeline landing page" },
    { name: "og:url", content: "https://belifeline-lp.pages.dev" },
    { name: "og:image", content: "https://belifeline-lp.pages.dev/ogp.png" },
    {
      property: "og:image:url",
      content: "https://belifeline-lp.pages.dev/ogp.png",
    },
    { property: "og:image:alt", content: "BeLifeline LP" },
    { name: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "BeLifeline LP" },
    { name: "twitter:description", content: "BeLifeline landing page" },
    {
      name: "twitter:image",
      content: "https://belifeline-lp.pages.dev/ogp.png",
    },
    { name: "twitter:image:alt", content: "BeLifeline LP" },
  ];
};
