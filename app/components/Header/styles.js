import { StyleSheet } from "react-native";
import { SIZES } from "../../utils/constants";

export default StyleSheet.create({
  style: {
    flexDirection: "row",
    width: SIZES.width,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding / 2,
  },
  inputContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
});
