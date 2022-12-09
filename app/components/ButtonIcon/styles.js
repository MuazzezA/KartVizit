import { StyleSheet } from "react-native";
import { SIZES } from "../../utils/constants";

export default StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },

  imageIcon: { width: 30, height: 30, margin: 2, flex: 1 },
});
