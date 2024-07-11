import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  display: "flex",
  padding: "0.625rem 6.25rem",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  alignSelf: "stretch",
  position: "relative",
  background: vars.color.footerBg,
});

export const menuContainer = style({
  display: "flex",
  alignItems: "center",
});

export const menu = style({
  display: "inline-flex",
  padding: "0rem 1.25rem",
  margin: 0,
  justifyContent: "center",
  alignItems: "center",
  gap: "3.125rem",
  alignSelf: "stretch",
  listStyleType: "none",
});

export const menuItem = style({
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  display: "inline-block",
  position: "relative",
  paddingRight: "0.625rem", 
  textAlign: "center",
  textDecoration: "none",
});


export const Text = style({
  position: "absolute",
  right: "4rem",
  bottom: "0.95rem",
  textAlign: "center",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  marginLeft: "0rem",
});

export const Divider = style({
  display: "inline-block",
  height: "50%",
  borderLeft: "1px solid",
  margin: "0rem",
  verticalAlign: "midddle",
});

