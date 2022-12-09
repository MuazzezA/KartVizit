import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/constants/";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  header: {
    ...FONTS.body2,
  },
});
