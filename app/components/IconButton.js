import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const IconButton = ({ icon, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.button}>
      {icon ? (
        <Image source={icon} style={styles.imageIcon} resizeMode="contain" />
      ) : null}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.softBlue,
    height: 50,
    width: 50,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.padding,

    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },

  imageIcon: { width: 30, height: 30, margin: 2, flex: 1 },
});
