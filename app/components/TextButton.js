import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const TextButton = ({ buttonText, onPressFunc = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={{
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding,
        flexDirection: "row",
      }}>
      <Text
        style={{
          ...FONTS.h4,
          color: COLORS.purple,
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
export default TextButton;
