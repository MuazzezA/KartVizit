import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const CustomButton = ({ buttonText, onPressFunc = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={{
        backgroundColor: COLORS.purple,
        height: 45,
        width: 200,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding,

        shadowColor: "rgba(0,0,0, .4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android

        flexDirection: "row",
      }}>
      <Text
        style={{
          ...FONTS.h4,
          color: COLORS.lightGrey,
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
