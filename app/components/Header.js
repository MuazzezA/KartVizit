import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../constants/";
const { SIZES } = theme;

const CustomHeader = () => {
  return (
    <View style={{ paddingHorizontal: SIZES.padding }}>
      <View
        style={{
          flexDirection: "row",
          width: SIZES.width,
          paddingHorizontal: SIZES.padding,
        }}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <TouchableOpacity onPress={() => console.log("Menu on clicked")}>
            <Image
              source={require("../assets/icons/menu_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              console.log("Cart on clicked");
            }}>
            <Image
              source={require("../assets/icons/back_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CustomHeader;
