import React from "react";
import { View, Text } from "react-native";

import { COLORS, theme } from "../constants/";
const { FONTS, SIZES } = theme;

import { ProgressChart } from "react-native-chart-kit";

const CustomProgressChart = ({ data = [], descriptionText = "statistic" }) => {
  return (
    <View>
      <ProgressChart
        data={data}
        width={SIZES.width / 2 - 10}
        height={200}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: COLORS.lightGrey,
          backgroundGradientTo: COLORS.lightGrey,
          color: (opacity = 1) => `rgba(120, 90, 90, ${opacity})`,
          style: {
            borderRadius: 16,
            margin: 2,
          },
        }}
        style={{ borderRadius: 16 }}
      />
      <Text
        style={{
          width: SIZES.width / 2 - 10,
          ...FONTS.desc2,
        }}>
        {descriptionText}
      </Text>
    </View>
  );
};

export default CustomProgressChart;
