import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../../utils/constants/";

export default StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    marginVertical: 3,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: SIZES.padding,
    flex: 1,
  },
  centerContainer: {
    alignItems: "center",
  },

  scrollInside: { flexDirection: "row" },

  detailText: { ...FONTS.desc2, paddingVertical: SIZES.padding },
  descText: { ...FONTS.desc2, paddingVertical: SIZES.padding },
});
