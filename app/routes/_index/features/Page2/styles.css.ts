import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page2 = style({
  display: "flex",
  width: "1440px",
  height: "1080px",
  paddingTop: "6.25rem",
  justifyContent: "space-between",
  alignItems: "center",
  background: "url(/images/page2.svg) no-repeat",
});

export const image = style({
  width: "577px",
  height: "651px",
  paddingLeft: "4.375rem",
});

export const textBox = style({
  display: "flex",
  width: "43.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.25rem",
});

export const title = style({
  color: "var(---text, #3C4063)",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "4rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textDecorationLine: "underline",
  alignSelf: "stretch",
});

export const text = style({
  color: "var(---text, #3C4063)",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "var(--description-size, 1.5rem)",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  paddingRight: "4.375rem",
  alignSelf: "stretch",
});
