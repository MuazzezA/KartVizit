import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../constants/";
const { SIZES } = theme;

const CustomHeader = ({
  leftFunc = () => {},
  leftIcon,
  rightIcon,
  rightFunc = () => {},
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: SIZES.width,
          paddingHorizontal: SIZES.padding,
        }}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => {
              leftFunc();
            }}>
            {leftIcon ? (
              <Image
                source={leftIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {rightIcon ? (
            <TouchableOpacity
              onPress={() => {
                rightFunc();
              }}>
              <Image
                source={rightIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default CustomHeader;
