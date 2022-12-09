import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export const CustomHeader = ({
  leftFunc = () => {},
  leftIconName,
  rightIconName,
  rightFunc = () => {},
}) => {
  return (
    <View style={styles.style}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => {
            leftFunc();
          }}>
          {leftIconName ? (
            <MaterialCommunityIcons name={leftIconName} size={22} />
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        {rightIconName ? (
          <TouchableOpacity
            onPress={() => {
              rightFunc();
            }}>
            <MaterialCommunityIcons name={rightIconName} size={22} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
