import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../../utils/constants";

export default StyleSheet.create({
  scrollFlex: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
    paddingVertical: SIZES.padding,
  },
  backSvg: {
    opacity: 0.5,
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    zIndex: -1,
    marginTop: 150,
    alignSelf: "flex-end",
  },
  infoTextBig: { ...FONTS.body2, marginVertical: 20 },
  buttonContainer: {
    marginTop: 30,
    justifyContent: "center",
  },
});
