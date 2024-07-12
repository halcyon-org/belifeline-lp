import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  selectors: {
    "&::after": {
      display: "block",
      content: "",
      height: "0.625rem",
      width: "100%",
      background: `linear-gradient(to bottom, ${vars.color.headerBottom}, ${vars.color.background})`,
    },
  },
});

export const headerMenu = style({
  display: "flex",
  padding: "0.625rem 1.25rem",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
});

export const logo = style({
  content: "url('/LogoH.svg')",
  display: "flex",
  padding: "0.471rem 0.382rem 0.763rem 0.383rem",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "0.326rem",
  width: "15.603rem",
  height: "2.516rem",
  flexShrink: 0,
});

export const menu = style({
  display: "flex",
  padding: "0rem 1.25rem",
  justifyContent: "flex-end",
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
  textDecorationLine: "underline",
  color: vars.color.text,
  textDecoration: "none",
});
