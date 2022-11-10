import React from "react";
import { View, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

import { COLORS, theme } from "../constants/";
const { FONTS, SIZES } = theme;

const CustomProgressChart = ({
  data = [],
  descriptionText = "",
  isSmallChart = true,
}) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <ProgressChart
        data={data}
        width={isSmallChart ? SIZES.width / 2 - 10 : 220}
        height={isSmallChart ? 140 : 220}
        hideLegend={false}
        radius={isSmallChart ? 32 : 50}
        strokeWidth={isSmallChart ? 16 : 23}
        chartConfig={{
          backgroundGradientFrom: COLORS.lightGrey,
          backgroundGradientTo: COLORS.lightGrey,
          color: (opacity = 1) => `rgba(120, 90, 90, ${opacity})`,
        }}
        style={{ borderRadius: SIZES.radius }}
      />
      <Text
        style={{
          color: "#785a5a",
          ...FONTS.desc3,
          paddingLeft: isSmallChart ? 18 : 37,
        }}>
        {descriptionText}
      </Text>
    </View>
  );
};

export default CustomProgressChart;
