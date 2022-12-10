import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export const ButtonIconMini = ({
  name,
  onPress = () => {},
  color = "black",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name={name} size={20} color={color} />
    </TouchableOpacity>
  );
};
