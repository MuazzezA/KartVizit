import React from "react";
import { Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { COLORS, SIZES } from "../constants";
import { CustomProgressChart, Seperator } from "../components/";
import { theme } from "../constants";
const { FONTS } = theme;

const StatisticCardScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 30 }}>
      {/* <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: COLORS.lilac,
          backgroundGradientTo: COLORS.purple,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "black",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> */}
      <Text
        style={{
          ...FONTS.body2,
        }}>
        Kart İstatistikleri
      </Text>

      <CustomProgressChart
        descriptionText="Kart Kapasitesi"
        data={[0.62]}
        isSmallChart={false}
      />

      <Text style={{ ...FONTS.body1 }}> </Text>
      <Seperator color={COLORS.blue2} width={SIZES.width / 1.2} />
      <CustomProgressChart
        descriptionText="Gelen Kartlarım"
        data={[0.36]}
        isSmallChart={false}
      />
      <Seperator color={COLORS.blue2} width={SIZES.width / 1.2} />
    </View>
  );
};
export default StatisticCardScreen;
