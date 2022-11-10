import React from "react";
import { TextInput, View, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const SearchBar = ({
  value = null,
  placeHolderText = "",
  onChangeFunc = () => {},
  backgroundColor = COLORS.blue,
  icon,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: SIZES.width - SIZES.padding,
        marginHorizontal: SIZES.padding,
        backgroundColor: backgroundColor,
        borderRadius: SIZES.radius,
        height: 40,
        marginVertical: SIZES.padding,
      }}>
      <TextInput
        style={{
          height: 40,
          flex: 1,
          padding: 10,
          borderRadius: SIZES.radius,
          backgroundColor: "transparent",
          ...FONTS.h4,
        }}
        value={value}
        onChange={() => onChangeFunc()}
        placeholder={placeHolderText}
      />
      {icon ? (
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            height: 22,
            width: 22,

            marginHorizontal: 10,
          }}
        />
      ) : null}
    </View>
  );
};
export default SearchBar;
