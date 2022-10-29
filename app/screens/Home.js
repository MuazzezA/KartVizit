import React, { useState } from "react";
import { Text, View, Animated, Image } from "react-native";

import { theme, images } from "../constants/";
const { card1, card2, card3 } = images;
const { COLORS, SIZES, FONTS } = theme;

const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      text: "test 1",
      img: card1,
    },
    {
      text: "test 2",
      img: card2,
    },
    {
      text: "test 3",
      img: card3,
    },
  ];

  return (
    <Animated.ScrollView
      horizontal
      scrollEnabled
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      {cards.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flex: 1,
              height: 300,
              marginVertical: SIZES.padding,
              width: SIZES.width,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                flex: 1,
                height: 280,
                borderRadius: SIZES.radius,
                width: SIZES.width - 20,
                margin: SIZES.radius,

                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#DFD3C3",
              }}>
              <Image
                source={item.img}
                style={{ height: 230, resizeMode: "contain" }}
              />
              <Text>{item.text}</Text>
            </View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};
export default Home;
