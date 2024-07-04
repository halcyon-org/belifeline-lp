import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: "",
    text: "",
    highlight: "",
    headerBottom: "",
    footerBg: "",
    btnBg: "",
    bgLine: "",
    bgMask: "",
  },
  typography: {
    fontFamily: {
      roboto: "",
    },
  },
});

createGlobalTheme(":root", vars, {
  color: {
    background: "#FFFFFF",
    text: "#3C4063",
    highlight: "#8467D7",
    headerBottom: "#EEE9F9",
    footerBg: "#9BA2A8",
    btnBg: "#C4CED4",
    bgLine: "#8467D7",
    bgMask: "#F9F7FF",
  },
  typography: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
  },
});
