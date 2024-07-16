
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const hero = style({
  
  background: "url(/images/hero.svg) no-repeat",
});

export const contents = style({
  display: "flex",
  padding: "3.75rem 9.375rem 0rem 9.375rem",
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

export const scrollBox = style({
  display: "flex",
  alignItems: "flex-start",
  gap: 0,
  justifyContent: "flex-end",
  width: "100%",
  margin:"0rem 5rem 3rem 0rem",
});


export const scroll = style({
  content: "url('/images/scroll.svg')",
  padding:"0rem 3rem 0rem 0rem",
  width: "55px",
  strokeWidth: "2px",
  stroke: vars.color.text,
});


