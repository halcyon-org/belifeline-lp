import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  display: "flex",
  padding: "0.625rem 6.25rem",
  justifyContent: "space-between",
  alignItems: "flex-start",
  alignSelf: "stretch",
  background: vars.color.footerBg,
});

export const menu = style({
  display: "flex",
  padding: "0rem 1.25rem",
  margin: 0,
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "3.125rem",
  alignSelf: "stretch",
  listStyleType: "none",
});

export const menuItem = style({
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
});
