import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    alignItems: "center",
  },
  loginImg: { height: 220, width: 230, justifyContent: "center" },
  header: { ...FONTS.body2, marginVertical: 20 },
  buttonContainer: {
    marginTop: 30,
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.purple,
    height: 45,
    width: 200,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.lightGrey,
  },
});
