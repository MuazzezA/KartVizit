import { Platform, StyleSheet } from "react-native";
import { SIZES } from "../../../utils/constants";

export default StyleSheet.create({
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.padding / 2,
    elevation: 3,
  },
});
