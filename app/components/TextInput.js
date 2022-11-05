import React from "react";
import { TextInput } from "react-native";
import { FONTS } from "../constants/theme";
const CustomTextInput = ({
  value = null,
  placeHolderText = "",
  onChangeFunc = () => {},
}) => {
  return (
    <TextInput
      style={{
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
      }}
      value={value}
      onChange={() => onChangeFunc()}
      placeholder={placeHolderText}
    />
  );
};
export default CustomTextInput;
