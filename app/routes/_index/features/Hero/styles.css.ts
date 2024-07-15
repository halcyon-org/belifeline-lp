
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const hero = style({
  padding: "3.75rem 9.375rem",
  background: "url(/images/hero.svg) no-repeat",
});

export const contents = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: "1 0 0",
  alignSelf: "stretch",
});

export const textBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});

export const title = style({
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "4rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
});

export const text = style({
  alignSelf: "stretch",
  width: "47.5rem",
  color: vars.color.text,
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "1.5rem",
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
  fontSize: "2rem",
});

export const image = style({
  display: "flex",
  height: "36.313rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const scrollText = style({
  rotate: "90deg",
  fontFamily:vars.typography.fontFamily.roboto,
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.225rem",
  textAlign: "left",
  verticalAlign: "bottom",
  height: "1rem",
});

export const scrollBox = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  right: "-8rem",
  justifyContent: "flex-end",
  width: "100%",
});

export const scrollArrow = style({
  content: "url('/images/scroll_arrow.svg')",
  width: "1rem",
  alignSelf: "stretch",
  strokeWidth: "0.125rem",
  stroke: vars.color.text,
});


