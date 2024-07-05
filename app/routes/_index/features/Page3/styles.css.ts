import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page3 = style({
  display: "flex",
  width: "1440px",
  height: "1080px",
  padding: "0px 0px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "url(/images/page3.svg) no-repeat",
});

export const textBox = style({
  width: "1340px",
  height: "800px",
  flexShrink: "0",
});

export const title = style({
  color: "var(---text, #3C4063)",
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
});

export const feats = style({
  display: "flex",
  width: "1340px",
  padding: "150px 0px",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
});

export const feat = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  flex: "1 0 0",
});

export const featTitle = style({
  color: "var(---text, #3C4063)",
  textAlign: "center",
  fontFamily: vars.typography.fontFamily.roboto,
  fontSize: "48px",
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
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  alignSelf: "stretch",
});

export const buttonBox = style({
  display: "flex",
  width: "1340px",
  padding: "50px 50px",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "10px",
  paddingRight: "100px",
});

export const button = style({
  fontSize: "32px",
});
