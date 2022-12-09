import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../../../utils/constants/";

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  centerContainer: {
    alignItems: "center",
  },
  image: {
    width: SIZES.width - 60,
    height: 180,
  },
  cardDescText: { paddingTop: 3, textAlign: "center", ...FONTS.body4 },
});
