import { vars } from "@/styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

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
  content: "url(images/animation-logo-v2animated.svg)",
  justifyContent: "start",
  backgroundSize: "contain",
  display: "inline-block",
});
