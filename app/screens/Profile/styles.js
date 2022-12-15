import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../utils/constants/";
export default StyleSheet.create({
  nick: {
    color: COLORS.beige,
    paddingBottom: SIZES.padding / 2,
    textAlign: "center",
    marginTop: SIZES.padding,
    ...FONTS.body2,
  },
  svgBack: {
    opacity: 1,
    position: "absolute",
    zIndex: -1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.softBlue,
    borderRadius: SIZES.radius,
    margin: 5,
    marginTop: -50,
    padding: SIZES.padding / 2,
    paddingTop: 50,
    zIndex: -1,
  },
  buttonContainer: {
    //alignItems: "flex-start",
    marginBottom: SIZES.padding,
    flex: 1,
    justifyContent: "flex-end",
  },
});
