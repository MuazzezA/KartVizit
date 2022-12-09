import React from "react";
import { Text, View } from "react-native";
import { SIZES, COLORS } from "../../utils/constants/";
import { CustomProgressChart, Seperator } from "../../components";
import styles from "./styles";

const StatisticScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kart İstatistikleri</Text>
      <CustomProgressChart
        descriptionText="Kart Kapasitesi"
        data={[0.62]}
        isSmallChart={false}
      />
      <Seperator color={COLORS.purple} width={SIZES.width / 1.2} />
      <CustomProgressChart
        descriptionText="Gelen Kartlarım"
        data={[0.36]}
        isSmallChart={false}
      />
      <Seperator color={COLORS.purple} width={SIZES.width / 1.2} />
    </View>
  );
};
export { StatisticScreen };
