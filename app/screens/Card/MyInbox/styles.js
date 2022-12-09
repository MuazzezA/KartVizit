import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../utils/constants/";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  renderItems: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 10,
  },
  imageContainer: {
    height: 130,
    padding: SIZES.padding / 2,
    width: SIZES.width - SIZES.padding,
    //backgroundColor: COLORS.softGreen,
    justifyContent: "flex-start",
    borderRadius: SIZES.radius,
    flexDirection: "row",
    borderColor: COLORS.softBlue,
    borderWidth: 1,
  },
  imageItem: {
    height: 110,
    flex: 1,
    alignSelf: "flex-start",
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
});
