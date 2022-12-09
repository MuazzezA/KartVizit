import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../utils/constants";

export default StyleSheet.create({
  style: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding,
    flexDirection: "row",
  },
  text: {
    ...FONTS.h4,
    color: COLORS.purple,
  },
});
