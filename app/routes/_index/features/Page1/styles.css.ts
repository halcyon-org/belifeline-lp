import { style } from "@vanilla-extract/css";

export const page1 = style({
  width: "1440px",
  height: "1080px",
  display: "flex",
  // paddingTop: "100px",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "100px",
  background: "url(/images/page1.svg) no-repeat",
});

export const textBox = style({
  display: "flex",
  width: "900px",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

export const title = style({
  fontSize: "64px",
  fontWeight: 700,
  textDecorationLine: "underline",
  margin: 0,
});

export const text = style({
  fontSize: "24px",
  margin: 0,
});

export const annotation = style({ fontSize: "18px", margin: 0 });

export const image = style({ width: "757.5px", height: "505px" });
