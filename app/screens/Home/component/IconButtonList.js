import React from "react";
import { View } from "react-native";
import { IconButton } from "../../../components";
import styles from "./styles";

export const IconButtonList = ({ navigation }) => {
  return (
    <View style={styles.iconButtonContainer}>
      <IconButton
        name="card-account-details-outline"
        onPress={() => {
          navigation.navigate("MyCardsScreen");
        }}
      />
      <IconButton
        name="inbox-arrow-down"
        onPress={() => {
          navigation.navigate("MyCardInboxScreen");
        }}
      />
      <IconButton
        name="poll"
        onPress={() => {
          navigation.navigate("StatisticScreen");
        }}
      />
      <IconButton
        name="share-variant-outline"
        onPress={() => {
          navigation.navigate("ShareCardScreen");
        }}
      />
    </View>
  );
};
