import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../../utils/constants";
export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  renderItems: {
    alignItems: "flex-start",
    marginVertical: 10,
  },
  imageContainer: {
    height: 150,
    padding: SIZES.padding / 2,
    width: SIZES.width - SIZES.padding,
    //backgroundColor: COLORS.softBlue,
    justifyContent: "flex-start",
    borderRadius: SIZES.radius,
    flexDirection: "row-reverse",
    borderWidth: 1,
    borderColor: COLORS.softBlue,
  },
  imageItem: {
    height: 110,
    width: 110,
  },
  textContainer: {
    padding: 3,
    borderRadius: SIZES.radius,
    flex: 1,
  },
  button: {
    flex: 1,
    width: SIZES.width,
    alignItems: "center",
  },
  miniButton: {
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.softBlue,
    height: 30,
    width: 100,
    marginHorizontal: SIZES.padding / 2,
    marginBottom: 5,
  },
  createCardContainer: { flex: 1, paddingTop: 30, alignItems: "center" },
});
