import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../utils/constants";

export default StyleSheet.create({
  style: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: SIZES.width - SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    height: 40,
    marginVertical: SIZES.padding,
  },
  text: {
    height: 40,
    flex: 1,
    padding: 10,
    borderRadius: SIZES.radius,
    backgroundColor: "transparent",
    ...FONTS.h4,
  },
});
