import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

export const ScrollCard = ({ card }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.scrollInside}>
        <View>
          <Image
            source={{ uri: card.cardImageLink }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.cardDescText}>ÖN</Text>
        </View>
        <View>
          <Image
            source={{ uri: card.cardBackImageLink }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.cardDescText}>ARKA</Text>
        </View>
      </View>
    </ScrollView>
  );
};
