import { Platform, StyleSheet } from "react-native";
import { SIZES } from "../../utils/constants";
const SPACING = 5;
const ITEM_SIZE =
  Platform.OS === "ios" ? SIZES.width * 0.74 : SIZES.width * 0.75;

export default StyleSheet.create({
  header: {
    textAlign: "center",
    padding: SIZES.padding,
  },
  cardList: {
    marginTop: SIZES.padding,
    width: ITEM_SIZE,
    height: 200,
  },
  cardInsideItem: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: SIZES.radius,
  },
  cardImage: {
    height: 160,
    resizeMode: "contain",
  },

  charts: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
