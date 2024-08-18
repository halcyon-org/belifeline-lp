import { vars } from "@/styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

export const loading = style({
  width: "1440px",
  height: "1080px",
  display: "flex",
  background: "rgba(155, 162, 168, 0.15)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "6.25rem",
  color: vars.color.footerBg,
});

export const iconframe = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  width: "1440px",
  height: "655px",
});

const pathAnimation = keyframes({
  "0%": {
    strokeDasharray: "0 100",
  },
  "100%": {
    strokeDasharray: "100 0",
  },
});

export const icon = style({
  content: "url(images/logo.svg)",
  justifyContent: "start",
  backgroundSize: "contain",
  display: "inline-block",
});
<<<<<<< Updated upstream
=======

const fadeOut = keyframes({
  "0%": {opacity: 1 },
  "100%": {opacity: 0},
});

export const loadingFadeOut = style({
  animation: `${fadeOut} 1s ease-out`,
});
>>>>>>> Stashed changes
