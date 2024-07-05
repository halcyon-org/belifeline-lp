import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page2 = style({
  display: "flex",
  width: "1440px",
  height: "1080px",
  paddingTop: "100px",
  justifyContent: "space-between",
  alignItems: "center",
  background: "url(/images/page2.svg) no-repeat",
});

export const image = style({
  width: "577px",
  height: "651px",
  paddingLeft: "70px",
});

export const textBox = style({
  display: "flex",
  width: "700px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
});

export const title = style({
  color: "var(---text, #3C4063)",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textDecorationLine: "underline",
  alignSelf: "stretch",
});

export const text = style({
  color: "var(---text, #3C4063)",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "var(--description-size, 24px)",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  paddingRight: "70px",
  alignSelf: "stretch",
});
