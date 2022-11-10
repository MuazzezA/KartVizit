import React from "react";
import { View } from "react-native";
import { theme } from "../constants";
const { COLORS, SIZES } = theme;

const Seperator = ({ color = COLORS.blue2, width = null }) => {
  return (
    <View
      style={{
        height: 1.2,
        backgroundColor: color,
        margin: SIZES.padding,
        width: width,
      }}
    />
  );
};

export default Seperator;
