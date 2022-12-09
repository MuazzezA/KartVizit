import React from "react";
import { TextInput, View } from "react-native";
import { COLORS } from "../../utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export const SearchBar = ({
  value = null,
  placeHolderText = "",
  onChangeFunc = () => {},
  backgroundColor = COLORS.blue,
}) => {
  return (
    <View style={[styles.style, { backgroundColor: backgroundColor }]}>
      <TextInput
        style={styles.text}
        value={value}
        onChange={() => onChangeFunc()}
        placeholder={placeHolderText}
      />
      <MaterialCommunityIcons name="magnify" size={23} />
    </View>
  );
};
