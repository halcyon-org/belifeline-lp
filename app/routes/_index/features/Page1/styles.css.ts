import { style } from "@vanilla-extract/css";

export const page1 = style({
  width: "1440px",
  height: "1080px",
  display: "flex",
  // paddingTop: "100px",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "6.25rem",
  background: "url(/images/page1.svg) no-repeat",
});

export const textBox = style({
  display: "flex",
  width: "56.25rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
});

export const title = style({
  fontSize: "4rem",
  fontWeight: 700,
  textDecorationLine: "underline",
  margin: 0,
});

export const text = style({
  fontSize: "1.5rem",
  margin: 0,
});

export const annotation = style({ fontSize: "1.125rem", margin: 0 });

export const image = style({ width: "47.344rem", height: "31.563rem" });
