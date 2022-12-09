import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../utils/constants/";
export default StyleSheet.create({
  name: {
    textAlign: "center",
    marginTop: SIZES.padding,
    ...FONTS.body3,
  },
  svgBack: {
    opacity: 0.4,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
});
