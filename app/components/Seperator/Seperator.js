import React from "react";
import { View } from "react-native";
import { COLORS } from "../../utils/constants";
import styles from "./styles";

export const Seperator = ({ color = COLORS.blue2, width = null }) => {
  return (
    <View style={[styles.style, { backgroundColor: color, width: width }]} />
  );
};
