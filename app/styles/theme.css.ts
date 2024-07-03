import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: "",
    text: "",
  },
});
export const light = createTheme(vars, {
  color: {
    background: "#ffffff",
    text: "#000000",
  },
});

export const dark = createTheme(vars, {
  color: {
    background: "#000000",
    text: "#ffffff",
  },
});
