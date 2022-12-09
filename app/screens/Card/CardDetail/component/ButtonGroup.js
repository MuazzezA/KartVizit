import React from "react";
import { Text, View } from "react-native";
import { IconButton } from "../../../../components";
import { COLORS } from "../../../../utils/constants/";
import styles from "./styles";
import { deleteMyCard } from "../../../../service/card/deleteCard";

export const ButtonGroup = ({ index, isMyCard, navigation }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.centerContainer}>
        <IconButton
          name="trash-can-outline"
          color={COLORS.red}
          onPress={() => deleteMyCard(index, { navigation })}
        />
        <Text style={styles.descText}>Kartı Sil</Text>
      </View>

      {isMyCard ? (
        <View style={styles.centerContainer}>
          <IconButton name="share-variant-outline" />
          <Text style={styles.descText}>Kartı Paylaş</Text>
        </View>
      ) : (
        <View style={styles.centerContainer}>
          <IconButton name="account-plus-outline" />
          <Text style={styles.descText}>Kişilere Ekle</Text>
        </View>
      )}
    </View>
  );
};
