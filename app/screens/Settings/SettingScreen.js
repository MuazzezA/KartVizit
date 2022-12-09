import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export const SettingScreen = ({ route }) => {
  const user = route.params;

  return (
    <View>
      <Text>Setting Screen</Text>
    </View>
  );
};
