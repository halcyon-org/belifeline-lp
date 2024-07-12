import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const linkButton = style({
  display: "flex",
  padding: "0.625rem",
  alignItems: "flex-start",
  gap: "0.625rem",
  borderRadius: "0.5rem",
  border: `0.0625rem solid ${vars.color.text}`,
  background: vars.color.background,
  textDecoration: "none",
  color: vars.color.text,
});
