import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const hero = style({
  display: "flex",
  padding: "60px 150px",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "1 0 0",
  alignSelf: "stretch",
  background: "url(/images/hero.svg) no-repeat",
});

export const textBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
});

export const title = style({
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
});

export const text = style({
  alignSelf: "stretch",
  width: "760px",
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "24px",
  fontStyle: "normal",
  lineHeight: "normal",
});

export const buttonBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  alignSelf: "stretch",
});

export const button = style({
  fontSize: "32px",
});

export const image = style({
  display: "flex",
  height: "581px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
