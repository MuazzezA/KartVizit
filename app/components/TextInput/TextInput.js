import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export const CustomTextInput = ({
  value = null,
  placeHolderText = "",
  onChangeFunc = () => {},
}) => {
  return (
    <TextInput
      style={styles.style}
      value={value}
      onChange={(value) => onChangeFunc(value)}
      placeholder={placeHolderText}
    />
  );
};
