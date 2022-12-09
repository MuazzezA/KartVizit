import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../utils/constants";

export default StyleSheet.create({
  style: {
    flexDirection: "row",
    backgroundColor: COLORS.purple,
    height: 45,
    width: 200,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  text: {
    ...FONTS.h4,
    color: COLORS.lightGrey,
  },
});
