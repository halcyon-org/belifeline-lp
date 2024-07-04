import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  selectors: {
    "&::after": {
      display: "block",
      content: "",
      height: "10px",
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
  padding: "7.54px 6.11px 12.2px 6.125px",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "5.22px",
  width: "249.64px",
  height: "40.26px",
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
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textDecorationLine: "underline",
});
