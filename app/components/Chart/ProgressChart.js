import React from "react";
import { View, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { COLORS, theme } from "../../utils/constants";
const { SIZES } = theme;
import styles from "./styles";

export const CustomProgressChart = ({
  data = [],
  descriptionText = "",
  isSmallChart = true,
}) => {
  return (
    <View>
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
      />
      <Text style={[styles.text, { paddingLeft: isSmallChart ? 18 : 37 }]}>
        {descriptionText}
      </Text>
    </View>
  );
};
