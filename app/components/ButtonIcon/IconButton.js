import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export const IconButton = ({
  name,
  onPress = () => {},
  color = COLORS.softBlue,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.button, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={name} size={23} />
    </TouchableOpacity>
  );
};
