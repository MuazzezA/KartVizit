import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  blue: "#7895B2",
  softBlue: "#AEBDCA",
  beige: "#E8DFCA",
  lightBeige: "#F5EFE6",
  lightGrey: "#F1F1F1",
  black: "#100F0F",
  purple: "#7858A6",
  lilac: "#C8B6E2",
  white: "#F6F5F5",
  blue2: "#3282B8",
  red: "#BD1616",
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 20,
  padding: 15,

  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 36,

  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: "Montserrat_ExtraBoldItalic",
    fontSize: SIZES.h1,
    lineHeight: 34,
  },
  h2: {
    fontFamily: "Montserrat_Bold",
    fontSize: SIZES.h2,
    lineHeight: 26,
  },
  h3: {
    fontFamily: "Montserrat_Bold",
    fontSize: SIZES.h3,
    lineHeight: 24,
  },
  h4: {
    fontFamily: "Montserrat_Bold",
    fontSize: SIZES.h4,
    lineHeight: 18,
  },
  body1: {
    fontFamily: "Montserrat_Regular",
    fontSize: SIZES.body1,
    lineHeight: 40,
  },
  body2: {
    fontFamily: "Montserrat_Regular",
    fontSize: SIZES.h2,
    lineHeight: 26,
  },
  body3: {
    fontFamily: "Montserrat_Regular",
    fontSize: SIZES.h3,
    lineHeight: 18,
  },

  desc1: {
    fontFamily: "Montserrat_Light",
    fontSize: SIZES.h2,
    lineHeight: 26,
  },
  desc2: {
    fontFamily: "Montserrat_Light",
    fontSize: SIZES.h3,
    lineHeight: 18,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
