import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/constants";

export default StyleSheet.create({
  style: {
    height: 50,
    width: 300,
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "white",
    ...FONTS.h4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});
