import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page3 = style({
  display: "flex",
  width: "90rem",
  height: "67.5rem",
  padding: "0rem 0rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "url(/images/page3.svg) no-repeat",
});

export const textBox = style({
  width: "83.75rem",
  height: "50rem",
  flexShrink: "0",
});

export const title = style({
  color: "var(---text, #3C4063)",
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "4rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
});

export const feats = style({
  display: "flex",
  width: "83.75rem",
  padding: "9.375rem 0rem",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1.25rem",
});

export const feat = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  flex: "1 0 0",
});

export const featTitle = style({
  color: "var(---text, #3C4063)",
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "3rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textDecorationLine: "underline",
  alignSelf: "stretch",
});

export const featDesc = style({
  color: "var(---text, #3C4063)",
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  alignSelf: "stretch",
});

export const buttonBox = style({
  display: "flex",
  width: "83.75rem",
  padding: "3.125rem 3.125rem",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "0.625rem",
  paddingRight: "6.25rem",
});

export const button = style({
  fontSize: "2rem",
});
